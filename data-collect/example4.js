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
    // const dayCost = $('.type2');
    // console.log(dayCost);
    // console.log(dayCost);
    // return dayCost;

    const trTags = $('tr[onmouseover]');
    const result = trTags.map((i, elem) => {
        const tdTags = $(elem).find('td>span');
        return {
            date: $(tdTags[0]).text(),
            close: $(tdTags[1]).text(),
            ratio: $(tdTags[2]).text().trim(),
            open: $(tdTags[3]).text(),
            high: $(tdTags[4]).text(),
            low: $(tdTags[5]).text(),
            volume: $(tdTags[6]).text()
        }
    }).get();
    
    console.log(result);

    // for(let i = 2; i < stockInfo.length-1; i++) {
    //     if(i===7 || i===8 || i===9) continue;
    //     const info = [];
    //     let date = $(stockInfo[i]).find('.tah .p10 .gray03').text();
    // }
}

scrapeFinance('005930');