import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Dimensions from 'Dimensions';
let width = Dimensions.get('window').width;

class FillInBlank extends React.Component {
  constructor(props, context) {
    super(props, context);

    let { words, answer } = this._extract(this.props.content);

    this.state = {
      content: this.props.content,
      words,
      answer,
      currentIndex: 0
    };

    this.onPress = this.onPress.bind(this);
  }

  _extract(string) {
    let parts = string.trim().split(' ');
    const pattern = /[_]+/;

    let words = [];
    let answer = [];

    let i = 0;
    parts.map(part => {
      if (pattern.test(part)) {
        words.push({
          word: part,
          isBlankField: true,
          index: i
        });

        answer.push(part);
      } else {
        words.push({
          word: part,
          isBlankField: false
        });
      }

      i = i + 1;
    });

    return {
      words,
      answer
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.content !== this.state.content) {
      this.updateStatement(nextProps.content);
    }
  }

  updateStatement(content) {
    let { words, answer } = this._extract(content);

    this.setState({
      content,
      words,
      answer
    });
  }

  onPress(word) {
    this.setState({
      currentIndex: word.index
    })
  }

  render() {
    return (
      <View style= { styles.screen }>
        <View style={ styles.questionContainer }>
          {
            this.state.words.map((word, index) => {
              if (word.isBlankField) {
                return (
                  <TouchableWithoutFeedback onPress={() => {
                    this.onPress(word)
                  }}>
                    <View style={[ styles.blankFieldContainer , word.index === this.state.currentIndex ? styles.selectedBlankFieldContainer : null ]}>
                      <Text key={index} style={ styles.textInBlank }>{word.word} </Text>
                    </View>
                  </TouchableWithoutFeedback>
                )
              } else {
                return (
                  <Text key={index} style={ styles.text }>{word.word} </Text>
                )
              }
            })
          }
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
    width: width - 10
  },
  questionContainer: {
    // margin: 30
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  selectedBlankFieldContainer: {
    backgroundColor: '#ddd',
  },

  blankFieldContainer: {

    padding: 4
  },

  textInBlank: {
    fontSize: 30,
    color: 'green'
  },
  text: {
    fontSize: 30
  }
});

FillInBlank.propTypes = {
  content: PropTypes.string.isRequired
};

export default FillInBlank;
