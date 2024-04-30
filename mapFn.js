const arr1 = [1,2,3];

const result = arr1.map((item, idx) => {//인자로 받은 함수의 리턴값들로 새로운 배열을 만듦
    return item * 10;
})

console.log(result);