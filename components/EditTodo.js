import React from 'react'
import axios from 'axios'

import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  DatePickerAndroid } from 'react-native'

export default class EditTodo extends React.Component {
  async editTodo (content) {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date()
      })
      
      if (action !== DatePickerAndroid.dismissedAction) {
        const newObj = {
          _id: this.props.data.length,
          content,
          date: new Date(year, month, day),
          isDone: false
        }

        this.props.data[this.props.data.length] = newObj

        axios.post(this.props.baseURL, newObj)
      }
    } catch ({code, message}) {
       console.warn('Cannot open date picker', message)
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput onSubmitEditing={text => this.editTodo(text.nativeEvent.text)} />
        <Text>{this.props.data[this.props.id].content}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignContent: 'space-between',
    paddingTop: 15
  }
})
