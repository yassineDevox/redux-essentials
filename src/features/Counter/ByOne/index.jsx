import React from 'react';
import View from './view';
import { useSelector } from 'react-redux';
import { getCounterValueSelector } from '../slice';

export function CounterByOne() {
  const counterValueSelect = useSelector(getCounterValueSelector)

  return (
    <View {...{counterValueSelect}}/>
  );
}
