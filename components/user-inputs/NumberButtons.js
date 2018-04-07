import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Dimensions from 'Dimensions';
let width = Dimensions.get('window').width;

import {observable, decorate, action, computed, reaction, autorun} from "mobx";
import {observer, Observer} from "mobx-react";

import MyButton from './Button';

class NumberButtons extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.back = this.back.bind(this);
    this.onAnswer = this.onAnswer.bind(this);
    this.onNumberEnter = this.onNumberEnter.bind(this);
  }

  @observable result = 0;

  componentDidMount() {
    this.props.onRef(this);

    this.isComponentDidMounted = true;
  }

  onNumberEnter(val) {
    this.result = this.result * 10 + val;
    this.props.onResultChange(this.result);
  }

  back() {
    const newVal = Math.floor(this.result / 10);

    this.result = newVal;
    this.props.onResultChange(newVal);
  }

  reset() {
    this.result = 0;
  }

  onAnswer() {
    this.props.onAnswer(this.result === this.props.expectedAnswer, this.result);
  }

  render() {
    return (
      <View style={ styles.main }>
        <View style={ styles.row }>
          <View style={ styles.buttonContainer }>
            <MyButton onPress={() => {
              this.onNumberEnter(1)
            }} style={ styles.button } textStyle={ styles.btnTextStyle } title="1"/>
          </View>
          <View style={ styles.buttonContainer }>
            <MyButton onPress={() => {
              this.onNumberEnter(2)
            }} style={ styles.button } textStyle={ styles.btnTextStyle } title="2" />
          </View>
          <View style={ styles.buttonContainer }>
            <MyButton onPress={() => {
              this.onNumberEnter(3)
            }} style={ styles.button } textStyle={ styles.btnTextStyle } title="3" />
          </View>
        </View>

        <View style={ styles.row }>
          <View style={ styles.buttonContainer }>
            <MyButton onPress={() => {
              this.onNumberEnter(4)
            }} style={ styles.button } textStyle={ styles.btnTextStyle } title="4" />
          </View>

          <View style={ styles.buttonContainer }>
            <MyButton onPress={() => {
              this.onNumberEnter(5)
            }} style={ styles.button } textStyle={ styles.btnTextStyle } title="5" />
          </View>

          <View style={ styles.buttonContainer }>
            <MyButton onPress={() => {
              this.onNumberEnter(6)
            }} style={ styles.button } textStyle={ styles.btnTextStyle } title="6" />
          </View>
        </View>

        <View style={ styles.row }>
          <View style={ styles.buttonContainer }>
            <MyButton onPress={() => {
              this.onNumberEnter(7)
            }} style={ styles.button } textStyle={ styles.btnTextStyle } title="7" />
          </View>

          <View style={ styles.buttonContainer }>
            <MyButton onPress={() => {
              this.onNumberEnter(8)
            }} style={ styles.button } textStyle={ styles.btnTextStyle } title="8" />
          </View>

          <View style={ styles.buttonContainer }>
            <MyButton onPress={() => {
              this.onNumberEnter(9)
            }} style={ styles.button } textStyle={ styles.btnTextStyle } title="9" />
          </View>
        </View>

        <View style={ styles.row }>
          <View style={ styles.buttonContainer }>
            <MyButton onPress={() => {
              this.onNumberEnter(0)
            }} style={ styles.button } textStyle={ styles.btnTextStyle } title="0" />
          </View>

          <View style={ styles.buttonContainer }>
            <MyButton onPress={() => this.onAnswer()} style={[ styles.button, styles.green ]} textStyle={ styles.btnTextStyle } title="=" />
          </View>

          <View style={ styles.buttonContainer }>
            <MyButton onPress={this.back} style={[ styles.button, styles.red ]} textStyle={ styles.btnTextStyle } title="<=" />
          </View>
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
    margin: 5,
    width: (width / 3 - 10) / 6 * 5
  },
  button: {
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    height: 45
  },
  green: {
    backgroundColor: 'green'
  },
  btnTextStyle: {
    fontSize: 20,
    color: '#fff'
  },
  red: {
    backgroundColor: 'red'
  }
});

NumberButtons.propTypes = {
  onResultChange: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
  onRef: PropTypes.func.isRequired,
  expectedAnswer: PropTypes.number.isRequired
};

export default NumberButtons;
