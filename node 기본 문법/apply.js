function Animal(name) {
    this.name = name;
    this.run = function() {
        console.log(`${this.name} 동물이 달린다.`);
    }
}


function func1(city) {
    console.log(`${this.name}은 ${city}에 삽니다.`);
}

// <func>.apply(this를 사용할 객체, 전달할 인자)
const animal = new Animal("기린");

func1.apply(animal, ["서울"]);

// <func>.bind(this를 사용할 객체) -> 함수를 반환
const func2 = func1.bind(animal);
func2("울산");