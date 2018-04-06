import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Dimensions from 'Dimensions';

import {observable, decorate, action, computed, reaction, autorun} from "mobx";
import {observer, Observer} from "mobx-react";

import MyButton from './Button';

let width = Dimensions.get('window').width;

class SelectValues extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onButtonPress = this.onButtonPress.bind(this);
    this.onAnswer = this.onAnswer.bind(this);

  }

  currentAnswers = [];
  answer = new Array(this.props.expectedAnswer.length);
  _answers = [];

  _arrayEquals(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) return false;

    if (a.length != b.length) return false;

    a.sort();
    b.sort();
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }

    return true;
  }

  @computed get currentFieldIndex() {
    return this.props.inputState.fillInBlank.fieldIndex;
  }

  @computed get newEmptyArray() {
    return new Array(this.props.expectedAnswer.length);
  }

  componentDidMount() {
    this.props.onRef(this);

    this.isComponentDidMounted = true;
  }

  componentWillUnmount() {
    this.isComponentDidMounted = false;
  }

  reset() {
    if (this.isComponentDidMounted) {
      this.answer = new Array(this.props.expectedAnswer.length);
    }
  }

  onButtonPress(answer) {
    if (this.answer.length == 0) {
      this.answer = this.newEmptyArray;
    }

    let newAnswer = [
      ...this.answer
    ];

    newAnswer[this.currentFieldIndex] = answer;

    this.answer = newAnswer;

    this.props.onResultChange(newAnswer);
  }

  @computed get expectedAnswer() {
    return this.props.expectedAnswer;
  }

  onAnswer() {
    this.props.onAnswer(this._arrayEquals(this.answer, [...this.props.expectedAnswer]), this.answer);
    this.answer = [];
    this._answers = [];
  }

  @computed get answers() {
    if (this._answers.length === 0) {
      this._answers = this.props.answers.sort(function(a, b){return 0.5 - Math.random()});
    }

    return this._answers;
  }

  render() {

    let buttonWidth = (width / this.answers.length) - 10; // subtract the padding by 10
    return (
      <View style={ styles.main }>
        <View style={ styles.row }>
          {this.answers.map((answer, index) => {
            return (
              <View style={[ styles.buttonContainer ]} key={index}>
                <MyButton
                  onPress={() => this.onButtonPress(answer.value)}
                  style={ styles.button }
                  textStyle={ styles.btnTextStyle }
                  title={answer.text}
                />
              </View>
            )
          })}
        </View>

        <View style={ styles.answerContainer }>
          <MyButton
            title='Trả Lời'
            style={ styles.answerButton }
            textStyle={ styles.answerButtonTextStyle }
            onPress={() => {
              this.onAnswer()
            }}
          />
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column'
  },
  row: {
    justifyContent: 'center',
    // width: width / 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  answerButtonTextStyle: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 23
  },

  answerButton: {
    alignSelf: 'center',
    margin: 5,

    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 45,
    width: 150
  },

  buttonContainer: {
    margin: 5
  },
  button: {
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    height: 45,
    padding: 10
  },
  btnTextStyle: {
    fontSize: 20,
    color: '#fff'
  }
});

SelectValues.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  // answers: PropTypes.array.isRequired,
  // expectedAnswer: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SelectValues;
