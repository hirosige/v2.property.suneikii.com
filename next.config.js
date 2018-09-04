require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');

if (process.env.NODE_ENV === 'production') {
  module.exports = {
    webpack: (config) => {
      config.plugins = config.plugins || [];

      config.plugins = [
        ...config.plugins,

        new Dotenv({
          path: path.join(__dirname, '.env'),
          systemvars: true,
        }),
      ];
      return config;
    },
  };
} else {
  // eslint-disable-next-line import/no-extraneous-dependencies
  const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');
  const withESLint = require('next-eslint');

  module.exports = withESLint({
    webpack: (config) => {
      config.plugins = config.plugins || [];

      config.plugins = [
        ...config.plugins,

        new FlowStatusWebpackPlugin({
          failOnError: true,
        }),
        new Dotenv({
          path: path.join(__dirname, '.env'),
          systemvars: true,
        }),
      ];
      return config;
    },
  });
}
