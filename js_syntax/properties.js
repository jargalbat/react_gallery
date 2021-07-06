// var, let, const
var myName = 'Jagaa';
console.log(myName);
myName = 'new Jagaa';
console.log(myName);

const myConst = 'const Jagaa';
console.log(myConst);

let myLet = 'let Jagaa';
myLet = 'new let Jagaa';
console.log(myLet);

// func
function printMyName(name) {
  console.log(name);
}

printMyName('My name is Jagaa');

// arrow func
const printMyName2 = (name) => {
  console.log(name);
}

printMyName2('My name is John Wick');

const printMyName3 = (name, age) => {
  console.log(name);
  console.log(age);
}

printMyName3('Eddie', 31);

const multiply = (number) => {
  return number * 2;
}

console.log(multiply(5));

const multiply2 = (number) => number * 3;

console.log(multiply2(3));