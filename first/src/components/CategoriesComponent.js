import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const CategoriesComponent = () => {
  const categories = useSelector(state => state.category.categories)

  return (
    <View style={styles.container}>
      <FlatList data={categories}
        renderItem={({ item }) =>
          <View style={styles.customButton}>
            <Button  title={item} onPress={null} />
          </View>
        }
        horizontal={true}
      />
    </View>
  )
}

export default CategoriesComponent

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  customButton: {
    margin: 10,
  }
})