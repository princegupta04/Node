const express = require('express');
let os = require('os');

const fs = require('fs');

// Read file asynchronously
fs.readFile('./myfile.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file: ' + err);
    return;
  }
  console.log('File content: ' + data);
});

console.log('Reading file... (this runs first!)');
console.log(os.platform());

const app  =  express();
app.get('/',(req, res)=>{
    res.send("hello world..m,c");
});
app.listen(8080);