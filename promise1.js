/*
new Promise((resolve, reject) => {
    console.log("Promise1");
    const value = 10;
    if(value===10) {
        resolve(value);
    }
    else {
        reject(value);
    }
}).then(data => {
    console.log("Resolve!");
    console.log(data);
}).catch(err => {
    console.error("Reject!");
    console.log(err);
})
*/

function fastFunction(data) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            const result = data * 2;
            console.log('Fast function done', result)
            //reject(new Error('임시 에러'));//catch로 잡음
            resolve(result);// then으로 받음
        }, 1000);
    })
}

function slowFunction(data) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            const result = data + 10;
            console.log('Slow function done', result)
            // reject(new Error('임시 에러'));//catch로 잡음
            resolve(result);
        }, 3000)
    })
}

function runTasks() {
    return fastFunction(10)
    .then((data) => {  
        return slowFunction(data);
    }).then(data=>{
        console.log('작업완료');
    }).catch((err) => {
        console.error(err);
    })
}


const sample = runTasks();
console.log(sample);//promise 객체가 반환값임

//pending: 종료 x
//fulfilled : 성공
//rejected : 실패