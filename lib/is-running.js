const exec = require('child_process').exec;

const isRunning = (query, callback) => {
  let platform = process.platform;
  let cmd = '';
  switch (platform) {
    case 'win32':
      cmd = 'tasklist';
      break;
    case 'darwin':
      cmd = `ps -ax | grep ${query}`;
      break;
    case 'linux':
      cmd = 'ps -A';
      break;
    default:
      break;
  }
  exec(cmd, (err, stdout, stderr) => {
    callback(query.some(p => stdout.toLowerCase().indexOf(p) > -1));
  });
}

module.exports = isRunning;
