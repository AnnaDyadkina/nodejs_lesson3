const prompt = require('prompt');
const request = require('request');
const cheerio = require('cheerio');

prompt.get([{name: 'text', description: 'Введите текст для перевода'}], function (err, result) {
    const url = 'https://translate.yandex.net/api/v1.5/tr/translate?key=trnsl.1.1.20180624T172638Z.86f039d72ccd4099.bae3139e66529939754f741732b963ffdd54b292&lang=en-ru&format=html&text=' + result.text;
    request(url, function (error, response, html) {
        if (!error && response.statusCode == 200) {
            const $ = cheerio.load(html);
            console.log($('text').text());
        }
    });
});

