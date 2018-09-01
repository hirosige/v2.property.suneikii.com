require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');

const withESLint = require('next-eslint');
const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');

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
