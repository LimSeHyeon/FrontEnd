//let의 선언은 블록 스코프를 벗어날 수 없다 !(중괄호 단위), var는 함수 스코프 -> if문 밖에서도 사용 가능
function sample() {
    console.log(name1);
    if(true) {
        let name1 = 1;
    }
    console.log(name1);
}
sample();

//var 함수는 인터프리터가 선언부를 파일의 맨 위로 올림. -> 코드 상 선언이 나중에 있어도 에러 없이 실행이 가능. 값이 undefined는 나올 수 있음
function sample2() {
    console.log(name2);
    if(true) {
        var name2 = 1;
    }
    console.log(name2);
}
sample2();