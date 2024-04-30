//사용자로부터 점수 3개 입력받아 모든 점수보다 65보다 클 경우 true, 아니면 false 출력하기
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.on('line', function (line) {


//     rl.close();
// });

/*
let first = "hello workd";
let multi = "hello \n world";

console.log(first);
console.log("---".repeat(10));
console.log(multi);
*/

//백틱 사용 이유 : 문자열 포맷팅
let name = "임세현";
let multi = `Hello ${name}
Hello Js`;
console.log(multi);

// 이스케이프 코드는 백슬래시 \
// \n \t \\ \" \'