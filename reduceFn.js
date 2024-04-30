//reduce 함수는 인자를 2개를 받음
//하나는 함수, 하나는 숫자

const arr = [1, 2, 3, 4, 5];

const result = arr.reduce((prev, cur, idx, arr) => {
    console.log(prev, cur, idx, arr);
    console.log("-".repeat(10));
    return prev + cur;
}, 10);

console.log(result);