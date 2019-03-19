function say(greetings, honorifics) {
  console.log(greetings + " " + honorifics + this.name);
}

let tom = { name: "Tom" };

let sayToTom = say.bind(tom);
sayToTom("Hello", "Mr.");

// bind 메서드는 객체에 함수를 바인딩한다.
// 해당 코드에서는 tom 객체를 함수 say의 this로 설정한 새로운 함수를 만들어 반환.