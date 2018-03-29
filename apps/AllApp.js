import React from 'react';
import { QuizContainer } from '../components/containers';
import { StyleSheet, Text, View } from 'react-native';
import { TextAsk, TextAskWithResult } from '../components/quiz-ask';
import { NumberButtons, SelectOne } from '../components/user-inputs';

export default class AllApp extends React.Component {
  constructor(props) {
    super();
    this.props = props;

    let data = [];
    for (let i = 2; i <= 5; i++) {
      for (let j = 1; j <= 10; j++) {
        data.push({
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
          ask: {
            type: TextAsk,
            content: `${(i * j)} : ${i} = `
          },
          value: j,
          input: {
            type: NumberButtons
          }
        });
      }
    }

    for (let i = 2; i <= 5; i++) {
      for (let j = 1; j <= 10; j++) {
        data.push({
          ask: {
            type: TextAsk,
            content: `${i} x ${j} = `
          },
          answers: [
            {text: 'A', value: 'A'},
            {text: 'B', value: 'B'},
            {text: 'C', value: 'C'},
            {text: 'DDD DD', value: 'D'}
          ],
          value: 'D',
          input: {
            type: SelectOne
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
