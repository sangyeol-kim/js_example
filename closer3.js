// 클로저를 이용해 다양한 매개변수를 받는 함수

function makeMulti(x) {
  return function(y) {
    return x * y;
  };
}

let multi = makeMulti(2);
let multi2 = makeMulti(10);

console.log(multi(3));
console.log(multi2(3));
