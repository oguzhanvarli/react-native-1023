import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './home.style'
import baseService from '../../services/service/baseService'
import ProductComponent from '../../components/ProductComponent'
import { Button } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../store/features/categorySlice'
import CategoriesComponent from '../../components/CategoriesComponent'

const Home = ({ navigation }) => {

  const card = useSelector(state => state.card.number)
  const dispatch = useDispatch()

  const [products, setProducts] = useState([])

  useEffect(() => {
    getData()
  }, [])



  const getData = async() => {
    await baseService.get('/products').then(res => setProducts(res.products))
    dispatch(getCategory())
  }

  const goToDetails = (item) => {
    navigation.navigate('ProdoctDetails', { product: item })
  }

  return (
    <View>

      <FlatList
        data={products}
        refreshing={true}
        renderItem={({ item }) => <ProductComponent item={item} onPress={() => goToDetails(item)} />}
        ListEmptyComponent={<ActivityIndicator size="large" color="crimson" />}
        ListHeaderComponent={
          <View style={styles.buttonContainer}>
            <Button mode="contained" style={styles.cardButton} onPress={() => navigation.navigate('Card')}>
              {card === 0 ? 'Card' : card}
            </Button>
            <CategoriesComponent />
          </View>}
      />
    </View>
  )
}

export default Home

