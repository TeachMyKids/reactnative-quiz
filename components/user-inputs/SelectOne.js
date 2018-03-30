import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Dimensions from 'Dimensions';
let width = Dimensions.get('window').width;

function BtnInput(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
        <View style={props.style}>
          <Text style={props.textStyle}>{props.title}</Text>
        </View>
    </TouchableOpacity>
  );
}

class SelectOne extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {

    };

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress(answer) {
    this.props.onAnswer(answer === this.props.expectedAnswer, answer);
  }

  render() {
    let buttonWidth = (width / this.props.answers.length) - 10; // subtract the padding by 10

    return (
      <View style={ styles.main }>
        <View style={ styles.row }>
          {this.props.answers.map((answer, index) => {
            return (
              <View style={[ styles.buttonContainer, { width: buttonWidth } ]} key={index}>
                <BtnInput onPress={() => this.onButtonPress(answer.value)} style={ styles.button } textStyle={ styles.btnTextStyle } title={answer.text}/>
              </View>
            )
          })}
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    // width: width / 2
  },
  row: {
    justifyContent: 'center',
    // width: width / 2,
    flexDirection: 'row',
    height: 60
  },
  answer: {
    // backgroundColor: '#ff00ff',
  },
  back: {
    // backgroundColor: '#ff0000',
  },
  buttonContainer: {
    margin: 5
  },
  button: {
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    height: 45
  },
  btnTextStyle: {
    fontSize: 20,
    color: '#fff'
  }
});

SelectOne.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  answers: PropTypes.array.isRequired,
  expectedAnswer: PropTypes.any.isRequired
};

export default SelectOne;
