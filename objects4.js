let arr2 = ['a', 'b', 'c', 'd', 'e'];
let [v1, v2, ...v3] = arr2;

let v4 = ['A', 'B', v3];//이러면 배열 크기는 3
console.log(v4);
v4 = ['A', 'B', ...v3]; //이러면 배열이 풀어져서 들어감
console.log(v4);