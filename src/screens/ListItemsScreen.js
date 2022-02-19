import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Linking,
  Platform,
  Text,
} from 'react-native';
import {
  Button,
  Card,
  Paragraph,
  ActivityIndicator,
  Colors,
} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

const ListItemsScreen = () => {
  const [ads, setAds] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const items = [
    {
      name: 'vaccum cleaner',
      year: '2013',
      phone: '8887776665',
      image:
        'https://images.unsplash.com/photo-1558317374-067fb5f30001?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
      description:
        'a vaccum cleaner roobot to clean the corners of the house where you cannot reach',
    },
    {
      name: 'iphone 6s',
      year: '2015',
      phone: '99988887776',
      image:
        'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      description: 'iphone 6s used for 6 years, bought in 2015',
    },
  ];

  const getItems = async () => {
    try {
      setLoading(true);
      const querySnap = await firestore().collection('ads').get();
      const adsRes = querySnap.docs.map(docSnapShot => docSnapShot.data());
      console.log('adRes', adsRes.length);
      setAds(adsRes);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getItems();
    return () => {};
  }, []);

  const openDial = phone => {
    if (Platform.OS === 'android') {
      Linking.openURL(`tel:${phone}`);
    } else {
      Linking.openURL(`telprompt:${phone}`);
    }
  };

  const renderFlatListItem = ({item}) => (
    <Card style={styles.card}>
      <Card.Title title={item.name} />
      <Card.Content>
        <Paragraph>{item.description}</Paragraph>
        <Paragraph>{item.year}</Paragraph>
      </Card.Content>
      <Card.Cover
        source={{
          uri:
            item.image ||
            'https://firebasestorage.googleapis.com/v0/b/sell-me-6e72d.appspot.com/o/items%2F1645287374377?alt=media&token=dca3f3b0-b6fb-4142-9412-753da9863deb',
        }}
      />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button onPress={() => openDial(item.contact)}>Call Seller</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View>
      {loading ? (
        <ActivityIndicator animating={true} color={Colors.red800} />
      ) : (
        <View>
          {error ? (
            <Text>Oops :(</Text>
          ) : (
            <FlatList
              data={ads}
              keyExtractor={(item, index) => index}
              renderItem={renderFlatListItem}
              onRefresh={() => getItems()}
              refreshing={loading}
            />
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    elevation: 3,
  },
});

export default ListItemsScreen;
