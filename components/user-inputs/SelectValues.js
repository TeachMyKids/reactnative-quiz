import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Dimensions from 'Dimensions';

import MyButton from './Button';

let width = Dimensions.get('window').width;

class SelectValues extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      inputLength: this.props.inputLength,
      currentFieldIndex: 0,
      answers: this.props.answers.sort(function(a, b){return 0.5 - Math.random()}),
      answer: new Array(this.props.inputLength),
      inputState: this.props.inputState
    };

    this.onButtonPress = this.onButtonPress.bind(this);
    this.onAnswer = this.onAnswer.bind(this);
  }

  _arrayEquals(a, b) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }

    return true;
  }

  componentDidMount() {
    this.props.onRef(this);

    this.isComponentDidMounted = true;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.answers !== this.state.answers) {
      this.setState({
        answers: nextProps.answers.sort(function(a, b){return 0.5 - Math.random()})
      })
    }

    if (nextProps.inputLength !== this.state.inputLength) {
      this.setState({
        inputLength: nextProps.inputLength
      });
    }

    if (nextProps.inputState !== this.state.inputState) {
      this.setState({
        inputState: nextProps.inputState,
        currentFieldIndex: nextProps.inputState.fillInBlank.fieldIndex
      });
    }
  }

  componentWillUnmount() {
    this.isComponentDidMounted = false;
  }

  reset() {
    if (this.isComponentDidMounted) {
      this.setState({
        answer: new Array(this.state.inputLength),
        currentFieldIndex: 0
      });
    }
  }

  onButtonPress(answer) {
    let newAnswer = [
      ...this.state.answer
    ];
    newAnswer[this.state.currentFieldIndex] = answer;

    this.setState({
      answer: newAnswer
    });

    this.props.onResultChange(newAnswer);
  }

  onAnswer() {
    this.props.onAnswer(this._arrayEquals(this.state.answer, this.props.expectedAnswer), this.state.answer);
  }

  render() {
    let buttonWidth = (width / this.props.answers.length) - 10; // subtract the padding by 10

    return (
      <View style={ styles.main }>
        <View style={ styles.row }>
          {this.state.answers.map((answer, index) => {
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
  answers: PropTypes.array.isRequired
};

export default SelectValues;
