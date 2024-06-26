import axios from 'axios';
import * as cheerio from 'cheerio';

async function fetchWadiz() {
    const url = 'https://service.wadiz.kr/api/search/funding';
    let result = [];

    for(let i = 0; i <1; i++) {
        const size = 500;
        const resp = await axios.post(url, {
            "startNum": 0,
            "order": "recommend",
            "limit": size,
            "categoryCode": "",
            "endYn": ""
        }, {});
        // console.log(resp.data);
        result = [
            ...result,
            ...resp.data.data.list
        ]
    }
    console.log(result.length);
    // Json.parse();
}

fetchWadiz();



























// fetch("https://service.wadiz.kr/api/search/funding", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
//     "content-type": "application/json",
//     "priority": "u=1, i",
//     "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-site",
//     "Referer": "https://www.wadiz.kr/",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": "{\"startNum\":0,\"order\":\"recommend\",\"limit\":48,\"categoryCode\":\"\",\"endYn\":\"\"}",
//   "method": "POST"
// });