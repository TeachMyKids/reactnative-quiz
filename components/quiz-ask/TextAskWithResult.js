import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import Dimensions from 'Dimensions';
let width = Dimensions.get('window').width;

class TextAskWithResult extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      content: this.props.content,
      promotedValue: this.props.promotedValue
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.content !== this.state.content) {
      this.setState({
        content: nextProps.content
      });
    }

    if (nextProps.promotedValue !== this.state.promotedValue) {
      this.setState({
        promotedValue: nextProps.promotedValue
      });
    }
  }

  render() {
    return (
      <View style= { styles.screen }>
        <View style={ styles.questionContainer }>
          <Text style={ styles.question }>{this.state.content}</Text>
        </View>

        <View style={ styles.answerContainer }>
          <Text style={ styles.answer }>{this.state.promotedValue}</Text>
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
