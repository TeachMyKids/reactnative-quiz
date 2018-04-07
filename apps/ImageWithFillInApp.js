import React from 'react';
import { QuizContainer } from '../components/containers';
import { StyleSheet, Text, View } from 'react-native';
import { TextAsk, TextAskWithResult, ImageAsk, ImageWithFillIn } from '../components/quiz-ask';
import { SelectValues } from '../components/user-inputs';

import { Provider } from 'mobx-react';
import {observable, decorate, action, computed} from "mobx";

export default class ImageWithFillInApp extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  @observable data = [{
    ask: {
      type: ImageWithFillIn,
      image: require('../assets/images/5.jpg'),
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
      type: ImageWithFillIn,
      image: require('../assets/images/4.jpg'),
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
      type: ImageWithFillIn,
      image: require('../assets/images/3.jpg'),
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
      type: ImageWithFillIn,
      image: require('../assets/images/5.jpg'),
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
        {text: 'stay home', value: 'stay home'}
      ]
    }
  }];

  render() {
    return (
      <Provider appData={{data: this.data}}>
        <View style={styles.container}>
          <QuizContainer />
        </View>
      </Provider>
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
