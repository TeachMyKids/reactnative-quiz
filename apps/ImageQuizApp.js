import React from 'react';
import { QuizContainer } from '../components/containers';
import { StyleSheet, Text, View } from 'react-native';
import { TextAsk, TextAskWithResult, ImageAsk } from '../components/quiz-ask';
import { NumberButtons, SelectOne } from '../components/user-inputs';

export default class ImageQuizApp extends React.Component {
  constructor(props) {
    super();
    this.props = props;

    let data = [];

    data.push({
      id: 1,
      ask: {
        type: ImageAsk,
        content: require('../assets/images/5.jpg')
      },
      value: 'D',
      input: {
        type: SelectOne,
        answers: [
          {text: 'A', value: 'A'},
          {text: 'B', value: 'B'},
          {text: 'C', value: 'C'},
          {text: 'DDD DD', value: 'D'}
        ]
      }
    });

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
