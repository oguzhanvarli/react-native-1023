import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import styles from './home.style'
import baseService from '../../services/service/baseService'

const Home = () => {

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    baseService.get('/producs').then(res => console.log(res))
  }

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

