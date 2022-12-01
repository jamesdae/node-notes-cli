const obj = require('./data.json');
const fs = require('fs');
const read = require('./read.js')
const create= require('./create.js')
const update= require('./update.js')
const delt= require('./delete.js')
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  switch (process.argv[2]) {
    case 'read':
      read(obj);
      break;
    case 'create':
      create(obj);
      break;
    case 'update':
      update(obj);
      break;
    case 'delete':
      delt(obj);
      break;
    default:
      break;
    }
  });
