import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, Button } from 'react-native';
import Dimensions from 'Dimensions';
import Toast from 'react-native-root-toast';

// mobx
import {observable, decorate, action, computed} from "mobx";
import {observer, Observer} from "mobx-react";

import * as ask from '../quiz-ask/index';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

import InputSelector from '../user-inputs/input-selector';

@observer
class QuizContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onAnswer = this.onAnswer.bind(this);
    this.reset = this.reset.bind(this);
    this.onResultChange = this.onResultChange.bind(this);
    this.updateInputState = this.updateInputState.bind(this);
  }

  data = this.props.data.sort(function(a, b){return 0.5 - Math.random()});

  rights = 0;
  wrongs = 0;
  index = 0;
  visible = false;
  promotedValue = '';
  inputState = {
    fillInBlank: {
      fieldIndex: 0
    }
  }

  resetInputState() {
    this.inputState = {
      fillInBlank: {
        fieldIndex: 0
      }
    };
  }

  updateInputState = (type, event) => {
    if (type === ask.FillInBlank) {
      if (event.method === 'UPDATE_INDEX') {
        this.inputState.fillInBlank.fieldIndex = event.data;
      }
    }
  }

  next() {
    if (this.index === this.props.data.length - 1) {
      this.index = 0;
      this.promotedValue = '';
      this.data = this.props.data.sort(function(a, b){return 0.5 - Math.random()});
    } else {
      this.index += 1;
      this.promotedValue = '';
    }

    this.resetInputState();

    if (this.input && typeof this.input.reset == 'function') {
      this.input.reset();
    }
  }

  reset() {
    this.rights = 0;
    this.wrongs = 0;

    this.next();
  }

  onAnswer(isCorrect, answer) {
    if (isCorrect) {
      this.rights = this.rights + 1;

      // this.toast = Toast.show('BẠN ĐÃ TRẢ LỜI ĐÚNG', {
      //   position: Toast.positions.TOP,
      //   backgroundColor: 'green',
      //   textColor: '#fff'
      // });
    } else {
      this.wrongs = this.wrongs + 1;

      // this.toast = Toast.show('BẠN CẦN HỌC BÀI VÀ LÀM BÀI CẨN THẬN HƠN', {
      //   position: Toast.positions.TOP,
      //   backgroundColor: 'red',
      //   textColor: '#fff'
      // });
    }

    this.next();
  }

  onResultChange(val) {
    this.promotedValue = val;

    // if (this.toast) {
    //   Toast.hide(this.toast);
    // }
  }

  @computed get currentQuestion() {
    return this.data[this.index];
  }

  @computed get currentExpectedValue() {
    return this.data[this.index].value;
  }

  changeFieldIndex() {}

  render() {
    const Ask = this.currentQuestion.ask.type;

    return (
      <View style={ styles.homeContainer }>
        <Toast
            visible={this.visible}
            position={50}
            backgroundColor={'green'}
            textColor={'#fff'}
            shadow={false}
            animation={false}
            hideOnPress={true}>This is a message</Toast>

        <Ask
          content={this.currentQuestion.ask.content}
          promotedValue={this.promotedValue}
          onChange={this.updateInputState}
          inputState={this.inputState}
        />

        <View style={ styles.statsContainer }>
          <View style={ styles.statsRights }>
            <Text style={{color: 'green', fontSize: 20}}>ĐÚNG: {this.rights}</Text>
          </View>

          <View style={ styles.statsWrongs }>
            <Text style={{color: 'red', fontSize: 20}}>SAI: {this.wrongs}</Text>
          </View>
        </View>

        <View style= { styles.userInput }>
          <InputSelector
            record={this.currentQuestion}
            onAnswer={this.onAnswer}
            onResultChange={this.onResultChange}
            onRef={ref => (this.input = ref)}
            inputState={this.inputState}
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

decorate(QuizContainer, {
  data: observable,
  rights: observable,
  wrongs: observable,
  index: observable,
  inputState: observable,
  promotedValue: observable,
  updateInputState: action
  // inputState: computed
  // setAge: action
})

export default QuizContainer;
