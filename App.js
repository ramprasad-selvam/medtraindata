import React, { Component } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.movies });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center ', justifyContent: 'center' }}>
        {isLoading && data.length ? <ActivityIndicator /> :
          data.map((item, i) => {
            return <Text key={i}>{item.title}, {item.releaseYear}</Text>
          })
        }
      </View>
    );
  }
};