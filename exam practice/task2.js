const http=require('http');
const path=require('path');
const url=require('url');
const fs=require('fs');

const port=3000;
const server=http.createServer((req,res)=>{
    const parsedUrl=url.parse(req.url);
    const pathname=parsedUrl.pathname;
    const method=req.method;

    const time=`${time} | ${method} | ${pathname}\n`;

    fs.appendFile(logFile,log,(err)=>{
        if(err)
            console.error('Error appending to log file:', err);
    })

    if(pathname==='/'){
        res.writeHead(200,{'Content-Type':"text/plain"});
        res.end("Home Page");
    }
    else if(pathname==='//about'){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("About Page");
    }
    else if(pathnamr==='/contact'){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("contact page");
    }
    else{
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.end("404 Not Found");
    }
})

server.listen(3000||port,()=>{
    console.log(`Server is running on port ${port}`);
})