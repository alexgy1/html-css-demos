function* aa() {
  yield ["ame", "london", "beijing"];
  yield "aa innter";

  return "aaaaReturn";
}

function* citiesGenerator() {
  yield "pairs";
  //   yield ["ame", "london", "beijing"];
  //   yield* aa();
  const value = yield* aa();
  yield value;
  yield "Berlin";
}

const it = citiesGenerator();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next());
// pairs
// [ 'ame', 'london', 'beijing' ]
// Berlin
// { value: undefined, done: true }

function* flatten(array, depth = 1) {
  for (let item of array) {
    if (Array.isArray(item) && depth > 0) {
      yield* flatten(item, depth - 1);
    } else {
      yield item;
    }
  }
}

const arr = [1, [2, [3, [4, [5]]]]];

// const flattened = [...flatten(arr, Infinity)];
const flattened = [...flatten(arr, 2)];
console.log(flattened);
