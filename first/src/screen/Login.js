import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import ErrorMessageComponent from '../components/ErrorMessageComponent'
import axios from 'axios'



const loginSchema = yup.object().shape({
  username: yup.string().required('Username is Required!'),
  password: yup.string().required('Password is Required!')
})


const Login = () => {

  const handleLogin = (values) => {
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Giriş Yap</Text>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={values => handleLogin(values)}
        validationSchema={loginSchema}
      >
        {({ values, handleSubmit, handleChange, handleBlur }) => (
          <>
            <Text style={styles.inputText}>Username</Text>
            <TextInput
              autoFocus={true}
              style={styles.input}
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username} />
            <ErrorMessageComponent name={'username'} />
            <Text style={styles.inputText}>Password</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry={true} />
            <ErrorMessageComponent name={"password"} />
            <View style={styles.button} >
              <Button title='Login' color="crimson" onPress={handleSubmit} />
            </View>
          </>

        )}

      </Formik>
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
    marginTop: 15
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'navy',
    borderRadius: 10,
    // width: 
  },
  button: {
    marginTop: 20
  }
})