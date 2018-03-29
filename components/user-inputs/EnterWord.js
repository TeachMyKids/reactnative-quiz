import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import MyButton from './Button';
import Dimensions from 'Dimensions';
let width = Dimensions.get('window').width;

function CharInput(props) {
  // console.log(props.isHighlight)
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={[ props.style, props.isHighlight ? props.charHighlightStyle: null ]}>
        <Text style={ props.textStyle }>{props.char}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

class EnterWord extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onAnswer = this.onAnswer.bind(this);

    this.state = {
      wordLength: this.props.wordLength,
      symbols: this.props.symbols.sort(function(a, b){return 0.5 - Math.random()}),
      currentCharIndex: 0,
      chars: new Array(this.props.wordLength)
    }
  }

  componentDidMount() {
    this.props.onRef(this);

    this.isComponentDidMounted = true;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.symbols !== this.state.symbols) {
      this.setState({
        symbols: nextProps.symbols.sort(function(a, b){return 0.5 - Math.random()})
      })
    }

    if (nextProps.wordLength !== this.state.wordLength) {
      this.setState({
        wordLength: nextProps.wordLength
      });
    }
  }

  componentWillUnmount() {
    this.isComponentDidMounted = false;
  }

  reset() {
    if (this.isComponentDidMounted) {
      this.setState({
        chars: new Array(this.state.wordLength),
        currentCharIndex: 0
      });
    }
  }

  buttonPress(char) {
    let newAnswer = [
      ...this.state.chars
    ];
    newAnswer[this.state.currentCharIndex] = char;

    let currentCharIndex = this.state.currentCharIndex;
    if (this.state.currentCharIndex < this.state.wordLength - 1) {
      currentCharIndex = currentCharIndex + 1;
    }

    this.setState({
      currentCharIndex,
      chars: newAnswer
    });

    this.props.onResultChange(newAnswer.join(''));
  }

  setCharIndex(index) {
    this.setState({
      currentCharIndex: index
    });
  }

  onAnswer() {
    this.props.onAnswer(this.state.chars.join(''));
  }

  render() {
    let inputs = [];
    for (let i = 0; i < this.state.wordLength; i++) {
      inputs.push(
        <CharInput key={i}
          onPress={() => {
            this.setCharIndex(i)
          }}
          char={this.state.chars[i]}
          style={ styles.charInputContainer }
          textStyle={ styles.charInput }
          isHighlight={i === this.state.currentCharIndex}
          charHighlightStyle={ styles.charHighlightStyle }
        />
      );
    }

    return (
      <View style={ styles.main }>
        <View style={ styles.wordInputContainer }>
          {inputs}
        </View>
        <View style={ styles.wordButtonContainer }>
          {this.state.symbols.map((char, index) => {
            return (
              <MyButton
                key={index}
                title={char}
                style={ styles.charButtonContainer }
                textStyle={ styles.charButton }
                onPress={() => {
                  this.buttonPress(char)
                }}
              />
            )
          })}
        </View>
        <View style={ styles.answerContainer }>
          <MyButton
            title='Trả Lời'
            style={ styles.answerButton }
            textStyle={ styles.answerButtonTextStyle }
            onPress={() => {
              this.onAnswer()
            }}
          />
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column'
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
    margin: 3,

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    height: 30,
    width: 30,
    marginBottom: 30
  },
  charInput: {
    fontWeight: 'bold',
    color: 'green',
    fontSize: 20
  },

  charHighlightStyle: {
    borderColor: 'blue',
    borderWidth: 2
  },

  charButton: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 25
  },

  answerButtonTextStyle: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 23
  },

  answerButton: {
    alignSelf: 'center',
    margin: 5,

    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 45,
    width: 150
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
