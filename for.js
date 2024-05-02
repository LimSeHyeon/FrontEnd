const obj1 = {
    name: 'tpgus',
    city: 'Seoul',
    width: 300
}
for(let i in obj1) {
    console.log(i);
}
console.log('-'.repeat(30));

const arr1 = ['a', 'b', 'c'];//in은 인덱스
for(let i in arr1) {
    console.log(i);
}
for(let item of arr1) {//of는 값
    console.log(item);
}