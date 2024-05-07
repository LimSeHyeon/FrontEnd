const arr = [1, 2, 3, 4];
const result = arr.filter((item, idx) => {//filter 함수의 인자로 받은 함수의 true로 받은 값들을 모아서 새로운 배열을 만듦
    return item > 3;
})

console.log(result);