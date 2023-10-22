import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { addToCard } from '../store/features/cardSlice';

const ProductComponent = ({ item, onPress }) => {

  const dispatch = useDispatch()

  return (
    <Card style={styles.cardContainer}>
      <Card.Title title={item.title} />
      <Card.Content>
        <Text variant="bodyMedium">{item.brand}</Text>
      </Card.Content>
      <Card.Cover style={styles.image} source={{ uri: item.thumbnail }} />
      <Card.Actions>
        <Button onPress={() => dispatch(addToCard(item))}>Add to Card</Button>
        <Button onPress={onPress}>Details</Button>
      </Card.Actions>
    </Card>
  )
};

export default ProductComponent;

const styles = StyleSheet.create({
  cardContainer: {
    margin: 15
  },
  image: {
    margin: 10
  }
})