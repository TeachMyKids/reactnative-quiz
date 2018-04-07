import React from 'react';
import { QuizContainer } from '../components/containers';
import { StyleSheet, Text, View } from 'react-native';
import { TextAsk, TextAskWithResult, ImageAsk } from '../components/quiz-ask';
import { EnterWord } from '../components/user-inputs';

export default class WordInputApp extends React.Component {
  constructor(props) {
    super();
    this.props = props;

    let data = [{
      id: 1,
      ask: {
        type: ImageAsk,
        content: require('../assets/images/5.jpg')
      },
      value: 'HELLO',
      input: {
        type: EnterWord,
        symbols: [
          'A', 'X', 'H', 'E', 'L', 'L', 'O', 'V', 'D', 'P'
        ]
      }
    },
    {
      id: 2,
      ask: {
        type: ImageAsk,
        content: require('../assets/images/4.jpg')
      },
      value: 'COW',
      input: {
        type: EnterWord,
        symbols: [
          'C', 'O', 'W'
        ]
      }
    },{
      id: 3,
      ask: {
        type: ImageAsk,
        content: require('../assets/images/3.jpg')
      },
      value: 'HAPPY',
      input: {
        type: EnterWord,
        symbols: [
          'H', 'A', 'H', 'E', 'L', 'L', 'Y', 'V', 'D', 'P'
        ]
      }
    }];

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
