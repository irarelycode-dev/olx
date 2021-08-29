import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
export default function CreateAdScreen() {
  const [productDetails, setProductDetails] = React.useState({
    productname: '',
    price: '',
    description: '',
    yearPurchased: '',
    contact: '',
  });

  function handleSubmitAd() {}

  function uploadImage() {}

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
        <Button onPress={handleSubmitAd} style={styles.button} mode="contained">
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
