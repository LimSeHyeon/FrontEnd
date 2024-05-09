import axios from 'axios';
import * as cheerio from 'cheerio';

async function gongsi() {
    const resp = await axios.get('https://finance.naver.com/item/news_notice.naver?code=005930&amp;page=', {
        headers: {
            "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
        }
    });
    const data = await resp.data;
    const $ = cheerio.load(data);

    const firstTags = $('.first>tr');
    const result = firstTags.map((i, elem) => {
        const firstTitle = $(elem).find('.title').text();
        const firstInfo = $(elem).find('.info').text();
        const firstDate = $(elem).find('.date').text();

        return {
            title: firstTitle,
            info: firstInfo,
            date: firstDate
        }

    }).get();
    console.log(result);


    const lastTags = $('.last>tr');
    const result2 = lastTags.map((i, elem) => {
        const lastTitle = $(elem).find('.title').text();
        const lastInfo = $(elem).find('.info').text();
        const lastDate = $(elem).find('.date').text();

        return {
            title: lastTitle,
            info: lastInfo,
            date: lastDate
        }

    }).get();
    console.log(result2);
}

gongsi();

