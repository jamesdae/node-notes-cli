const fs = require('fs');

function delt (obj){
delete obj.notes[process.argv[3]];
newObj = JSON.stringify(obj, null, 2);
fs.writeFile('data.json', newObj, 'utf8', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
}

module.exports=delt
