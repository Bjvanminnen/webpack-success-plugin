# webpack-success-plugin

Simple webpack plugin allowing you to run a command each time webpack completes successfully.

For example, if you want to run webpack --watch and run unit tests each time it builds, in your webpack.config.js file:

```
var SuccessPlugin = require('webpack-success-plugin');

var config = module.exports = {
  ...
  plugins: [
    new SuccessPlugin('npm run test')
  ]
};
