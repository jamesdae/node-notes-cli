
 function read (obj) {
 let numbers = Object.keys(obj.notes);
      let values = Object.values(obj.notes);
      for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i] + ': ' + values[i]);
      }
 }

 module.exports=read
