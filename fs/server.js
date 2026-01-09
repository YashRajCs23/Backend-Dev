//fs module

//imorting fs module
const fs = require('fs');

// const read=(err, data)=>{
//     if (err) throw err
//     console.log(data)
// }

// fs.readFile('./fs/log.txt', 'utf8', read);

console.log("first");

//read file asynchronously
// fs.readFile('./fs/log.txt', 'utf8', (err, data)=>{
//     if (err) throw err
//     console.log(data)
// });

//read file synchronously
// const data=fs.readFileSync('./fs/log.txt', 'utf8')
// console.log(data)

//write file asynchronously
const data="this is new data"

// fs.writeFile('./fs/output.txt', data, (err)=>{
//     if (err) throw err
//     console.log("file written successfully")
// });

//write file synchronously
// fs.writeFileSync('./fs/output.txt', data)
// console.log("file written successfully")

console.log("end");

//append file asynchronously
// const appendData="\nthis is appended data"
// fs.appendFile('./fs/log.txt', appendData, (err)=>{
//     if (err) throw err
//     console.log("file appended successfully")
// });

//append file synchronously
// fs.appendFileSync('./fs/output.txt', appendData)
// console.log("file appended successfully")

//delete file
fs.unlinkSync('./fs/output.txt')
console.log("file deleted successfully")