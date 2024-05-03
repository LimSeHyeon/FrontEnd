/*c
onst animal = {
    name: "lion",
    run() {
        console.log(`${this.name}이 달립니다`);
    },
    run2: function() {
        console.log('동물이 달려요');
    }
}
*/
// animal.run();
// animal.run2();
/*
function Animal(name) {
    this.name = name;
    this.run = function() {
        console.log(`${this.name} 동물이 달린다`);
    }
}

const animal2 = new Animal('사자');
console.log(animal2);
console.log(animal2.constructor)
animal2.run();*/

function Animal(name) {// 생성자 함수
    this.name = name || 'lion';
    this.run = function() {
        console.log(`${this.name} 동물이 달린다.`);
    }
}

const animal2 = new Animal('사자');
console.log(animal2);
console.log(animal2.constructor)
animal2.run();


//prototype : 생성자 함수로 만들어진 인스턴스가 가질 메소드를 정의
Animal.prototype.eat = function() {
    console.log(`${this.name}가 먹는다`);
}

animal2.eat();
console.log(animal2);
console.log(animal2.__proto__);//객체 본인의 생성자 함수 혹은 만들어진 생성자 함수의 프로토타입에 접근