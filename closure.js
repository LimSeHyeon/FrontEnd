/*
function outer() {
    let count = 0;
    function inner() {
        count++;
        return count;
    }
    return inner;
}

const counter = outer();
console.log(counter());
console.log(counter());
*/

//연습문제1
//클로저를 사용하여 counter 함수를 만드시오. 이 함수는 호출될 때마다 숫자가 1씩 증가해야 합니다.
/*
function createCounter() {
    let counter = 0;
    function inner() {
        counter++;
        return counter;
    }
    return inner;
}

const counter1 = createCounter();
console.log(counter1());//1
console.log(counter1());//2

const counter2 = createCounter();
console.log(counter2());//1
console.log(counter2());//2
console.log(counter1());//3
console.log(counter2());//3
*/

//연습문제2
//시작 값과 단계 값을 받아서, 호출할 때마다 시작 값에서부터 단계 값만큼 증가하는 값을 반환하는 함수를 만드세요.
function createIncremeter(start, step) {
    let count = start;
    function inner() {
        count += step;
        return count;
    }
    return inner;
}

const incByOne = createIncremeter(5,1);
console.log(incByOne());//6
console.log(incByOne());//7

const incByTen = createIncremeter(10, 10);
console.log(incByTen());//20
console.log(incByTen());//30