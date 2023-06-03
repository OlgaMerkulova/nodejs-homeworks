#!/usr/bin/env node

const readline = require('node:readline');
const {
    stdin: input,
    stdout: output,
} = require('node:process');

const min = 0;
const max = 100;
const random = Math.round(Math.random() * (max - min) + min);
console.log(`Загадано число в диапазоне от ${min} до ${max}`);

const rl = readline.createInterface({ input, output });

function getNewInput() {
    rl.question('', function (answer) {
        answer = Number(answer);
        if (answer === random) {
            console.log(`Отгадано число ${answer}`);
            return rl.close();
        } else {
            console.log(answer > random ? 'Меньше' : 'Больше')
        }
        getNewInput(); 
      });      
}

getNewInput();


