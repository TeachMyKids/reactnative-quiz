import React from 'react';
import { MathContainer } from '../components/containers';
import { StyleSheet, Text, View } from 'react-native';

import { NumberButtons } from '../components/user-inputs';

export default class App extends React.Component {
  constructor(props) {
    super();
    this.props = props;

    let data = [];
    for (let i = 2; i <= 5; i++) {
      for (let j = 1; j <= 10; j++) {
        data.push({
          type: 'SIMPLE',
          content: `${i} x ${j} = `,
          value: i * j,
          input: NumberButtons
        });
      }
    }

    for (let i = 2; i <= 5; i++) {
      for (let j = 1; j <= 10; j++) {
        data.push({
          type: 'SIMPLE',
          content: `${(i * j)} : ${i} = `,
          value: j,
          input: NumberButtons
        });
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
