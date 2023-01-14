import { Reducer, useReducer } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toggleReducer = (state: boolean, nextValue?: any) =>
  typeof nextValue === 'boolean' ? nextValue : !state;

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-explicit-any
const useToggle = (
  initialValue: boolean
): [boolean, (nextValue?: any) => void] => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return useReducer<Reducer<boolean, any>>(toggleReducer, initialValue);
};

export default useToggle;
