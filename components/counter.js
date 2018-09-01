import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment, decrement } from '../actions';

const Counter = (props) => {
  const { counter, dispatch } = props;

  return (
    <div>
      <h2>{ counter }</h2>
      <button type="button" onClick={() => dispatch(increment())}> + </button>
      <button type="button" onClick={() => dispatch(decrement())}> - </button>
    </div>
  );
};

Counter.propTypes = {
  counter: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
};

Counter.defaultProps = {
  counter: 0,
};

function mapStateToProps({ counter }) {
  return { counter };
}

export default connect(mapStateToProps)(Counter);
