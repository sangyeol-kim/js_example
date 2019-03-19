function say(greetings, honorifics) {
  console.log(greetings + " " + honorifics + this.name);
}

let tom = { name: "Tom" };
let becky = { name: "becky" };

say.apply(tom, ["Hello!", "Mr."]);
say.apply(becky, ["Hi", "Mr."]);

say.call(tom, "Hello!", "Mr.");
say.call(tom, "Hi", "Mr.");

// apply와 call의 동작 방식은 같다. 차이점은 함수에 인수를 넘기는 방법 뿐.
// apply와 call 메서드의 첫 번째 인수는 함수의 this 값이다.
