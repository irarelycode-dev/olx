import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
export default function CreateAdScreen() {
  const [productDetails, setProductDetails] = React.useState({
    productname: '',
    price: '',
    description: '',
    yearPurchased: '',
  });

  function handleSubmitAd() {}

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
        <View><TextInput
          mode="outlined"
          placeholder="Product Description"
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
          placeholder="Price At Which You Want To Sell"
          value={productDetails.price}
          onChangeText={price => setProductDetails({...productDetails, price})}
        />
        </View>
        <Button onPress={handleSubmitAd}>Create Ad</Button>
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
});
