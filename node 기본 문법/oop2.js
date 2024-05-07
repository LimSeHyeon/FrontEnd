function Animal(name) {
    this.name = name;
    this.run = function() {
        console.log(`${this.name} 이 달린다.`);
    }
}

Animal.prototype.eat = function() {
    console.log(`${this.name}이 먹는다`);
}

const animal = new Animal("기린");
//animal.__proto__ = Animal.prototype;

//animal.<특정속성> 호출 시 자기자신의 this.속성(메소드)에 없는 속성이면,
//animal.__proto__에서 찾는다


//상속 구현 예시
function Rabbit(name, color) {
    Animal.apply(this, arguments);//arguments === [name, color]
    this.color = color;
}

Rabbit.prototype = Object.create(Animal.prototype);//복사하는게 아니라, Animal을 프로토타입으로 가지는 새로운 객체를 생성
Rabbit.prototype.constructor = Rabbit;
console.log(Animal.prototype);//{ eat: [Function (anonymous)] } 아래 코드도 동일
console.log(Rabbit.prototype.__proto__);

const rabbit = new Rabbit('토순이', 'brown');