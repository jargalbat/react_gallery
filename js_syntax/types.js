// Primitive types
const num1 = 1;
const num2 = num1; // copy the value
console.log(num2);

// Reference types
const person1 = {
  name: 'Jagaa'
}

const person2 = person1; // copy pointer
console.log(person2);

person1.name = 'Jagaaa'
console.log(person2);

const person3 = {
  ...person1 // copy the properties
};

person1.name = 'JagaaA';
console.log(person3);
