import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ErrorMessage } from 'formik'


const ErrorMessageComponent = ({name}) => {
  return (
    <View>
      <Text style={styles.errorText}>
        <ErrorMessage name={name}  />
      </Text>
    </View>
  )
}

export default ErrorMessageComponent

const styles = StyleSheet.create({
  errorText:{
    color: 'red',
    fontSize: 13,
    marginLeft: 2,
  }
})