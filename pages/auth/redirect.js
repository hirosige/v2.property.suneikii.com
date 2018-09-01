import React from 'react';
import Router from 'next/router';
import { setToken, checkSecret, extractInfoFromHash } from '../../utils/auth';

export default class Redirect extends React.Component {
  componentDidMount() {
    const { token, secret } = extractInfoFromHash();
    console.log(token);
    console.log(secret);

    if (!checkSecret(secret) || !token) {
      console.error('Something happened with the Sign In request');
    }
    setToken(token);
    Router.push('/');
  }

  render() {
    return null;
  }
}
