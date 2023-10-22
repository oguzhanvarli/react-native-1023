import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './home.style'
import baseService from '../../services/service/baseService'
import ProductComponent from '../../components/ProductComponent'
import { Button } from 'react-native-paper'
import { useSelector } from 'react-redux'

const Home = ({ navigation }) => {

  const card = useSelector(state => state.card.number)

  const [products, setProducts] = useState([])

  useEffect(() => {
    getData()
  }, [])



  const getData = () => {
    baseService.get('/products').then(res => setProducts(res.products))
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
          </View>}
      />
    </View>
  )
}

export default Home

