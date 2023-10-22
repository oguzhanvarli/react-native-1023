import { View, Text } from 'react-native'
import React from 'react'

const ProductDetails = ({route}) => {

  const {product} = route.params
  return (
    <View>
      <Text>{product.title}</Text>
      <Text>{product.description}</Text>
    </View>
  )
}

export default ProductDetails