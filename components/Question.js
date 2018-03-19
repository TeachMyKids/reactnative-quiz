import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import Dimensions from 'Dimensions';
let width = Dimensions.get('window').width;

class Question extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      q: this.props.q,
      statement: ''
    };
  }

  componentDidMount() {
    this.updateStatement(this.props.q);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.q !== this.state.q) {
      this.updateStatement(nextProps.q);
    }
  }

  updateStatement(q) {
    this.setState({
      statement: `${q[0]} ${q[1]} ${q[2]}`
    });
  }

  render() {
    return (
      <View style={ styles.questionContainer }>
        <Text style={ styles.question }>{this.state.statement} = </Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  questionContainer: {
    margin: 30
  },
  question: {
    fontSize: 50,
    width: 200
  }
});

Question.propTypes = {
  q: PropTypes.array.isRequired
};

export default Question;
