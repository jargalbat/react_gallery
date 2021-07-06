// Spread operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const person = {
  name: 'Jagaa'
};

const newPerson = {
  ...person,
  age: 28
}

console.log(newPerson);

// Rest operator
const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3));
