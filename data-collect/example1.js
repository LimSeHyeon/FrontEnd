import axios from 'axios';
import * as cheerio from 'cheerio';

axios.get('https://quotes.toscrape.com').then(resp => {
    return resp.data;
}).then(data => {
    const $ = cheerio.load(data);
    /*console.log(
        // <cheerio객체>.find(<css selector>)
        $(quoteTags[0]).find('.text').text()
    );
    */


    const quoteTags = $('.container .quote');
    for(let i = 0; i < quoteTags.length; i++) {
        console.log($(quoteTags[i]).find('.text').text());
    }


    const authorNameTags = $('.container .author');
    for(let i = 0; i < authorNameTags.length; i++) {
        console.log($(authorNameTags[i]).text());
    }

    const tagsTags = $('.container .author');
    for(let i = 0; i < tagsTags.length; i++) {
        console.log($(tagsTags[i]).text());
    }
})

axios.get('https://quotes.toscrape.com').then(resp => {
    return resp.data;
}).then(data => {
    // console.log({data});
});