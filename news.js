const request = require('request');
const cheerio = require('cheerio');
request('https://rg.ru/news.html', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        $('.b-news-inner__list .b-news-inner__list-item').each(function(i, element){
            const title = $(this).find('.b-news-inner__list-item-title a');
            const time = $(this).find('.b-news-inner__list-item-date._date');
            console.log(
                time.text()
                + ': '
                + title.text()
            );
        });
    }
});





