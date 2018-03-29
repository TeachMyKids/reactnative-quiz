import React from 'react';
import * as inputs from './index';

function selector(props) {
  switch (props.record.input.type) {
    case inputs.SelectOne:
      return (
        <inputs.SelectOne
          onAnswer={props.onAnswer}
          answers={props.record.answers}
          onRef={props.onRef}
          onResultChange={props.onResultChange}
        />
      );
      break;
    case inputs.NumberButtons:
      return (
        <inputs.NumberButtons
          onAnswer={props.onAnswer}
          onRef={props.onRef}
          onResultChange={props.onResultChange}
        />
      );
      break;
    case inputs.EnterWord:
      return (
        <inputs.EnterWord
          onAnswer={props.onAnswer}
          onRef={props.onRef}
          onResultChange={props.onResultChange}
          wordLength={props.record.value.length}
          symbols={props.record.input.symbols}
        />
      );
      break;
  }
}

export default selector;
