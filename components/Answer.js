import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import Dimensions from 'Dimensions';
let width = Dimensions.get('window').width;

class Answer extends React.Component {
  render() {
    return (
      <View style={ styles.answerContainer }>
        <Text style={ styles.answer }>{this.props.promotedValue}</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  answerContainer: {
    margin: 0,
    marginBottom: 30,
    marginTop: 30
  },
  answer: {
    fontSize: 50,
    width: width - 260,
    color: 'green'
  }
});

Answer.propTypes = {
  promotedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

Answer.defaultProps = {
  promotedValue: ''
};

export default Answer;
