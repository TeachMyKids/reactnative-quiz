import React from 'react';
import { QuizContainer } from '../components/containers';
import { StyleSheet, Text, View } from 'react-native';
import { TextAsk, TextAskWithResult, ImageAsk } from '../components/quiz-ask';
import { EnterWord } from '../components/user-inputs';

export default class WordInputApp extends React.Component {
  constructor(props) {
    super();
    this.props = props;

    let data = [];

    data.push({
      ask: {
        type: ImageAsk,
        content: require('../assets/images/5.jpg')
      },
      value: 'HELLO',
      input: {
        type: EnterWord,
        wordLength: 5,
        symbols: [
          'A', 'X', 'H', 'E', 'L', 'L', 'O', 'V', 'D', 'P'
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
