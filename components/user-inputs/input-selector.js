import React from 'react';
import * as inputs from './index';

import {observable, decorate, action} from "mobx";
import {observer, Observer} from "mobx-react";

function Selector(props) {
  switch (props.record.input.type) {
    case inputs.SelectOne:
      return (
        <inputs.SelectOne
          onAnswer={props.onAnswer}
          answers={props.record.input.answers}
          onRef={props.onRef}
          onResultChange={props.onResultChange}
          expectedAnswer={props.record.value}
        />
      );
      break;
    case inputs.SelectValues:
      return (
        <inputs.SelectValues
          onAnswer={props.onAnswer}
          answers={props.record.input.answers}
          onRef={props.onRef}
          onResultChange={props.onResultChange}
          inputState={props.inputState}
          expectedAnswer={props.record.value}
        />
      );
      break;
    case inputs.NumberButtons:
      return (
        <inputs.NumberButtons
          onAnswer={props.onAnswer}
          onRef={props.onRef}
          onResultChange={props.onResultChange}
          expectedAnswer={props.record.value}
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
          expectedAnswer={props.record.value}
        />
      );
      break;
  }
}

export default (props) => {
  return (
    <Observer>
      {() => {
        return <Selector {...props} />;
      } }
    </Observer>
  )
};
