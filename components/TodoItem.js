import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  FlatList } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      	<Text style={styles.text}>{this.props.title}</Text>
        <Text style={styles.text}>{this.props.text}</Text>
        <Text style={styles.text}>{this.props.date}</Text>
        <Image source={this.props.img} style={styles.img} />
        <Button title='Edit' onPress={() => {}} />
        <Button title='Delete' onPress={() => {}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    padding: 15,
  },
  img: {
    width: '100%'
  },
  text: {
    fontSize: 25,
    // borderWidth: 0.5,
    color: '#000000',
  }
});
