const arr1 = [1,2,3,4,5];
const result = arr1.forEach((item, idx) => {//forEach는 인자가 함수
    console.log(item*10);
})
arr1.forEach(function(item, idx) {
    console.log(item);
})

function sample(item, idx) {
    console.log(item - idx);
}
arr1.forEach(sample);

console.log(result);