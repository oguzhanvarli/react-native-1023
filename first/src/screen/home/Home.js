import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './home.style'
import baseService from '../../services/service/baseService'
import ProductComponent from '../../components/ProductComponent'

const Home = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    baseService.get('/products').then(res => setProducts(res.products))
  }

  return (
    <View>
      <FlatList data={products} renderItem={({item}) => <ProductComponent item={item}/>} />
    </View>
  )
}

export default Home

