#!/usr/bin/env node
const fs = require('fs');



if (!fs.existsSync('logs.txt')) {
    console.log('Видимо, вы еще не сыграли ни одного раза')
} else {

    const readerStream = fs.createReadStream('logs.txt');
    let data = '';
    readerStream
    .setEncoding('UTF8')
    .on('data', (chank) => {
        data += chank;
    })
    .on('end', () => {
        const logs = data.trim().split('\n');
        console.log('logs', logs);
    
        if (logs.length > 0) {
            console.log('Количество сыгранных партий: ', logs.length);
            const win = logs.filter(el => el == 'true').length;
            console.log('Количество выигранных партий: ', win);
            console.log('Количество проигранных партий: ', logs.length - win);
            console.log('Процентное соотношение выигранных партий: ', Math.round((win / logs.length) * 100) + '%');
        } else {
            console.log('Нет сыгранных партий!')
        }
    
    })
}

