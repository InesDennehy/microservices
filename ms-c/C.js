const express = require('express');
const http = require("http");

const app = express();

const PORT = process.env.PORT;
const B_HOST = process.env.B_HOST;
const B_PORT = parseInt(process.env.B_PORT);

app.get('/c', (req, res) => {
    var options = {
        host: B_HOST,
        port: B_PORT,
        path: '/b',
        method: 'GET',
        headers: req.headers,
    };

    const wordreq = http.request(options, 
        wordres => {
            let json = [];
            wordres.on('data', d => {
                json.push(d);
            });
            wordres.on('end', () => {
                json = JSON.parse(json);
                let str = json.cap.concat(random(1,100));
                res.writeHead(200, {
                    "Content-Type":"application/json",
                });
                res.end(`{"str" : "${str}"}`);
            });

        });
    wordreq.on('error', (e) =>{
        console.log('problem with request: '+e.message);
    });
    wordreq.end();
});

function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

app.listen(PORT, () => {
    console.log('random capitalized word with number microservice');
});