const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const js = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/react', "@babel/preset-env"],
        plugins: ['transform-class-properties']
      }
    }
  }

  const serverConfig = {
    mode: 'development',
    target: 'node',
    node: {
      __dirname: false
    },
    externals: [nodeExternals()],
    entry: {
      'index.js': ["@babel/polyfill",path.resolve(__dirname, 'partial/server/index.js')]
    },
    module: {
      rules: [js]
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name]'
    }
  }

  const clientConfig = {
    mode: 'development',
    target: 'web',
    entry: {
      'client.js': ["@babel/polyfill",path.resolve(__dirname, 'partial/client/index.js')]
    },
    module: {
      rules: [js]
    },
    plugins: [
      new CopyPlugin([
        { from: 'styles/index.css', to: path.resolve(__dirname, 'dist/public') },
        { from: 'other', to: 'public' },
      ]),
    ],
    output: {
      path: path.resolve(__dirname, 'dist/public'),
      filename: '[name]'
    }
  }

  module.exports = [serverConfig, clientConfig];