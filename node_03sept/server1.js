
import { createServer } from 'http';

const server = createServer((req,res)=>{
    res.writeHead(200,{ 'Content-Type' : 'text/plain'});
    res.end('Welcome to node server\n');
});

server.listen(3000, '127.0.0.1', ()=>{
    console.log('Listening on 127.0.0.1:3000');
});