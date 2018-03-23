import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import Dimensions from 'Dimensions';
let width = Dimensions.get('window').width;

class TextAsk extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      content: this.props.content
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.content !== this.state.content) {
      this.updateStatement(nextProps.content);
    }
  }

  updateStatement(content) {
    this.setState({
      content
    });
  }

  render() {
    return (
      <View style= { styles.screen }>
        <View style={ styles.questionContainer }>
          <Text style={ styles.question }>{this.state.content}</Text>
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
  }
});

TextAsk.propTypes = {
  content: PropTypes.string.isRequired
};

export default TextAsk;
