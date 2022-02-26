import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import axios from 'axios';

export default function CreateAdScreen({navigation}) {
  const [productDetails, setProductDetails] = React.useState({
    productname: '',
    price: '',
    description: '',
    yearPurchased: '',
    contact: '',
  });
  const [image, setImage] = React.useState('');

  const sendNotification = async () => {
    try{
      const querySnap = await firestore().collection('userToken').get();
      const tokens = querySnap.docs.map(docSnap => docSnap.data().token);
      //send these tokens to backend service and bulk send notifications
    }catch(error){
      console.log('error',error);
      Alert.alert(error);
    }
  };

  async function handleSubmitAd() {
    try {
      await firestore()
        .collection('ads')
        .add({
          ...productDetails,
          image,
          uuid: auth().currentUser.uid,
        });
      Alert.alert('ad posted');
      setTimeout(() => {
        setProductDetails({
          productname: '',
          price: '',
          description: '',
          yearPurchased: '',
          contact: '',
        });
        setImage('');
        navigation.navigate('Home');
      }, 1000);
      sendNotification();
    } catch (error) {
      Alert.alert(error);
    }
  }

  async function uploadImage() {
    try {
      launchCamera({quality: 0.5}, capturedImage => {
        const storageRef = storage().ref().child(`/items/${Date.now()}`);
        const uploadTask = storageRef.putFile(capturedImage.uri);

        uploadTask.on(
          'state_changed',
          snapshot => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            if (progress === 100) Alert.alert('image uploaded');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          },
          error => {},
          () => {
            storageRef
              .getDownloadURL(uploadTask.snapshot.ref)
              .then(downloadURL => {
                setImage(downloadURL);
              });
          },
        );
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  return (
    <View style={styles.createAdWrapper}>
      <Text style={styles.title}>Sell Your Product</Text>
      <View>
        <View>
          <TextInput
            mode="outlined"
            placeholder="Product Name"
            label="Product Name"
            value={productDetails.productname}
            onChangeText={name =>
              setProductDetails({...productDetails, productname: name})
            }
          />
        </View>
        <View>
          <TextInput
            mode="outlined"
            placeholder="Product Description"
            label="Product Description"
            value={productDetails.description}
            onChangeText={desc =>
              setProductDetails({...productDetails, description: desc})
            }
          />
        </View>
        <View>
          <TextInput
            mode="outlined"
            keyboardType="numeric"
            label="Year Of Purchase"
            placeholder="Year In Which You Bought The Product"
            value={productDetails.yearPurchased}
            onChangeText={year =>
              setProductDetails({...productDetails, yearPurchased: year})
            }
          />
        </View>
        <View>
          <TextInput
            mode="outlined"
            keyboardType="numeric"
            label="Selling Price"
            placeholder="Price At Which You Want To Sell"
            value={productDetails.price}
            onChangeText={price =>
              setProductDetails({...productDetails, price})
            }
          />
        </View>
        <View>
          <TextInput
            mode="outlined"
            label="Mobile"
            keyboardType="numeric"
            placeholder="Mobile Number"
            value={productDetails.contact}
            onChangeText={number =>
              setProductDetails({...productDetails, contact: number})
            }
          />
        </View>
        <Button
          style={styles.button}
          onPress={uploadImage}
          icon="camera"
          mode="contained">
          Upload Image
        </Button>
        <Button
          onPress={handleSubmitAd}
          style={styles.button}
          mode="contained"
          disabled={image.length > 0 ? false : true}>
          Create Ad
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 22,
  },
  createAdWrapper: {
    margin: 20,
  },
  button: {
    marginTop: 20,
  },
});
