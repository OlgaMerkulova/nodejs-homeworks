#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv))
.option('year', {
  alias: 'y',
  type: 'boolean',
  description: 'Вывод года'
})
.option('month', {
    alias: 'm',
    type: 'boolean',
    description: 'Вывод месяца',
})
.option('date', {
    alias: 'd',
    type: 'boolean',
    description: 'Вывод дня',
})
.argv;

const mode = argv._[0]
if ( mode === "current") {
    const current = new Date();

    if (!argv.date && !argv.month && !argv.year) {
        console.log('current date: ', current.toISOString());
    } else {
        if (argv.date) {
            console.log("day: ", current.getDate());
        }
        if (argv.month) {
            console.log('month: ', current.getMonth() + 1);            
        }  
        if (argv.year) {
            console.log('year: ', current.getFullYear());
        }
    }
} else {
    let current = new Date();
    const add = argv._[1] * (mode === "add" ? 1 : -1);
    if (argv.date) {
        current = new Date(current.setDate(current.getDate() + add));
        
    } else if (argv.month) {
        current = new Date(current.setMonth(current.getMonth() + add));
    } else if (argv.year) {
        current =  new Date(current.setFullYear(current.getFullYear() + add));
    }
    console.log('result: ', current);
}

