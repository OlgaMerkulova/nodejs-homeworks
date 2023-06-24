const http = require('http');
const readline = require('node:readline');
const {
    stdin: input,
    stdout: output,
} = require('node:process');

const myAPIKey = process.env.myAPIKey;

console.log(`Введите город`);
const rl = readline.createInterface({ input, output });

rl.question('', function (answer) {

    const url = `http://api.weatherstack.com/current?access_key=${myAPIKey}&query=${answer}`;

    http.get(url, (res) => {
        let response = '';
    
        res.on('data', (chunk) => response += chunk)
        res.on('end', () => {
            const parsedWeather = JSON.parse(response).current;

            if (parsedWeather) {
                console.log('Температура: ', parsedWeather.temperature + '°C');
                console.log('Скорость ветра: ', parsedWeather.wind_speed + 'м/с');
            } else {
                console.log('Город не найден!')
            }
            
            return rl.close();
        })
    }).on('error', (err) => {
        console.error(err);
        return rl.close();
    })
});  
