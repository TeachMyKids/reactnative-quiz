import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Dimensions from 'Dimensions';

import {observable, decorate, action, computed} from "mobx";
import {observer, Observer} from "mobx-react";

let width = Dimensions.get('window').width;

function getType() {
  return FillInBlank;
}

@observer
class FillInBlank extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onPress = this.onPress.bind(this);
  }

  content = null;

  i = 0;

  @computed get currentQuestion() {
    if (this.content === this.props.content) {
      return this.question;
    }

    this.content = this.props.content;
    let string = this.props.content;

    let parts = string.trim().split(' ');
    const pattern = /[_]+/;

    let words = [];
    let answer = [];

    let i = 0;
    parts.map(part => {
      if (pattern.test(part)) {
        words.push({
          word: part,
          isBlankField: true,
          index: i
        });

        answer.push(part);

        i = i + 1;
      } else {
        words.push({
          word: part,
          isBlankField: false
        });
      }
    });

    this.question = {
      words,
      answer
    };

    return this.question;
  }

  onPress(word) {
    this.props.onChange(getType(), {
      method: 'UPDATE_INDEX',
      data: word.index
    });
  }

  render() {
    return (
      <View style= { styles.screen }>
        <View style={ styles.questionContainer }>
          {
            this.currentQuestion.words.map((word, index) => {
              if (word.isBlankField) {
                return (
                  <TouchableWithoutFeedback key={index} onPress={() => {
                    this.onPress(word)
                  }}>
                    <View style={[ styles.blankFieldContainer , word.index === this.props.inputState.fillInBlank.fieldIndex ? styles.selectedBlankFieldContainer : null ]}>
                      <Text style={ styles.textInBlank }>{(this.props.promotedValue && this.props.promotedValue[word.index]) ? this.props.promotedValue[word.index] : word.word} </Text>
                    </View>
                  </TouchableWithoutFeedback>
                )
              } else {
                return (
                  <Text key={index} style={ styles.text }>{word.word} </Text>
                )
              }
            })
          }
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 10
  },
  questionContainer: {
    // margin: 30
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  selectedBlankFieldContainer: {
    backgroundColor: '#ddd',
  },

  blankFieldContainer: {

    padding: 4
  },

  textInBlank: {
    fontSize: 30,
    color: 'green'
  },
  text: {
    fontSize: 30
  }
});

FillInBlank.propTypes = {
  content: PropTypes.string.isRequired
};

decorate(FillInBlank, {
  currentIndex: observable,
  autoUpdate: observable,
  promotedValue: observable
});

export default FillInBlank;
