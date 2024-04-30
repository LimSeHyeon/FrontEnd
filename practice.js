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
/*
let name = "임세현";
let multi = `Hello ${name}
Hello Js`;
console.log(multi);
*/
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


let str3 = "     Hello World        ";
console.log(str3);
console.log(str3.trim());

console.log("*".repeat(10));
*/

/*
연습문제
a=" 90:30:80 "이고 :을 기준으로 각각 수학점수, 영어점수, 과학점수이다.
문자열 함수를 이용해 공백을 제거하고,
각 점수를 각각 math, english, science 변수에 저장한 후,
average 란 변수에 평균값을 저장하고 출력하시오.
이 때 출력의 형태는 “평균 점수는 ~~입니다.”로 하시오.

let a = " 90:30:80 ";
a = a.trim();//공백 제거
let arr = a.split(":");
let [math, english, science] = arr;
// let math, english, science;
// math = parseInt(arr[0]);
// english = parseInt(arr[1]);
// science = parseInt(arr[2]);
let average = (parseInt(math) + parseInt(english) + parseInt(science)) / 3;
console.log(`평균 점수는 ${average}입니다.`);
*/
/*
let obj1 = {
    'key': 'value',
    'city': 'seoul',
    'age' : 12
}
console.log(obj1);
console.log(typeof(obj1));
console.log(obj1.key);
console.log(obj1.city);
*/

/*
//함수 선언, 정의
console.log(min(1,2));
function min(a,b) {
    return a<b ? a : b;
}

function min2(a,b) {
    if(a<b) {
        return a;
    } else {
        return b;
    }
}


console.log(max1(10,4));
//함수표현식 : 함수 정의, 변수에 할당
//함수표현식은 맨 위로 올리지 않기 때문에 오류가 날 수 있음
const max1 = function(a,b) {
    return a>b ? a : b;
}
//화살표함수(파이썬 람다함수 느낌)
const max2 = (a,b) => {
    return a>b ? a : b;
}
const max3 = (a,b) => (a>b ? a : b);//중괄호 블록 생략 가능
*/

//함수도 하나의 데이터 타입이 될 수 있음
/*
function createGreeting(greetingPrefix) {
    return function(name) {
        console.log(greetingPrefix + ', ' + name + "!");
    };
}

const greetHello = createGreeting("Hello");
const greetHi = createGreeting("Hi");
console.log(typeof(greetHello));//함수의 반환 형식이 함수
greetHello("Alice");
greetHi("Bob");
*/