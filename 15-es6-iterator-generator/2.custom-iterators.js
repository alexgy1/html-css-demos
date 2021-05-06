class Polygon {
  constructor(...sides) {
    this.sides = sides;
  }
  [Symbol.iterator]() {
    let currentIndex = 0;

    return {
      next: () => {
        if (currentIndex < this.sides.length) {
          return { value: this.sides[currentIndex++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}

const poly = new Polygon(1, 2, 3, 4, 5);

//poly is not iterable
// for (let side of poly) {
//   console.log(side);
// }

//after impl signature
for (let side of poly) {
  console.log(side);
}

// 1
// 2
// 3
// 4
// 5

//make a function return a iterator

function idMaker() {
  let id = 0;
  return {
    next: () => {
      return { value: id++, done: false };
    },
  };
}
const it = idMaker();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
