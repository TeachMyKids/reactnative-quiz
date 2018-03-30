import React from 'react';
import { QuizContainer } from '../components/containers';
import { StyleSheet, Text, View } from 'react-native';
import { TextAsk, TextAskWithResult, ImageAsk, FillInBlank } from '../components/quiz-ask';
import { SelectValues } from '../components/user-inputs';

export default class FillInBlankApp extends React.Component {
  constructor(props) {
    super();
    this.props = props;

    let data = [{
      ask: {
        type: FillInBlank,
        content: `_______ gonna change my love for ___`
      },
      value: [
        'Nothing',
        'you'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: 'Nothing', value: 'Nothing'},
          {text: 'gonna', value: 'gonna'},
          {text: 'you', value: 'you'},
          {text: 'me', value: 'me'}
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
