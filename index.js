var webpack = require('webpack');
var spawn = require('child_process').spawn;

/** 
 * @param {string} command This gets executed every time webpack completes
 *   successfully
 */
function SuccessPlugin(command) {
  this.command = command;
}

SuccessPlugin.prototype.apply = function (compiler) {
  var command = this.command;
  compiler.plugin('done', function () {
    spawn('/bin/sh', ['-c', command], { customFds: [0,1,2] });
  });
};

module.exports = SuccessPlugin;
