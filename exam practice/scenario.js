const fs=require('fs')
const path=require('path')
fs.mkdir('./folder',(err)=>{
    if(err)console.log("directory may already exist")
    else console.log("directory created successfully")
})
fs.readFile('./folder/file.txt','utf8',(err,data)=>{
    if(err) throw err
    console.log(data)
})
fs.writeFile('./folder/file.txt',"log data",(err)=>{
    if(err) throw err
    console.log("file created successfully")
})
fs.appendFile('./folder/file.txt',"\nnew log data",(err)=>{
    if(err) throw err
    console.log("file appended successfully")
})
fs.rename('./folder/file.txt','./folder/newfile.txt',(err)=>{
    if(err) throw err
    console.log("file renamed successfully")
})
fs.unlink('./folder/newfile.txt',(err)=>{
    if(err) throw err
    console.log("file deleted successfully")
})
fs.rmdir('./folder',(err)=>{
    if(err) throw err
    console.log("directory deleted successfully")
})