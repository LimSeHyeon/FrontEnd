import axios from 'axios';
import * as cheerio from 'cheerio';

async function scrapeFinance(code) {
    const resp = await axios.get('https://finance.naver.com/item/sise_day.naver', {
        params: {
            code: code
        },
        headers: {
            "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
        }   
    });

    const data = await resp.data;
    const $ = cheerio.load(data);
    const dayCost = $('.type2').text();
    // console.log(dayCost);
    const result = JSON.stringify(dayCost);
    console.log(result);
    return result;
}

scrapeFinance('005930');