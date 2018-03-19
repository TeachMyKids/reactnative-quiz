import React from 'react';
import { Question, Answer, Keyboard } from './index';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, Button } from 'react-native';
import Dimensions from 'Dimensions';
import Toast from 'react-native-root-toast';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

class MathContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      index: 0,
      rights: 0,
      wrongs: 0,
      visible: false
    };

    this.onAnswer = this.onAnswer.bind(this);
    this.onResultChange = this.onResultChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    this.next();
  }

  next() {
    const index = Math.floor(Math.random() * this.props.data.length);

    this.keyboard.reset();

    this.setState({
      index,
      promoteValue: '',
      initialPromotedValue: ''
    });
  }

  reset() {
    this.setState({
      rights: 0,
      wrongs: 0
    });

    this.next();
  }

  onAnswer() {
    if (this.state.promoteValue === this.props.data[this.state.index][3]) {
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

      // toastr.error('SAI RỒI', 'BẠN CẦN HỌC BÀI VÀ LÀM BÀI CẨN THẬN HƠN');
    }

    this.next();
  }

  onResultChange(val) {
    this.setState({
      promoteValue: val
    });

    if (this.toast) {
      Toast.hide(this.toast);
    }
  }

  render() {
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
          <Question q={this.props.data[this.state.index]} />
          <Answer promotedValue={this.state.promoteValue} />
        </View>
        <View style={ styles.statsContainer }>
          <View style={ styles.statsRights }>
            <Text style={{color: 'green', fontSize: 30}}>ĐÚNG: {this.state.rights}</Text>
          </View>

          <View style={ styles.statsWrongs }>
            <Text style={{color: 'red', fontSize: 30}}>SAI: {this.state.wrongs}</Text>
          </View>
        </View>
        <View style= { styles.keyboard }>
          <Keyboard
            onRef={ref => (this.keyboard = ref)}
            value={this.state.initialPromotedValue}
            onAnswer={this.onAnswer}
            onResultChange={this.onResultChange}
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
  keyboard: {
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

MathContainer.propTypes = {
  data: PropTypes.array.isRequired
};

export default MathContainer;
