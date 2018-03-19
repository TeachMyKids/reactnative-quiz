import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, Button } from 'react-native';
import Dimensions from 'Dimensions';
let width = Dimensions.get('window').width;

class Keyboard extends React.Component {
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
          <View style={ styles.button }>
            <Button onPress={this.onNumberEnter.bind(this, 1)} title="1"/>
          </View>
          <View style={ styles.button }>
            <Button onPress={this.onNumberEnter.bind(this, 2)} title="2" />
          </View>
          <View style={ styles.button }>
            <Button onPress={this.onNumberEnter.bind(this, 3)} title="3" />
          </View>
        </View>

        <View style={ styles.row }>
          <View style={ styles.button }>
            <Button onPress={this.onNumberEnter.bind(this, 4)} title="4" />
          </View>

          <View style={ styles.button }>
            <Button onPress={this.onNumberEnter.bind(this, 5)} title="5" />
          </View>

          <View style={ styles.button }>
            <Button onPress={this.onNumberEnter.bind(this, 6)} title="6" />
          </View>
        </View>

        <View style={ styles.row }>
          <View style={ styles.button }>
            <Button onPress={this.onNumberEnter.bind(this, 7)} title="7" />
          </View>

          <View style={ styles.button }>
            <Button onPress={this.onNumberEnter.bind(this, 8)} title="8" />
          </View>

          <View style={ styles.button }>
            <Button onPress={this.onNumberEnter.bind(this, 9)} title="9" />
          </View>
        </View>

        <View style={ styles.row }>
          <View style={ styles.button }>
            <Button onPress={this.onNumberEnter.bind(this, 0)} title="0" />
          </View>

          <View style={ styles.button }>
            <Button onPress={this.props.onAnswer} color='green' title="=" />
          </View>

          <View style={ styles.button }>
            <Button onPress={this.back} color='orange' title="<=" />
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
  button: {
    margin: 5,
    width: (width / 3 - 10) / 6 * 5
  }
});

Keyboard.propTypes = {
  onResultChange: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
  onRef: PropTypes.func.isRequired
};

export default Keyboard;
