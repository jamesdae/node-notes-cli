const fs = require('fs');

function update(obj){
note = process.argv[4];
obj.notes[process.argv[3]] = note;
newObj = JSON.stringify(obj, null, 2);
fs.writeFile('data.json', newObj, 'utf8', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
}

module.exports=update
