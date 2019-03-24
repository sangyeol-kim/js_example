let person = {
  _name: "Tom",
  get name() {
    return this._name;
  },
  set name(value) {
    let str = value.charAt(0).toUpperCase() + value.substring(1);
    this._name = str;
  }
};

console.log(person.name);
person.name = "huck";
console.log(person.name);
