let objA = {
  name: "Tom",
  sayHello: function() {
    console.log(`Hello, ${this.name}`);
  }
};

// arrow function은 사용할 수 없다.
// arrow function은 this를 바인딩하지 않기 때문. 그러므로 메서드 함수에는 적합하지 않음.

let objB = {
  name: "Huck"
};

objB.__proto__ = objA;
objB.sayHello();

let objC = {};

objC.__proto__ = objB;
objC.sayHello();

// 객체의 __proto__ 프로퍼티는 해당 객체에게 상속을 해 준 부모 객체를 가리킨다.

// objC -> objB -> objA 이것이 프로토타입 체인