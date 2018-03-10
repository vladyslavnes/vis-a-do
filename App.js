import React from 'react'
import axios from 'axios'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.baseURL = 'https://blooming-bastion-79548.herokuapp.com/api/v1/todos'

    this.state = {
      view: 'list',
      data: []
    }

    this.editing = false
    this.reset = this.reset.bind(this)
  }

  async componentWillMount (state, props) {
    this.setState({data: (await this.getTodos()).data})
    // Alert.alert(JSON.stringify(this.state.data))
  }

  async getTodos () {
    return axios(this.baseURL)
  }

  renderView (view) {
    switch (view) {
      case 'list':
        return <TodoList reset={() => this.reset()} editTodo={this.editTodo} data={this.state.data} setData={this.setData} />
      case 'add':
        return <AddTodo reset={() => this.reset()} editing={this.editing} data={this.state.data} baseURL={this.baseURL} />
    }
  }

  reset () {
    this.forceUpdate()
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.topNav}>
          <Button title='Add todo' onPress={() => {this.setState({view: 'add'})}} />
          <Button title='My todos' onPress={() => {this.setState({view: 'list'})}} />
        </View>
        {this.renderView(this.state.view)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    flex: 1,
    backgroundColor: '#f7f7f7'
  },
  topNav: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
