function sample() {
    console.log(name1);
    if(true) {
        let name1 = 1;
    }
    console.log(name1);
}
sample();

//var 함수는 인터프리터가 선언부를 파일의 맨 위로 올림. -> 코드 상 선언이 나중에 있어도 에러 없이 실행이 가능
function sample2() {
    console.log(name2);
    if(true) {
        var name2 = 1;
    }
    console.log(name2);
}
sample2();