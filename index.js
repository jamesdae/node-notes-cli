const obj = require('./data.json');
const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  if (process.argv[2] === 'read') {
    var numbers =Object.keys(obj.notes);
    for (let i=0; i<numbers.length;i++){
    console.log(numbers[i]+ ': '+obj.notes[i+1]);
  }
  }
})
