const obj = require('./data.json');
const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  switch (process.argv[2]) {
    case 'read':
      let numbers = Object.keys(obj.notes);
      let values = Object.values(obj.notes);
      for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i] + ': ' + values[i]);
      }
      break;
    case 'create':
      let note = process.argv[3];
      obj.notes[obj.nextId] = note;
      obj.nextId++;
      let newObj = JSON.stringify(obj, null, 2);
      fs.writeFile('data.json', newObj, 'utf8', err => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      })
      break;
    case 'update':
      note = process.argv[4];
      obj.notes[process.argv[3]] = note;
      newObj = JSON.stringify(obj, null, 2);
      fs.writeFile('data.json', newObj, 'utf8', err => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      });
      break;
    case 'delete':
      delete obj.notes[process.argv[3]];
      newObj = JSON.stringify(obj, null, 2);
      fs.writeFile('data.json', newObj, 'utf8', err => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      });
      break;
    default:
      break;
    }
  });
