import axios from 'axios';

axios.get('https://example.com').then(resp=>{
    return resp.data;
}).then(data => {
    console.log(data);
});