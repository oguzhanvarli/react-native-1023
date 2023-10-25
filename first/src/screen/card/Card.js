import { View, Text, Image, ScrollView, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DataTable } from 'react-native-paper';
import styles from './card.style'
import { clearCard, decrementQuantity, incrementQuantity } from '../../store/features/cardSlice';

const Card = () => {

  const card = useSelector(state => state.card.products)
  const dispatch = useDispatch()
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    getTotal()
  }, [card])
  

  const getTotal = async() => {
    let value = 0
    await card.map((item) => {
      value += item.quantity * item.price
    })
    setTotalPrice(value)
  }


  return (
    <ScrollView>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Title</DataTable.Title>
          <DataTable.Title>Price</DataTable.Title>
          <DataTable.Title>Quantity</DataTable.Title>
          <DataTable.Title numeric>Image</DataTable.Title>
        </DataTable.Header>

        {card.map((item, key) => (
          <DataTable.Row style={styles.row} key={key} >
            <DataTable.Cell>{item.title}</DataTable.Cell>
            <DataTable.Cell >{item.price}</DataTable.Cell>
            <DataTable.Cell centered>
              <Button style={styles.button} title="-" onPress={() => dispatch(decrementQuantity(item))}/>
              {item.quantity ? item.quantity : '1'}
              <Button style={styles.button} title="+" onPress={() => dispatch(incrementQuantity(item))}/>
              </DataTable.Cell>
            <DataTable.Cell numeric >
              <Image style={styles.cardImage} source={{uri: item.thumbnail}} />
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
      <Text>Total Price = {totalPrice}</Text>
      <Button title='Clear Card' onPress={() => dispatch(clearCard())} color={'red'} />

    </ScrollView>
  )
}

export default Card