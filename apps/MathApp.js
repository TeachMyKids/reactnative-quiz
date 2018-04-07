import React from 'react';
import { QuizContainer } from '../components/containers';
import { StyleSheet, Text, View } from 'react-native';
import { TextAskWithResult } from '../components/quiz-ask';
import { NumberButtons } from '../components/user-inputs';

export default class App extends React.Component {
  constructor(props) {
    super();
    this.props = props;

    let data = [];
    for (let i = 2; i <= 5; i++) {
      for (let j = 1; j <= 10; j++) {
        data.push({
          id: i*j,
          ask: {
            type: TextAskWithResult,
            content: `${i} x ${j} = `
          },
          value: i * j,
          input: {
            type: NumberButtons
          }
        });
      }
    }

    for (let i = 2; i <= 5; i++) {
      for (let j = 1; j <= 10; j++) {
        data.push({
          id: i*j,
          ask: {
            type: TextAskWithResult,
            content: `${(i * j)} : ${i} = `
          },
          value: j,
          input: {
            type: NumberButtons
          }
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
        <QuizContainer data={this.state.data} />
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
