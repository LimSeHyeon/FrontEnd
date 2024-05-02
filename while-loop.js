/*
let i=0;
while(i<10) {
    i++;
    if(i%2===1) {
        continue;
    }
    console.log(i);
}

i = 0;
do {
    i++;
    console.log(i);
} while(i<10);

//100보다 큰 입력 들어올 때까지 반복하기
let i = 0;
do {
    i = parseInt(prompt("숫자 입력"));
} while(i<=100);
console.log("good");
*/

// 함수와 숫자 n을 받아서, 주어진 함수가 최대 n번만 호출될 수 있도록 하는 limitCalls 함수를 작성하세요
function limitCalls(func, n) {
    let cnt = 0;
    function inner() {
        if(cnt<n) {
            func();
            cnt++;
        }
    }
    return inner;
}

const limitedHello = limitCalls(() => console.log('Hello!'), 5);
limitedHello();
limitedHello();
limitedHello();
limitedHello();
limitedHello();
limitedHello();limitedHello();limitedHello();limitedHello();