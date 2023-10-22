import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { DataTable } from 'react-native-paper';
import styles from './card.style'

const Card = () => {

  const card = useSelector(state => state.card.products)


  return (
    <ScrollView>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Title</DataTable.Title>
          <DataTable.Title>Price</DataTable.Title>
          <DataTable.Title>Quantity</DataTable.Title>
          <DataTable.Title numeric>Image</DataTable.Title>
        </DataTable.Header>

        {card.map((item) => (
          <DataTable.Row style={styles.row} key={item.key} >
            <DataTable.Cell>{item.title}</DataTable.Cell>
            <DataTable.Cell >{item.price}</DataTable.Cell>
            <DataTable.Cell centered>{item.quantity ? item.quantity : '1'}</DataTable.Cell>
            <DataTable.Cell numeric >
              <Image style={styles.cardImage} source={{uri: item.thumbnail}} />
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </ScrollView>
  )
}

export default Card