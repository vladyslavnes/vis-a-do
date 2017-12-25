import React from 'react';
import TodoList from './components/TodoList';
import { 
  StyleSheet,
  Text,
  View,
  Button,
  Alert 
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [
        {
          title: 'Vis-a-do',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          date: Date(),
          img: ''
        },
        {
          title: 'Vis-a-do',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          date: Date(),
          img: ''
        },
        {
          title: 'Vis-a-do',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          date: Date(),
          img: ''
        },
        {
          title: 'Vis-a-do',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          date: Date(),
          img: ''
        },
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='Add todo' onPress={() => {}} />
        <TodoList data={this.state.data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  button: {
  }
});

/*
  selectImage () {
    let options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response)

      if (response.didCancel) {
        console.log('User cancelled image picker')
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      }
      else {
        let filePath = RNFS.DocumentDirectoryPath + '/test-image.jpeg'
        console.log('response', response)
        RNFS.writeFile(filePath, response.data, 'base64')
          .then(() => {
            console.log('saved file', filePath)
          })
          .catch(err => {
            console.log('error save file', err)
          })
        this.setState({
          avatarSource: { uri: response.uri }
          // avatarSource: { uri: 'file://' + filePath }
        }, () => { console.log('avatar', this.state.avatarSource) })
      }
    })
}*/