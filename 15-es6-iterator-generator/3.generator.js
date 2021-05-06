function* generator() {
  yield 1;
  yield 2;
  //提前 return 会return 同时改变done 为true
  //   return 15;
  yield 3;
}
const gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next());
// 1
// 2
// 3
// undefined
//{ value: undefined, done: true }

//class iterator to generator

class Polygon {
  constructor(...sides) {
    this.sides = sides;
  }
  *[Symbol.iterator]() {
    for (let side of this.sides) {
      yield side;
    }
  }
}

const poly = new Polygon(1, 2, 3, 4, 5);
for (let side of poly) {
  console.log(side);
}

//1
// 2
// 3
// 4
// 5

console.log("id maker ");
function* idMaker() {
  let id = 0;
  while (true) {
    yield id++;
  }
}
const it = idMaker();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

// id maker
// 0
// 1
// 2
// 3
// 4
