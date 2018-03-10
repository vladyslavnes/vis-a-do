import React from 'react'
import AddTodo from './AddTodo'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  FlatList } from 'react-native'

export default class TodoItem extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      editing: false
    }

    this.closeEditDialogue = this.closeEditDialogue.bind(this)
  }

  editTodo (data, id) {}

  closeEditDialogue () {}

  render () {
    return this.state.editing ? (
        <View style={styles.container}>
          <AddTodo reset={this.props.reset} editing={true} closeEditDialogue={this.closeEditDialogue} data={this.props.data} id={this.props.id} />
        </View>
      ) : (
      <View key={this.id} style={styles.container}>

        <Text>{this.props.id}</Text>
        <Text style={!this.props.done ? styles.text : styles.inactiveText}>{this.props.content}</Text>
        <Text style={styles.dateText}>{this.props.date.toString()}</Text>
        <View style={styles.buttons}>
          <Button title={`${this.props.done ? 'Not' : ''} Done`} onPress={() => this.props.markTodo(this.props.id)} />
          <Button title='Edit' onPress={() => this.setState({editing: true})} />
          <Button title='Delete' onPress={() => this.props.removeTodo(this.props.id)} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  text: {
    fontSize: 25,
    color: '#000000'
  },
  inactiveText:  {
    fontSize: 25,
    textDecorationLine: 'line-through'
  },
  dateText: {
    fontSize: 16,
    color: '#999'
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
  }
})
