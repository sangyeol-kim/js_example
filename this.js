let tom = {
  name: "Tom",
  sayHello: function() {
    console.log("Hello! " + this.name);
  }
};

tom.sayHello(); // Hello! Tom

let huck = { name: "Huck" };
huck.sayHello = tom.sayHello;

huck.sayHello(); // Hello! Huck

// 함수는 객체에 묶여있지 않기 때문에 함수는 huck.sayHello라는 이름으로 참조해서 실행하고, huck.sayHello가 속한 객체는 huck이다.
// 즉, 실행 컨텍스트의 디스 바인딩 컴포넌트가 가리키는 객체가 tom에서 huck으로 바뀜.
// 따라서 this 값이 huck 객체를 가리키고 this.name 값이 "Huck"이 된 것.
