// # https://jsonplaceholer.typicode.com/todos/<todoId>
// - <todoId:int는 변수>


// todoID가 1,3,5,7,9인 데이터 조회하여 출력하세요
for(let i = 1; i<10;i+=2) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${i}`).then (resp=>{
    // console.log(resp);
    return resp.json();
}).then(data => {
    console.log(data);
})    
}