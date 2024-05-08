import axios from 'axios';
import * as cheerio from 'cheerio';

async function second() {
    axios.get('https://search.naver.com/search.naver?ssc=tab.news.all&where=news&sm=tab_jum&query=%', {
        params: {
            ssc: "tab.news.all",
            where: "news",
            sm: "tab_jum",
            query: '이차전지'
        }
    });
    const data = await resp.data;
    const $ = cheerio.load(data);

    //제목, 신문사, 요약설명, 이미지(존재시)
    const itemTags = $('.c-list-basic>li');
    itemTags.map((i, elem) => {
        const contentTags = $(elem).find('.c-item-content');
        const title = contentTags.find('.tit-g .clamp-g').text();
        const press = $(elem).find('.c-tit-doc .tit-item').prop('title').text();
        const summary = contentTags.find('.item-contents>a').text();
        const img = contentTags.find('.item-thumb>a>img').prop('src').text();

        return {
            title: title,
            press: press,
            summary: summary,
            img: img? img:null
        }
    }).get();
}

second()