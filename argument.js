function concat(seperator) {
  var s = "";
  for (let i = 1; i < arguments.length; i++) {
    s += arguments[i];
    if (i < arguments.length - 1) s += seperator;
  }

  //   let params = [].slice.call(arguments);
  //   console.log(params);
  //   argument를 배열로 변환

  return s;
}

console.log(concat("/", "apple", "banana"));
