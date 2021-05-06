function* counterGenerator(start = 0, end = Infinity) {
  for (let i = start; i < end; i++) {
    yield i;
  }
}

const gen = counterGenerator(1, 4);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

//generators as observers
function* observerGenerator() {
  console.log("generator created ");

  while (true) {
    const value = yield;
    console.log(`value passed ${value}`);
  }
}

const it = observerGenerator();
it.next(1);
it.next(2);
it.next(33);
it.next(44);
// generator created
// value passed 2
// value passed 33
// value passed 44

function* solveRiddle() {
  const question = "what is your problem ? ";
  // yield question;

  //接受next里面传递参数
  const answer = yield question;

  if (answer == 42) {
    yield true;
  } else {
    yield false;
  }
}
const it1 = solveRiddle();

console.log(it1.next().value); //  yield question; what is your problem ?

const result = it1.next(42).value;
console.log(result);

const result1 = it1.next(400).value;
console.log(result1);
