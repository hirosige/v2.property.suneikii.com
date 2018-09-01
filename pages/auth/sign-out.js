import React from 'react';
import { unsetToken } from '../../utils/auth';
import { logout } from '../../utils/lock';

export default class SignOut extends React.Component {
  componentDidMount() {
    unsetToken();
    logout();
  }

  render() {
    return null;
  }
}
