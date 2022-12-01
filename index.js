const obj = require('./data.json');
const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  if (process.argv[2] === 'read') {
    console.log(obj.notes[1]);
  }

})
