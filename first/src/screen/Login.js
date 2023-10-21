import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Login = () => {
  const [loginData, setLoginData] = useState({
    username : "",
    password : ""
  })

  const handleLogin = () => {
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Giriş Yap</Text>
      <>
        <Text style={styles.inputText}>Username</Text>
        <TextInput
          autoFocus={true}
          style={styles.input}
          onChangeText={newText => setLoginData({...loginData, username: newText})}
          value={loginData.username} />
      </>
      <>
        <Text style={styles.inputText}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={newPasword => setLoginData({...loginData, password: newPasword})}
          value={loginData.password}
          secureTextEntry={true} />
      </>
      <Button title='Login' color="crimson" onPress={() => handleLogin()} />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    paddingHorizontal: '15%',
  },
  headerText: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    marginVertical: 40
  },
  inputText: {
    color: 'white',
    fontSize: 17,
    marginLeft: 5,
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'navy',
    borderRadius: 10,
    marginBottom: 20
    // width: 
  }
})