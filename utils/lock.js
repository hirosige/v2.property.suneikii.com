import uuid from 'uuid';
import { setSecret } from './auth';

const Auth0Lock = require('auth0-lock').default;

const getLock = (options) => {
  const auth0Lock = new Auth0Lock(
    process.env.AUTH0_CLIENT_ID,
    process.env.AUTH0_CLIENT_DOMAIN,
    options,
  );

  return auth0Lock;
};

const getBaseUrl = () => `${window.location.protocol}//${window.location.host}`;

const getOptions = (container) => {
  const secret = uuid.v4();
  setSecret(secret);
  return {
    container,
    languageDictionary: {
      emailInputPlaceholder: 'something@youremail.com',
      title: 'SUNEIKII. LOGIN',
      primaryColor: '#31324F',
    },
    closable: false,
    auth: {
      responseType: 'token id_token',
      redirectUrl: `${getBaseUrl()}/auth/redirect`,
      params: {
        scope: 'openid profile email',
        state: secret,
      },
    },
    theme: {
      logo: 'https://s3-ap-southeast-1.amazonaws.com/suneikii.com/property.suneikii.png',
      primaryColor: '#2196F3',
      authButtons: {
        testConnection: {
          displayName: 'Test Conn',
          primaryColor: '#b7b7b7',
          foregroundColor: '#000000',
          icon: 'http://example.com/icon.png',
        },
        testConnection2: {
          primaryColor: '#000000',
          foregroundColor: '#ffffff',
        },
      },
    },
  };
};

export const show = container => getLock(getOptions(container)).show();
export const logout = () => getLock().logout({ returnTo: getBaseUrl() });
