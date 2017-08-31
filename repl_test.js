const repl = require('repl');

var replServer = repl.start();
replServer.defineCommand('sayhello', {
  help: 'Say hello',
  action: function(name) {
    this.write(`Hello, ${name}!\n`);
    this.displayPrompt();
  }
});