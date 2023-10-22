import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './src/screen/Login'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screen/home/Home'
import { Provider } from 'react-redux'
import store from './src/store/store'


const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row"
    // backgroundColor: 'red'
  },
  secondContainer: {
    flex: 2,
    backgroundColor: 'red'
  },
  thirdContainer: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  forthContainer: {
    flex: 1,
    backgroundColor: 'navy'
  },













  text: {
    fontSize: 30,
    color: 'red',
    textAlign: 'center'
  },

})



