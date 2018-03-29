import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class MyButton extends Component {

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={this.props.style}>
          <Text style={this.props.textStyle}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

MyButton.propTypes = {
  onPress: PropTypes.func,
  // style: PropTypes.object,
  // textStyle: PropTypes.object,
  title: PropTypes.string.isRequired
}

export default MyButton;
