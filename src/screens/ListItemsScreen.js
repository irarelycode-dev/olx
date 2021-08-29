import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Button, Card, Paragraph} from 'react-native-paper';

const ListItemsScreen = () => {
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

  const renderFlatListItem = ({item}) => (
    <Card style={styles.card}>
      <Card.Title title={item.name} />
      <Card.Content>
        <Paragraph>{item.description}</Paragraph>
        <Paragraph>{item.year}</Paragraph>
      </Card.Content>
      <Card.Cover source={{uri: item.image}} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Call Seller</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={item => item.phone}
        renderItem={renderFlatListItem}
      />
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
