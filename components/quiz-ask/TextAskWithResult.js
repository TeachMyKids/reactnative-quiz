import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import Dimensions from 'Dimensions';
let width = Dimensions.get('window').width;

class TextAskWithResult extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View style= { styles.screen }>
        <View style={ styles.questionContainer }>
          <Text style={ styles.question }>{this.props.content}</Text>
        </View>

        <View style={ styles.answerContainer }>
          <Text style={ styles.answer }>{this.props.promotedValue}</Text>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    height: 300
  },
  questionContainer: {
    margin: 30
  },
  question: {
    fontSize: 50,
    width: 200
  },
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

TextAskWithResult.propTypes = {
  content: PropTypes.string.isRequired,
  promotedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

TextAskWithResult.defaultProps = {
  promotedValue: ''
};

export default TextAskWithResult;
