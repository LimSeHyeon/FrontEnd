/*
const score = [
    prompt("점수입력1"),
    prompt("점수입력2"),
    prompt("점수입력3")

]

const browser = "Edge";
if(browser === "Edge") {
    console.log('Edgd using')
} else if(['Chrome', 'Firefox'].includes(browser)) {
    console.log('using another');
}

//안녕안녕
let num = parseInt(prompt("정수를 입력해주세요 : "));
for(let i = 0; i < num; i++) {
    console.log("안녕");
}

//별찍기
let num = parseInt(prompt("정수를 입력해주세요 : "));
for(let i = 0; i <= num; i++) {
    for(let j = 0; j < i; j++) {
        console.log("*");
    }
    console.log("");
}

//별찍기(역순)
let num = parseInt(prompt("정수를 입력해주세요 : "));
for(let i = num; i > 0; i--) {
    for(let j = 0; j < i; j++) {
        console.log("*");
    }
    console.log("");
}

let x = [3,6,9,20,-7,5];
for(let item in x) {
    console.log(x[item]*10);
    x[item] = x[item]*10;
}*/

/*
let y = {'math': 70, 'science': 80, 'english': 20};
for(let i in y) {
    console.log(y[i]+10);
    y[i] += 10;
}
console.log(y);


//숫자 입력받고 구구단
const input = parseInt(prompt("정수 입력 : "));
for(let i = 1; i < 10; i++) console.log(`${input}*${i} = ${input*i}`);

//글자수가 6글자 이상인 문자를 모아 새로운 배열 생성
let  word = ['school', 'game', 'piano', 'science', 'hotel', 'mountian'];
let newword = word.filter(elem => {
    return elem.length >= 6;
})
console.log(newword);

for(let i =1;i<10;i++) {
    for(let j =1;j<10;j++) {
        console.log(`${i*j}`);
    }
}
*/
// 1-100 까지 숫자중
// 3과 5의 공배수일경우 “3과 5의 공배수”
// 나머지 숫자중 3의배수일경우 “3의배수”
// 나머지 숫자중 5의배수일경우 “5의배수”
// 모두 해당되지 않을경우 그냥숫자 출력
for(let i=1;i<=100;i++) {
    if(i%3===0 && i%5===0) console.log("3과 5의 공배수");
    else if(i%3===0) console.log("3의 배수");
    else if(i%5===0) console.log("5의 배수");
    else console.log("그냥 숫자");
}