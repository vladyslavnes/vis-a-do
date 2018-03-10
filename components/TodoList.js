import React from 'react'
import axios from 'axios'
import TodoItem from './TodoItem'
import {
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView } from 'react-native'

export default class TodoList extends React.Component {
  constructor (props) {
    super(props)
    this.removeTodo = this.removeTodo.bind(this)
    this.markTodo = this.markTodo.bind(this)
  }

  removeTodo (id) {
    // Alert.alert(String(id),JSON.stringify(this.props))
    this.props.data.splice(id, 1)
    this.props.reset()
    axios.delete(`${this.props.baseURL}/${id}`)
  }

  markTodo (id) {
    this.props.data[id].isDone = !this.props.data[id].isDone
    this.props.reset()
    this.forceUpdate()
    // Alert.alert(String(id),JSON.stringify(this.props))
    axios.put(`${this.props.baseURL}/${id}`, this.props.data[id])
  }

  render () {
    // Alert.alert('', JSON.stringify(this.props.data))
    return (
      <View>
        <ScrollView style={styles.container}>
          {this.props.data
            .sort((a, b) => a._id - b._id)
            .map((item, id) => (<TodoItem 
              reset={this.props.reset}
              data={this.props.data}

              key={Math.random()} 
              id={item._id} 
              content={item.content} 
              done={item.isDone} 
              date={item.date || 'timeless'} 
              removeTodo={id => this.removeTodo(id)} 
              markTodo={this.markTodo} 
            />)
          )}
            </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'space-between',
    paddingTop: 15
  }
})
