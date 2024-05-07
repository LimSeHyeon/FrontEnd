// # https://jsonplaceholer.typicode.com/todos/<todoId>
// - <todoId:int는 변수>


// 1. todoID가 1,3,5,7,9인 데이터 조회하여 출력하세요
/*
for(let i = 1; i<10;i+=2) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${i}`).then (resp=>{
    // console.log(resp);
    return resp.json();
}).then(data => {
    console.log(data);
})    
}
*/
// const baseUrl = 'https://jsonplaceholder.typicode.com/todos';
// [1,3,5,7,9].forEach((value) => {
//     const url = `${baseUrl}/${value}`;
//     fetch(url).then (resp => {
//         return resp.json();
//     }).then(data => {
//     console.log(data);
//     });
// });

//응답 순서 통일
// async function fetchById(todoId) {
//     const baseUrl = "https://jsonplaceholder.typicode.com/todos";
//     const url = `${baseUrl}/${todoId}`;
//     const resp = await fetch(url);
//     const data = await resp.json();
//     return data;
// }
// (async () => {
//     for( let i of [1,3,5,7,9]) {
//         console.log(await fetchById(i));
//     }
// })()


// 2. 모든 todo 중 completed가 true인 데이터만 모아서 새로운 배열을 만드세요
/*
let arr = [];
fetch(`https://jsonplaceholder.typicode.com/todos/`).then (resp=> {
    return resp.json();
}).then(data => {
    
    // 방법 1 - for문 반복
    for(i in data) {
        if(data[i].completed===true) arr.push(data[i]);
    }
    console.log(arr);
    
    
    //방법 2 - filter 사용
    const result = data.filter((item, idx) => {
        return item.completed===true;
    })
    console.log(result);
    
})
*/

// async function fetchCompleted() {
//     const url = "http://jsonplaceholder.typicode.com/todos";
//     const resp =  await fetch(url);
//     const data = await resp.json();
//     const result = data.filter(elem=>elem.completed);
//     console.log(result);
// }
// fetchCompleted();





// 3. (심화) todoId가 1,3,5,7,9인 데이터를 새로운 배열로 만들어 저장하세요
/*
for(let i = 1; i<10;i+=2) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${i}`).then (resp=>{
    return resp.json();
}).then(data => {
    const result = data.filter((item, idx) => {
        return item.id%2===1;
    })
    console.log(result);
})
}*/

async function fetchById(todoId) {
    const baseUrl = "https://jsonplaceholder.typicode.com/todos";
    const url = `${baseUrl}/${todoId}`;
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}
(async () => {
    const arr = [1,3,5,7,9].map(value=>fetchById(value));
    const data = await Promise.all(arr)
    console.log(data);
})()