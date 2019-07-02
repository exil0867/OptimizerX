const isRunning = require('./lib/is-running');

isRunning('', (status) => {
  console.log(status);
});
