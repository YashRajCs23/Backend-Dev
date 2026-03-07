const http=require('http');
const fs=require('fs');
const path=require('path');
const url=require('url');
const port=3000;

const notesFile=path.join(__dirname,"notes.txt");

const server=http.createServer((req,res)=>{
    const parsedUrl=url.parse(req.url,true);
    const pathname=parsedUrl.pathname;
    const query=parsedUrl.query;

    if(pathname==="/add"){
        const note=query.note;  
        if(!note){
            res.writeHead(400,{"Content-Type":"text/plain"});
            res.end("Note is required");
            return;
        }
        fs.appendFile(notesFile,note+"\n",(err)=>{
            if(err){
                res.writeHead(500,{"Content-Type":"text/plain"});
                res.end("Error saving note");
            }else{
                res.writeHead(200,{"Content-Type":"text/plain"});
                res.end("Note added successfully");
            }
        });
    }

    else if(pathname==="/notes"){
        fs.readFile(notesFile,"utf8",(err,data)=>{
            if(err||data.trim()===""){
                res.writeHead(200,{"Content-Type":"text/plain"});
                res.end("No notes found");
                return;
            }
            res.writeHead(200,{"Content-Type":"text/plain"});
            res.end(data);
        });
    }

    else if(pathname==="/clear"){
        fs.writeFile(notesFile,"",(err)=>{
            if(err){
                res.writeHead(500,{"Content-Type":"text/plain"});
                res.end("Error clearing notes");
                return;
            }else{
                res.writeHead(200,{"Content-Type":"text/plain"});
                res.end("Notes cleared successfully");
            }
        });
    }
    else{
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.end("Not Found");
    }
});

server.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`);
});