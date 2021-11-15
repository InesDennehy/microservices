const express = require('express');
const http = require("http");

const app = express();

const PORT = process.env.PORT;
const A_HOST = process.env.A_HOST;
const A_PORT = parseInt(process.env.A_PORT);

app.get('/b', (req, res) => {
    var options = {
        host: A_HOST,
        port: A_PORT,
        path: '/a',
        method: 'GET',
        headers: req.headers,
    };

    let capitalized = "";
    const wordreq = http.request(options, 
        wordres => {
            let json = [];
            wordres.on('data', d => {
                json.push(d);
            });
            wordres.on('end', () => {
                json = JSON.parse(json);
                capitalized = json.word.toUpperCase();
                res.writeHead(200, {
                    "Content-Type":"application/json",
                });
                res.end(`{"cap" : "${capitalized}"}`);
            });

        });
    wordreq.on('error', (e) =>{
        console.log('problem with request: '+e.message);
    });
    wordreq.end();
});

app.listen(PORT, () => {
    console.log('random capialized word microservice');
});