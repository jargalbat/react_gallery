class Human {
    constructor() {
        this.gender = 'male';
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super(); // Execute parent constructor
        this.name = 'Jagaa';
        this.gender = 'm';
    }

    printName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printName();
console.log(person.name);
person.printGender();



class Human {
    gender = 'male';

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = 'Jagaa';
    gender = 'M'

    printName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printName();
console.log(person.name);
person.printGender();

