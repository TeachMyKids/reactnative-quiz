import React from 'react';
import { MathContainer } from './components';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super();
    this.props = props;

    let data = [];
    for (let i = 2; i <= 5; i++) {
      for (let j = 1; j <= 10; j++) {
        data.push([i, 'x', j, i * j]);
      }
    }

    for (let i = 2; i <= 5; i++) {
      for (let j = 1; j <= 10; j++) {
        data.push([i * j, ':', i, j]);
      }
    }

    this.state = {
      data
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MathContainer data={this.state.data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
