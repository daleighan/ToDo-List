const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router/router.js');

const app = express();

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
 
const compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/compiled'));
app.use(bodyParser.json()).use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);
 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.listen(3000, () => console.log('listening on port 3000'));