require('dotenv').config();

const path = require('path');
const nodeExternals = require('webpack-node-externals');

const serverConfig = {
  entry: './server/index.tsx',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
  },
  mode: process.env.ENVIRONMENT || 'development',
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'] },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  target: 'node',
  externals: [nodeExternals()],
  node: {
    __dirname: false,
  },
};

module.exports = [serverConfig];
