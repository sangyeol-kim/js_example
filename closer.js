function makeCounter() {
  let count = 0;

  return function() {
    return count++; // 클로저의 내부 상태를 마꾸는 메서드 역할
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

console.log(counter2()); // 0
console.log(counter2()); // 1

// 각 클로저는 서로 다른 내부 상태를 저장한다.
