import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, Button } from 'react-native';
import Dimensions from 'Dimensions';
import Toast from 'react-native-root-toast';

import * as ask from '../quiz-ask/index';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

import InputSelector from '../user-inputs/input-selector';

class QuizContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      index: 0,
      rights: 0,
      wrongs: 0,
      visible: false,
      data: this.props.data.sort(function(a, b){return 0.5 - Math.random()}),
      inputState: {
        fillInBlank: {
          fieldIndex: 0
        }
      }
    };

    this.onAnswer = this.onAnswer.bind(this);
    this.reset = this.reset.bind(this);
    this.onResultChange = this.onResultChange.bind(this);
    this.onAskChange = this.onAskChange.bind(this);
  }

  next() {
    if (this.state.index === this.props.data.length - 1) {
      this.setState({
        data: this.props.data.sort(function(a, b){return 0.5 - Math.random()}),
        index: 0,
        promotedValue: ''
      });
    } else {
      this.setState({
        index: this.state.index + 1,
        promotedValue: ''
      });
    }

    if (this.input && typeof this.input.reset == 'function') {
      this.input.reset();
    }

  }

  reset() {
    this.setState({
      rights: 0,
      wrongs: 0
    });

    this.next();
  }

  isArrayEquals(a, b) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }

    return true;
  }

  onAnswer(val) {
    if ((Array.isArray(val) && this.isArrayEquals(val, this.state.data[this.state.index].value)) || val == this.state.data[this.state.index].value) {
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

  onResultChange(val) {
    this.setState({
      promotedValue: val
    });

    if (this.toast) {
      Toast.hide(this.toast);
    }
  }

  changeFieldIndex() {}

  onAskChange(record, event) {
    if (record.ask.type === ask.FillInBlank) {
      if (event.method === 'UPDATE_INDEX') {
        this.setState({
          inputState: {
            ...this.state.inputState,
            fillInBlank: {
              ...this.state.inputState.fillInBlank,
              fieldIndex: event.data
            }
          }
        })
      }
    }
  }

  render() {
    const record = this.state.data[this.state.index];
    const Ask = record.ask.type;

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

        <Ask content={record.ask.content} promotedValue={this.state.promotedValue} onChange={(event) => {
          this.onAskChange(record, event)
        }}/>

        <View style={ styles.statsContainer }>
          <View style={ styles.statsRights }>
            <Text style={{color: 'green', fontSize: 20}}>ĐÚNG: {this.state.rights}</Text>
          </View>

          <View style={ styles.statsWrongs }>
            <Text style={{color: 'red', fontSize: 20}}>SAI: {this.state.wrongs}</Text>
          </View>
        </View>

        <View style= { styles.userInput }>
          <InputSelector
            record={record}
            onAnswer={this.onAnswer}
            onResultChange={this.onResultChange}
            onRef={ref => (this.input = ref)}
            inputState={this.state.inputState}
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
    alignItems: 'center',
    alignContent: 'flex-end'
  },
  statsContainer : {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'orange',
    height: 40
  },
  statsRights: {
    width: width / 2,
    alignItems: 'center'
  },
  statsWrongs: {
    width: width / 2,
    alignItems: 'center'
  },
  userInput: {
    paddingTop: 20,
    width: width,
    backgroundColor: '#ddd',
    height: 270
  },
  btnActions: {
    width: width - 10,
    marginRight: 30,
    alignItems: 'flex-end',
    marginBottom: 20,
    marginTop: 20
  }
});

QuizContainer.propTypes = {
  data: PropTypes.array.isRequired
};

export default QuizContainer;
