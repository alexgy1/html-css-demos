const text = "hello";

const it = text[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
// { value: 'h', done: false }
// { value: 'e', done: false }
// { value: 'l', done: false }
// { value: 'l', done: false }
// { value: 'o', done: false }
// { value: undefined, done: true }

const arrs = ["html", "css", "js"];
const it2 = arrs[Symbol.iterator]();

let result = it2.next();
while (!result.done) {
  console.log(result.value);
  result = it2.next();
}
//html
// css
// js
