#!/usr/bin/env node

const readline = require('node:readline');
const {
    stdin: input,
    stdout: output,
} = require('node:process');
const fs = require('fs');
const path = require('path');

const random = Math.round(Math.random());

console.log(`Загадано 0 или 1?`);

const rl = readline.createInterface({ input, output });
const file = path.join(__dirname, '../', 'logs.txt');

rl.question('', function (answer) {
    answer = Number(answer);
    if (answer === random) {
        console.log(`Верно!`);
    } else {
        console.log(`Ошибка`);
    }
    fs.appendFile(file, (answer === random).toString() + '\n', (err) => {
        if (err) throw Error(err);
    })
    return rl.close();
  });
