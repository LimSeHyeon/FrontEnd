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

//자주 쓰는 함수
/*
console.log(multi.length);
console.log(multi[12]);
console.log(multi.charAt(12));
console.log(multi.toUpperCase());
console.log(multi.toLowerCase());
console.log(multi.indexOf("J"));
console.log(multi.indexOf("Y"));
console.log(multi.startsWith("Hello"));//startswith, endswith 대소문자 구별 함
console.log(multi.endsWith("JS"));

let newStr = multi.slice(4,10);
console.log(newStr);
let arr1 = multi.split("H");
console.log(arr1);
*/

let str3 = "     Hello World        ";
console.log(str3);
console.log(str3.trim());

console.log("*".repeat(10));