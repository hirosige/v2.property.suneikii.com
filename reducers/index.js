import { createReducer } from 'redux-act';
import { increment, decrement } from '../actions';

const initialState = {
  counter: 0,
};

export default createReducer({
  [increment]: state => ({ counter: state.counter + 1 }),
  [decrement]: state => ({ counter: state.counter - 1 }),
}, initialState);
