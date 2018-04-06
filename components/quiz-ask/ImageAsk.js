import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Image, View } from 'react-native';
import Dimensions from 'Dimensions';
let width = Dimensions.get('window').width;

import {observable, decorate, action, computed} from "mobx";
import {observer, Observer} from "mobx-react";

class ImageAsk extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View style= { styles.screen }>
        <View style={ styles.questionContainer }>
          <Observer>
            {() => <Image style={ styles.question } source={this.props.content} resizeMode="cover" />}
          </Observer>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    height: 300
  },
  questionContainer: {
    flex: 1,
    width: width
  },
  question: {
    flex:1, width: null, height: null
  }
});

ImageAsk.propTypes = {
  // content: PropTypes.string.isRequired
};

export default ImageAsk;
