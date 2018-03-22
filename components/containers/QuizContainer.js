import React from 'react';
import { Question } from '../index';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, Button } from 'react-native';
import Dimensions from 'Dimensions';
import Toast from 'react-native-root-toast';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

class QuizContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      index: 0,
      rights: 0,
      wrongs: 0,
      visible: false
    };

    this.onAnswer = this.onAnswer.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    this.next();
  }

  next() {
    const index = Math.floor(Math.random() * this.props.data.length);

    this.setState({
      index,
      promoteValue: ''
    });
  }

  reset() {
    this.setState({
      rights: 0,
      wrongs: 0
    });

    this.next();
  }

  onAnswer(val) {
    if (val === this.props.data[this.state.index].value) {
      this.setState({
        rights: this.state.rights + 1
      });

      this.toast = Toast.show('BẠN ĐÃ TRẢ LỜI ĐÚNG', {
        position: Toast.positions.TOP,
        backgroundColor: 'green',
        textColor: '#fff'
      });
    } else {
      this.setState({
        wrongs: this.state.wrongs + 1
      });

      this.toast = Toast.show('BẠN CẦN HỌC BÀI VÀ LÀM BÀI CẨN THẬN HƠN', {
        position: Toast.positions.TOP,
        backgroundColor: 'red',
        textColor: '#fff'
      });
    }

    this.next();
  }

  render() {
    const record = this.props.data[this.state.index];
    const Input = record.input;

    return (
      <View style={ styles.homeContainer }>
        <Toast
            visible={this.state.visible}
            position={50}
            backgroundColor={'green'}
            textColor={'#fff'}
            shadow={false}
            animation={false}
            hideOnPress={true}>This is a message</Toast>

        <View style= { styles.screen }>
          <Question content={record.content} />
        </View>

        <View style={ styles.statsContainer }>
          <View style={ styles.statsRights }>
            <Text style={{color: 'green', fontSize: 30}}>ĐÚNG: {this.state.rights}</Text>
          </View>

          <View style={ styles.statsWrongs }>
            <Text style={{color: 'red', fontSize: 30}}>SAI: {this.state.wrongs}</Text>
          </View>
        </View>

        <View style= { styles.userInput }>
          <Input
            onAnswer={this.onAnswer}
            answers={ record.answers }
          />
        </View>

        <View style= { styles.btnActions }>
          <Button onPress={this.reset} title="Làm lại" />
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#e6e7e9',
    alignItems: 'center'
  },
  statsContainer : {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'orange',
    height: 60
  },
  statsRights: {
    width: width / 2,
    alignItems: 'center'
  },
  statsWrongs: {
    width: width / 2,
    alignItems: 'center'
  },
  screen: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    height: 300
  },
  userInput: {
    paddingTop: 20,
    width: width,
    backgroundColor: '#ddd',
    height: 270
  },
  btnActions: {
    width: width / 3,
    marginBottom: 20,
    marginTop: 20
  }
});

QuizContainer.propTypes = {
  data: PropTypes.array.isRequired
};

export default QuizContainer;
