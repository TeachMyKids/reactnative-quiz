import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import Dimensions from 'Dimensions';

import {observable, decorate, action, computed} from "mobx";
import {observer, Observer} from "mobx-react";

let width = Dimensions.get('window').width;

function getType() {
  return ImageWithFillIn;
}

@observer
class ImageWithFillIn extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onPress = this.onPress.bind(this);
  }

  content = null;

  i = 0;

  @computed get currentQuestion() {
    if (this.content === this.props.content) {
      return this.question;
    }

    this.content = this.props.content;
    let string = this.props.content;

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

        i = i + 1;
      } else {
        words.push({
          word: part,
          isBlankField: false
        });
      }
    });

    this.question = {
      words,
      answer
    };

    return this.question;
  }

  onPress(word) {
    this.props.onChange(getType(), {
      method: 'UPDATE_INDEX',
      data: word.index
    });
  }

  render() {
    return (
      <View style= { styles.screen }>
        <View style={[ styles.imageContainer ]}>
          <Image style={ styles.image } source={this.props.image} resizeMode="cover" />
        </View>
        <View style={ [styles.questionContainer, styles.question] }>
          {
            this.currentQuestion.words.map((word, index) => {
              if (word.isBlankField) {
                return (
                  <TouchableWithoutFeedback key={index} onPress={() => {
                    this.onPress(word)
                  }}>
                    <View style={[ styles.blankFieldContainer , word.index === this.props.inputState.fillInBlank.fieldIndex ? styles.selectedBlankFieldContainer : null ]}>
                      <Text style={ styles.textInBlank }>{(this.props.promotedValue && this.props.promotedValue[word.index]) ? this.props.promotedValue[word.index] : word.word} </Text>
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
    backgroundColor: '#fff',
    flexDirection: 'column',
    // alignItems: 'center',
  },
  questionContainer: {
    // margin: 30
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  imageContainer: {
    flex: 1,
    width: width
  },
  image: {
    flex:1, width: null, height: null
  },
  question: {
    marginTop: 20,
    marginBottom: 20
    // height: 150
  },
  selectedBlankFieldContainer: {
    backgroundColor: '#ddd',
  },

  blankFieldContainer: {
    paddingLeft: 2,
    paddingRight: 2
  },

  textInBlank: {
    fontSize: 20,
    color: 'green'
  },
  text: {
    fontSize: 20
  }
});

ImageWithFillIn.propTypes = {
  content: PropTypes.string.isRequired
};

decorate(ImageWithFillIn, {
  currentIndex: observable,
  autoUpdate: observable,
  promotedValue: observable
});

export default ImageWithFillIn;
