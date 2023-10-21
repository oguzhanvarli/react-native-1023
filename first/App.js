import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './src/screen/Login'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
      //  <View style={styles.secondContainer}></View>
      // <View style={styles.thirdContainer}></View>
      // <View style={styles.forthContainer}></View> 
      //  <Text style={styles.text}>Oğuzhan Varlı</Text>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row"
    // backgroundColor: 'red'
  },
  secondContainer : {
    flex: 2,
    backgroundColor: 'red'
  },
  thirdContainer : {
    flex: 1,
    backgroundColor: 'yellow'
  },
  forthContainer: {
    flex: 1,
    backgroundColor: 'navy'
  },













  text : {
    fontSize: 30,
    color: 'red',
    textAlign: 'center'
  },

})



