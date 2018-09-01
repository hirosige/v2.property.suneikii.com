import uuid from 'uuid';
import { setSecret } from './auth';

const Auth0Lock = require('auth0-lock').default;
const config = require('../config.json');

const getLock = (options) => {
  const auth0Lock = new Auth0Lock(config.AUTH0_CLIENT_ID, config.AUTH0_CLIENT_DOMAIN, options);
  return auth0Lock;
};

const getBaseUrl = () => `${window.location.protocol}//${window.location.host}`;

const getOptions = (container) => {
  const secret = uuid.v4();
  setSecret(secret);
  return {
    container,
    closable: false,
    auth: {
      responseType: 'token id_token',
      redirectUrl: `${getBaseUrl()}/auth/redirect`,
      params: {
        scope: 'openid profile email',
        state: secret,
      },
    },
  };
};

export const show = container => getLock(getOptions(container)).show();
export const logout = () => getLock().logout({ returnTo: getBaseUrl() });
