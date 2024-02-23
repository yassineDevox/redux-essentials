import React from 'react';
import View from './view';
import { useSelector } from 'react-redux';
import { getCounterValueSelector } from '../slice';

export function CounterByOne() {
  const counterSelect = useSelector(getCounterValueSelector)

  return (
    <View {...{counterSelect}}/>
  );
}
