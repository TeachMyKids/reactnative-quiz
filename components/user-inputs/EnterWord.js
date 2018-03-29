import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MyButton from './Button';
import Dimensions from 'Dimensions';
let width = Dimensions.get('window').width;

function CharInput(props) {
  return (
    <View style={ props.style }>
      <Text style={props.textStyle}>C</Text>
    </View>
  )
}

class EnterWord extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      result: 0
    };

    this.onAnswer = this.onAnswer.bind(this);
    this._renderInput = this._renderInput.bind(this);

    this.state = {
      wordLength: this.props.wordLength,
      symbols: this.props.symbols
    }
  }

  componentDidMount() {
    this.props.onRef(this);

    this.isComponentDidMounted = true;
  }

  componentWillUnmount() {
    this.isComponentDidMounted = false;
  }

  reset() {
    if (this.isComponentDidMounted) {
      this.setState({
        result: 0
      });
    }
  }

  _renderInput() {
    let inputs = [];
    for (let i = 0; i < this.state.wordLength; i++) {
      inputs.push(<CharInput key={i} style={ styles.charInputContainer } textStyle={ styles.charInput }/>);
    }

    return (
      <View style={ styles.wordInputContainer }>
        {inputs}
      </View>
    );
  }

  onAnswer() {
    this.props.onAnswer(this.state.result);
  }

  render() {
    return (
      <View style={ styles.main }>
        <this._renderInput />
        <View style={ styles.wordButtonContainer }>
          {this.state.symbols.map((char, index) => {
            return (
              <MyButton key={index} title={char} style={ styles.charButtonContainer } textStyle={ styles.charButton }/>
            )
          })}
        </View>
        {/* <View style={ styles.row }>
          <View style={ styles.buttonContainer }>
            <BtnNumber onPress={this.onNumberEnter.bind(this, 1)} style={ styles.button } textStyle={ styles.btnTextStyle } title="1"/>
          </View>
          <View style={ styles.buttonContainer }>
            <BtnNumber onPress={this.onNumberEnter.bind(this, 2)} style={ styles.button } textStyle={ styles.btnTextStyle } title="2" />
          </View>
          <View style={ styles.buttonContainer }>
            <BtnNumber onPress={this.onNumberEnter.bind(this, 3)} style={ styles.button } textStyle={ styles.btnTextStyle } title="3" />
          </View>
        </View> */}
      </View>
    );
  }
}

let styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'red'
    // width: width / 2
  },
  wordInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  wordButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  charInputContainer: {
    alignSelf: 'center',
    margin: 5,

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    height: 45,
    width: 45,
    marginBottom: 30
  },
  charInput: {
    fontWeight: 'bold',
    color: 'green',
    fontSize: 25
  },

  charButton: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 25
  },

  charButtonContainer: {
    alignSelf: 'center',
    margin: 5,

    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    height: 45,
    width: 45
  },

  row: {
    justifyContent: 'center',
    // width: width / 2,
    flexDirection: 'row',
    height: 60
  },
  answer: {
    // backgroundColor: '#ff00ff',
  },
  back: {
    // backgroundColor: '#ff0000',
  },
  buttonContainer: {
    margin: 5,
    width: (width / 3 - 10) / 6 * 5
  },
  button: {
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    height: 45
  },
  green: {
    backgroundColor: 'green'
  },
  btnTextStyle: {
    fontSize: 20,
    color: '#fff'
  },
  red: {
    backgroundColor: 'red'
  }
});

EnterWord.propTypes = {
  onResultChange: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
  onRef: PropTypes.func.isRequired,
  wordLength: PropTypes.number.isRequired,
  symbols: PropTypes.arrayOf(PropTypes.string)
};

export default EnterWord;
