import axios from 'axios';
import * as cheerio from 'cheerio';

let quotes = [];

for( let idx = 1; idx <= 10; idx++ ) {
    axios.get(`https://quotes.toscrape.com/page/${idx}`).then(resp => {
        return resp.data;
    }).then(data => {
        const $ = cheerio.load(data);

        const quoteTags = $('.container .quote');
        const authorNameTags = $('.container .author');
        const tagsTags = $('.container .tags');
    
        for(let i = 0; i < tagsTags.length; i++) {
            let tagList = [];
            let tags = $(tagsTags[i]).find('.tag');
            for(let j = 0; j < tags.length; j++) {
                tagList.push($(tags[j]).text());
            }
    
            quotes.push({
                "quote": $(quoteTags[i]).find('.text').text(),
                "author": $(authorNameTags[i]).text(),
                "tags": tagList
            });
        }
        if(idx===10) console.log(quotes);
    });
}