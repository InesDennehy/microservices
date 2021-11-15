const express = require('express');

const app = express();

const PORT = process.env.PORT;

//estas palabras fueron generadas aleatoriamente en https://randomwordgenerator.com/
const words = ['disappointment', 'slave', 'association', 'speech', 'collection', 'thesis', 'physical', 'worth', 'army', 'sea'];

app.get('/a', (req, res) => {
    let rand = random(0,10);
    let word = words[rand];
    res.writeHead(200, {
        "Content-Type":"application/json",
    });
    res.end(`{"word" : "${word}"}`);
});

function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

app.listen(PORT, () => {
    console.log('random word microservice');
});