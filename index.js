require('dotenv').config();
const isRunning = require('./lib/is-running');
const macFilter = require('./lib/mac-filter');
let processList = process.env.PROCESS_LIST.split(',').map(p => p.trim().toLowerCase());
let status = false;

setInterval(() => {
  console.log('Interval started!');
  isRunning(processList, async (running) => {
    if (running) {
      console.log('Detected a running process!')
      if (!status) {
        console.log('Mac filter is set to ON!')
        await macFilter(true);
        status = true;
      }
    } else {
      console.log('The process is not running');
      if (status) {
        console.log('Mac filter is set to OFF!')
        await macFilter(false);
        status = false;
      }
    }
  });
}, process.env.INTERVAL);
