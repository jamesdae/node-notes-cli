
const fs = require('fs');

function create(obj) {
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
    }

    module.exports=create
