import axios from 'axios';
import * as cheerio from 'cheerio';

axios.get('https://example.com').then(resp=>{
    return resp.data;
}).then(data => {
    console.log(data);
    const $ = cheerio.load(data);
});