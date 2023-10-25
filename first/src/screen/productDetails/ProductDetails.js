import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSelector } from 'react-redux'
import CategoriesComponent from '../../components/CategoriesComponent'

const ProductDetails = ({route}) => {

  

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async() => {
    let user = await AsyncStorage.getItem('token')
    console.log(user)
  }
  

  const {product} = route.params
  return (
    <View>
      <CategoriesComponent />
      <Text>{product.title}</Text>
      <Text>{product.description}</Text>
      
    </View>
  )
}

export default ProductDetails