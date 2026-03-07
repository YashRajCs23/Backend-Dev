const fs = require('fs');

fs.writeFile('newfile.txt', 'File created successfully!', function(err) {
  if (err) throw err;
  console.log('File created!');
});