import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

async function scrapeNewsUrl(query, page) {
    const resp = await axios.get('https://search.daum.net/search', {
        params: {
            w:'news',
            cluster: 'y',
            q: query,
            p: page
        }
    });
    const data = await resp.data;
    const $ = cheerio.load(data);
    const newsList = $('ul.c-list-basic > li');
    const urlList = newsList.map((i, el) => {
        const titleAnchor = $(el).find('.c-item-content .item-title a');
        const url = titleAnchor.prop('href');
        return url;
    }).get();
    console.log(urlList);
    return urlList;
}

async function scrapeOneNews(urlList) {
    // const htmlList = urlList.map((i, el) => {
    //     axios.get(el);
    // });
    // console.log(htmlList);
    // return htmlList;

    const htmlList = await Promise.all(urlList.map(async (url) => {
        const resp = await axios.get(url);
        return resp.data;
    }));
    return htmlList;

    // const htmlList = [];
    // for (let i = 0; i < urlList.length; i++) {
    //     const url = urlList[i];
    //     const resp = await axios.get(url);
    //     htmlList.push(resp.data);
    // }
    // return htmlList;
}

async function saveHtmls(htmlList) {
    for(let i = 0; i < htmlList.length; i++) {
        fs.writeFileSync(`./crawl_daum/news_${i}.html`, htmlList[i]);
    }
}

async function getNews() {
    const urlList = await scrapeNewsUrl("금융 서비스", 1);
    const htmlList = await scrapeOneNews(urlList);
    await saveHtmls(htmlList);
}

getNews();