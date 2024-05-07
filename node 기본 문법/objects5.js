let options = {
    title: "Menu",
    width: 100,
    height: 200,
    k1: 'v1',
    k2: 'v2'
}
const myName = "임세현";
let options2 = {//객체를 풀어서 넣는다
    newKey: "new Key",//새로운 키 생성
    title: "new Menu",//이거는 아래 ...options에 의해서 덮어씌워짐
    ...options,
    width: 500,//여기서 바꾸면 바뀜
    myName//변수명이 키값으로 들어옴
}
console.log(options2);