import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.counter}</h2>
        <button onClick={() => this.props.dispatch(increment())}> + </button>
        <button onClick={() => this.props.dispatch(decrement())}> - </button>
      </div>
    );
  }
}

function mapStateToProps({ counter }) {
  return { counter };
}

export default connect(mapStateToProps)(Counter);