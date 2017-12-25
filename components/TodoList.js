import React from 'react';
import TodoItem from './TodoItem';
import {
	StyleSheet,
	Text,
	View,
	Alert,
	FlatList } from 'react-native';

export default class App extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			todos: this.props.data
		}
	}

	// async componentWillMount() {
	// 	try {
	// 	  const data = await AsyncStorage.getItem('@');
	// 	  if (data !== null){
	// 	    this.setState({
	// 	    	todos: JSON.parse(data)
	// 	    })
	// 	  }
	// 	} catch (err) {
	// 		this.setState({
	// 			todos: []
	// 		})
	// 	}
	// }

	addTodo() {}

	render() {
		// Alert.alert('',JSON.stringify(this.state.todos))
    	return (
    	  <View>
    	  	<FlatList style={styles.container}
				data={this.state.todos}
				renderItem={({item}) => <TodoItem key={Math.random()} title={item.title} text={item.text} date={item.date} img={item.img} />}
			/>
    	  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  	width: '100%',
  	display: 'flex',
  	alignContent: 'space-between',
  	paddingTop: 15
  },
});
