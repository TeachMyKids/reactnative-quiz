import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Dimensions from 'Dimensions';
let width = Dimensions.get('window').width;

function BtnNumber(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
        <View style={props.style}>
          <Text style={props.textStyle}>{props.title}</Text>
        </View>
    </TouchableOpacity>
  );
}

class NumberButtons extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      result: 0
    };

    this.back = this.back.bind(this);
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  onNumberEnter(val) {
    const newVal = (this.state.result * 10) + val;
    this.setState({
      result: newVal
    });

    this.props.onResultChange(newVal);
  }

  back() {
    const newVal = Math.floor(this.state.result / 10);

    this.setState({
      result: newVal
    });

    this.props.onResultChange(newVal);
  }

  reset() {
    this.setState({
      result: 0
    });
  }

  render() {
    return (
      <View style={ styles.main }>
        <View style={ styles.row }>
          <View style={ styles.buttonContainer }>
            <BtnNumber onPress={this.onNumberEnter.bind(this, 1)} style={ styles.button } textStyle={ styles.btnTextStyle } title="1"/>
          </View>
          <View style={ styles.buttonContainer }>
            <BtnNumber onPress={this.onNumberEnter.bind(this, 2)} style={ styles.button } textStyle={ styles.btnTextStyle } title="2" />
          </View>
          <View style={ styles.buttonContainer }>
            <BtnNumber onPress={this.onNumberEnter.bind(this, 3)} style={ styles.button } textStyle={ styles.btnTextStyle } title="3" />
          </View>
        </View>

        <View style={ styles.row }>
          <View style={ styles.buttonContainer }>
            <BtnNumber onPress={this.onNumberEnter.bind(this, 4)} style={ styles.button } textStyle={ styles.btnTextStyle } title="4" />
          </View>

          <View style={ styles.buttonContainer }>
            <BtnNumber onPress={this.onNumberEnter.bind(this, 5)} style={ styles.button } textStyle={ styles.btnTextStyle } title="5" />
          </View>

          <View style={ styles.buttonContainer }>
            <BtnNumber onPress={this.onNumberEnter.bind(this, 6)} style={ styles.button } textStyle={ styles.btnTextStyle } title="6" />
          </View>
        </View>

        <View style={ styles.row }>
          <View style={ styles.buttonContainer }>
            <BtnNumber onPress={this.onNumberEnter.bind(this, 7)} style={ styles.button } textStyle={ styles.btnTextStyle } title="7" />
          </View>

          <View style={ styles.buttonContainer }>
            <BtnNumber onPress={this.onNumberEnter.bind(this, 8)} style={ styles.button } textStyle={ styles.btnTextStyle } title="8" />
          </View>

          <View style={ styles.buttonContainer }>
            <BtnNumber onPress={this.onNumberEnter.bind(this, 9)} style={ styles.button } textStyle={ styles.btnTextStyle } title="9" />
          </View>
        </View>

        <View style={ styles.row }>
          <View style={ styles.buttonContainer }>
            <BtnNumber onPress={this.onNumberEnter.bind(this, 0)} style={ styles.button } textStyle={ styles.btnTextStyle } title="0" />
          </View>

          <View style={ styles.buttonContainer }>
            <BtnNumber onPress={this.props.onAnswer} style={[ styles.button, styles.green ]} textStyle={ styles.btnTextStyle } title="=" />
          </View>

          <View style={ styles.buttonContainer }>
            <BtnNumber onPress={this.back} style={[ styles.button, styles.red ]} textStyle={ styles.btnTextStyle } title="<=" />
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
  onRef: PropTypes.func.isRequired
};

export default NumberButtons;
