const express = require('express');

const app = express();
const PORT = 4000;

//estas palabras fueron generadas aleatoriamente en https://randomwordgenerator.com/
const words = ['disappointment', 'slave', 'association', 'speech', 'collection', 'thesis', 'physical', 'worth', 'army', 'sea'];

app.get('/a', (req, res) => {
    let word = words[random(0,10)];
    res.writeHead(200, {
        "Content-Type":"application/json",
    });
    res.end(`{"word" : ${word}}`);
});

function random(min, max) {
    return Math.random() * (max - min) + min;
}

app.listen(PORT, () => {
    console.log('random word microservice');
});