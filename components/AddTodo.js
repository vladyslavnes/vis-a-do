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

export default class AddTodo extends React.Component {

  constructor (props) {
    super(props)

    this.baseURL = 'https://blooming-bastion-79548.herokuapp.com/api/v1/todos'
  }

  async addTodo (content) {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date()
      })

      if (action !== DatePickerAndroid.dismissedAction) {
        const newObj = {
          _id: this.props.id || this.props.data.length,
          content,
          date: new Date(year, month, day, 0, 0, 0),
          isDone: false
        }

        if (this.props.id !== undefined) {
          console.warn('editing', newObj)
          this.props.data[this.props.id] = newObj
          this.props.reset()
          axios.put(`${this.baseURL}/${this.props.id}`, newObj)
        } else {
          this.props.data.push(newObj)
          axios.post(this.baseURL, newObj)
          return
        }
      }
    } catch ({code, message}) {
       console.warn('Cannot open date picker', code, message)
    }
  }

  render () {
    return this.props.editing ? (
      <View style={styles.container}>
        <TextInput
          onSubmitEditing={text => this.addTodo(text.nativeEvent.text)} 
        />
        {/*<Button title='fine' onPress={() => this.props.closeEditDialogue()} />*/}
      </View>
      ) : (
      <View style={styles.container}>
        <Text>Todo text</Text>
        <TextInput onSubmitEditing={text => this.addTodo(text.nativeEvent.text)} />
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
