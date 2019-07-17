const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const paths = {
  hydration: {
    entry: {
      client: 'src/hydration/client/index.js',
      server: 'src/hydration/server/index.js'
    }
  },
  partial: {
    entry: {
      client: 'src/partial/client/index.js',
      server: 'src/partial/server/index.js'
    }
  },
  lazy: {
    entry: {
      client: 'src/partial/client/index.js',
      server: 'src/partial/server/index.js'
    }
  },
}

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

  const serverConfig = (env) => {  
    return {
      mode: 'development',
      target: 'node',
      node: {
        __dirname: false
      },
      externals: [nodeExternals()],
      entry: {
        'index.js': ["@babel/polyfill",path.resolve(__dirname, paths[env.render].entry.server)]
      },
      module: {
        rules: [js]
      },
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]'
      }
    }
  };

  const clientConfig = (env) => ({
    mode: 'development',
    target: 'web',
    entry: {
      'client.js': ["@babel/polyfill",path.resolve(__dirname,  paths[env.render].entry.client)]
    },
    module: {
      rules: [js]
    },
    plugins: [
      new CopyPlugin([
        { from: 'src/styles/index.css', to: path.resolve(__dirname, 'dist/public') },
      ]),
    ],
    output: {
      path: path.resolve(__dirname, 'dist/public'),
      filename: '[name]'
    }
  });

  module.exports = (env) => [serverConfig(env), clientConfig(env)];