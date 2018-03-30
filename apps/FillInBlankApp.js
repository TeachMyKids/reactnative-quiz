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
    }, {
      ask: {
        type: FillInBlank,
        content: 'I don\'t want to _____ alone'
      },
      value: [
        'sleep'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: 'sleep', value: 'sleep'},
          {text: 'gonna', value: 'gonna'},
          {text: 'you', value: 'you'},
          {text: 'wake up', value: 'wake up'}
        ]
      }
    }, {
      ask: {
        type: FillInBlank,
        content: `___ can fly`
      },
      value: [
        'bird'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: 'bird', value: 'bird'},
          {text: 'dog', value: 'dog'},
          {text: 'cat', value: 'cat'},
          {text: 'fish', value: 'fish'}
        ]
      }
    }, {
      ask: {
        type: FillInBlank,
        content: `I will _____ to Dubai next month. ____ you like to ____ with me`
      },
      value: [
        'travel',
        'would',
        'come'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: 'travel', value: 'travel'},
          {text: 'would', value: 'would'},
          {text: 'come', value: 'come'},
          {text: 'fly', value: 'fly'},
          {text: 'swim', value: 'swim'},
          {text: 'stay home', value: 'stay home'},
          {text: 'eat', value: 'eat'},
          {text: 'drink', value: 'drink'},
          {text: 'play', value: 'play'}
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
