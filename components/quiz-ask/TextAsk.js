import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import Dimensions from 'Dimensions';
let width = Dimensions.get('window').width;

class TextAsk extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  render() {
    return (
      <View style= { styles.screen }>
        <View style={ styles.questionContainer }>
          <Text style={ styles.question }>{this.props.content}</Text>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    height: 300,
    width: width - 10
  },
  questionContainer: {
    // margin: 30
  },
  question: {
    fontSize: 50
  }
});

TextAsk.propTypes = {
  // content: PropTypes.string.isRequired
};

export default TextAsk;
