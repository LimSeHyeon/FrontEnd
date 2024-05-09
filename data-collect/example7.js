import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

async function main() {
    const url = 'https://s.search.naver.com/p/newssearch/search.naver';
    const params = {
        cluster_rank:99,
        field:0,
        is_dts:0,
        is_sug_officeid:0,
        mynews:0,
        nqx_theme: {"theme":{"main":{"name":"encyclopedia","score":"0.895011"}}},
        nso: '&nso=so:r,p:all,a:all',
        office_category:0,
        office_section_code:0,
        office_type:0,
        pd:0,
        photo:0,
        query:'이차전지',
        service_area:0,
        sort:0,
        spq:0,
        start:1,
        where:'news_tab_api',
        nso:'so:r,p:all,a:all',
        _callback:'jQuery1124006899474636072167_1715213644492',
        _: '1715213644497'
    }
    const resp = await axios.get(url, {
        params: params
    });
    const body = resp.data;
    let data = body.slice(
        "jQuery1124006899474636072167_1715213644492(".length, body.length-2
    );
    data = JSON.parse(data);

    const result = [];
    for (let html of data.contents){
        const $ = cheerio.load(html);
        const anchor = $('.news_contents a.news_tit');
        const title = anchor.text().trim();
        const url = anchor.prop('href');
        const desc = $('.dsc_wrap').text();
        result.push({
            title,
            url,
            desc
        })
    }

    console.log(result);
}

main();

// fetch("https://s.search.naver.com/p/newssearch/search.naver?cluster_rank=37&de=&ds=&eid=&field=0&force_original=&is_dts=0&is_sug_officeid=0&mynews=0&news_office_checked=&nlu_query=&nqx_theme=%7B%22theme%22%3A%7B%22main%22%3A%7B%22name%22%3A%22encyclopedia%22%2C%22score%22%3A%220.895011%22%7D%7D%7D&nso=%26nso%3Dso%3Ar%2Cp%3Aall%2Ca%3Aall&nx_and_query=&nx_search_hlquery=&nx_search_query=&nx_sub_query=&office_category=0&office_section_code=0&office_type=0&pd=0&photo=0&query=%EC%9D%B4%EC%B0%A8%EC%A0%84%EC%A7%80&query_original=&service_area=0&sort=0&spq=0&start=21&where=news_tab_api&nso=so:r,p:all,a:all&_callback=jQuery1124005088056049035905_1715212662857&_=1715212662859", {
//   "headers": {
//     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
//     "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
//     "cache-control": "max-age=0",
//     "priority": "u=0, i",
//     "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "sec-fetch-dest": "document",
//     "sec-fetch-mode": "navigate",
//     "sec-fetch-site": "none",
//     "sec-fetch-user": "?1",
//     "upgrade-insecure-requests": "1",
//     "cookie": "NNB=BIDKKGPSRIUGE; _ga=GA1.2.1748645178.1680627526; nid_inf=1124227444; NID_JKL=YZ3X15aLQw7Woq7uz4QDYtX+xT/icCJF4DCTZpMCkuo=; NID_AUT=/MDd3xUsRxq5GmaQld3oOjB+V5MD28HgO14nU9geB+k8dmlpvdjktkQCde1FRtcj; NID_SES=AAABsW6UKObvClu4tsOHtMzqvVAOA5SJcsC4dnIirS34slpYfVfDS0rabWK3rG14q8c142Wl8Kbqs9NhvInXICQRnT6exzf8KmDk5VTJBXreA25qKLkquI21q9nr5FTttbVwVr3cBKIDbr9GSVdgiPx/ROjD7f4RPRYqoW0KihnfnATZp1Ib1qJNt2wZG1wQQniMygztWcuU14/TO7T/Dzoq5vQTH/Lt52+gFP25mq28NpPsmXaOVaRFVKE5SBW0184TQuHTRV2nJeUiQXowlOcNjVdk1P8cvuuLml02kgNJ86O5fIy1FbMRve7x/8IGO8eDslEWJVwba7LVOMrZv6VwIf++6HluTGLgjOduW4izUPmaw9rcPHQ86RMYRSo0ayWaCx35vgEDg8uEbwtvB2lcDfFGxd31dQgoujTdBPQu14uped6CAyFSQqcBC0ggmw4rwmMseLI528ngeoQ/xzFoQ7zTgVgSkg0/ldGDRh/k6aAB4RgVWocPONx6U3T3CqSFu/MdXQAP23ibiS3RH2TPxGNdBi1EqiHUzpbgrceWkb4Z5o4o+kFj/juMBfgpp2Aijl37J3+xP80Fs34m5TkqY2o=; page_uid=iBweOlqo1SossajkfCdsssssttd-196614; BUC=GlryeP2B6PjaNo5K_PfTZzc6maJpYVmyh8Npgv5y3XI=; _naver_usersession_=HDzEMn7eUTcFTP8CdF9zNCJ4"
//   },
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET"
// });


// 이건 아냐 ㅠ
// import axios from 'axios';
// import * as cheerio from 'cheerio';
// import fs from 'fs';

// async function second() {
//     const resp = await axios.get('https://search.naver.com/search.naver', {
//         params: {
//             ssc: "tab.news.all",
//             where: "news",
//             sm: "tab_jum",
//             query: '이차전지'
//         }
//     });
//     const data = await resp.data;
//     fs.writeFile(`naver.json`, JSON.stringify(data), () => {});
//     const $ = cheerio.load(data);

//     //제목, 신문사, 요약설명, 이미지(존재시)
//     const itemTags = $('.c-list-basic>li');
//     const result = itemTags.map((i, elem) => {
//         const contentTags = $(elem).find('.c-item-content');
//         const title = contentTags.find('.tit-g .clamp-g').text();
//         const press = $(elem).find('.c-tit-doc .tit-item').prop('title').text();
//         const summary = contentTags.find('.item-contents>a').text();
//         const img = contentTags.find('.item-thumb>a>img').prop('src').text();

//         return {
//             title: title,
//             press: press,
//             summary: summary,
//             img: img? img:null
//         }
//     }).get();
//     console.log(result);
// }

// second()