function* fibonacciGenerator() {
  let cur = 0;
  let next = 1;
  while (true) {
    yield cur;
    [cur, next] = [next, cur + next];
  }
}

let gen = fibonacciGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

function* primeNumberGenerator() {
  let number = 1;
  while (true) {
    if (isPrime(number)) {
      yield number;
    }
    number++;
  }
}

const primeGen = primeNumberGenerator();
console.log(primeGen.next().value);
console.log(primeGen.next().value);
console.log(primeGen.next().value);
console.log(primeGen.next().value);
console.log(primeGen.next().value);
console.log(primeGen.next().value);

// 2
// 3
// 5
// 7
// 11
// 13
