const { Transform } = require('stream'); //step-3a and 3b
const http = require('http'); //step-1
const fs = require('fs'); //step-4 and step-3a and 3b

//step-1 - create a server that responds with "server is running" on the root route and "404 Page Not Found" on the /about route.

//step-2 - create a server that responds with a JSON object containing your name and email on the /user route.
let data = {
    name: "Yash Raj",
    email: "yash@gmail.com",
};

const accessLogStream = fs.createWriteStream('./miniProject/access.log', { flags: 'a' }); //step-4

const server = http.createServer((req, res) => {
    try {
        //step -4 - log each incoming request's method, URL, and timestamp to a file named access.log.
        const log=`${new Date().toISOString()}|${req.method}|${req.url}\n`;
        accessLogStream.write(log);

        if (req.url === '/' && req.method === 'GET') {
            res.end("server is running");
        } 
        else if (req.url === '/about' && req.method === 'GET') {
            res.end("404 Page Not Found");
        }
        //step-2
        else if (req.url === '/user' && req.method === 'GET') {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
        } 
        //step-3a - create a server that converts the incoming request data to uppercase using streams and responds with the transformed data on the /uppercase route.
        else if (req.url === '/uppercase' && req.method === 'POST') {
            const upperCaseStream = new Transform({
                transform(chunk, encoding, callback) {
                    callback(null, chunk.toString().toUpperCase());
                }
            });
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            req.pipe(upperCaseStream).pipe(res);
            return;
        }
        //step-3b - remove voweles from the incoming request data using streams and responds with the transformed data on the /processes route.
        else if(req.url ==='/processes'&& req.method==='GET') {
            const removeVowelsStream = new Transform({
                transform(chunk,encoding,callback) {
                    const result =chunk.toString().replace(/[aeiouAEIOU]/g,'');
                    callback(null,result);
                }
            });
            res.writeHead(200,{'Content-Type':'text/plain'});
            req.pipe(removeVowelsStream).pipe(res);
        }           
        else {
            res.end("404 Page Not Found");
        }
    } catch (error) {
        console.log(error.message);
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
