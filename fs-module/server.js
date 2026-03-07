//read write append delete + directory operations
const fs = require('fs');

//create directory
//asynchronous
fs.mkdir('./fs/practicefs/newFolder', (err)=>{
    if (err) console.log("directory may already exist")
    else console.log("directory created successfully")
});

//synchronous
// fs.mkdirSync('./fs/practicefs/newFolder');
// console.log("directory created successfully");


//read file
//asynchronous
fs.readFile('./fs/practicefs/log.txt', 'utf8', (err, data)=>{
    if (err) throw err
    console.log(data)
});

//synchronous   
// const data = fs.readFileSync('./fs/practicefs/log.txt', 'utf8');
// console.log(data);


//write file
const data="this is log data"

//asynchronous
fs.writeFile('./fs/practicefs/log.txt', data, (err)=>{
    if (err) throw err
    console.log("file written successfully")
});

//synchronous
// fs.writeFileSync('./fs/practicefs/log.txt', data);
// console.log("file written successfully");


//append file
const newData="\n this is new log data"

//asynchronous
fs.appendFile('./fs/practicefs/log.txt', newData, (err)=>{
    if (err) throw err
    console.log("file appended successfully")
});

//synchronous
// fs.appendFileSync('./fs/practicefs/log.txt', newData);
// console.log("file appended successfully");


//rename file
//asynchronous
fs.rename('./fs/practicefs/log.txt','./fs/practicefs/newlog.txt',(err)=>{
    if(err) throw err
    console.log("file renamed successfully")
});

//synchronous
// fs.renameSync('./fs/practicefs/log.txt','./fs/practicefs/newlog.txt');
// console.log("file renamed successfully");


//delete file
//asynchronous
fs.unlink('./fs/practicefs/newlog.txt', (err)=>{
    if (err) throw err
    console.log("file deleted successfully")
});

//synchronous
// fs.unlinkSync('./fs/practicefs/newlog.txt');
// console.log("file deleted successfully");


//delete directory
//asynchronous
fs.rmdir('./fs/practicefs/newFolder',(err)=>{
    if(err) throw err
    console.log("directory deleted successfully")
});

//synchronous
// fs.rmdirSync('./fs/practicefs/newFolder');
// console.log("directory deleted successfully");