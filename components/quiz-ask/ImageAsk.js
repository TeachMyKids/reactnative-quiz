import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Image, View } from 'react-native';
import Dimensions from 'Dimensions';
let width = Dimensions.get('window').width;

class ImageAsk extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: this.props.content
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.content !== this.state.source) {
      this.updateStatement(nextProps.content);
    }
  }

  updateStatement(content) {
    this.setState({
      source: content
    });
  }

  render() {
    return (
      <View style= { styles.screen }>
        <View style={ styles.questionContainer }>
          <Image style={ styles.question } source={this.state.source} resizeMode="cover" />
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
