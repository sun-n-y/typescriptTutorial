// interface Book {
//   readonly isbn: number;
//   title: string;
//   author: string;
//   genre?: string;
//   printAuthor(): void;
//   printTitle(message: string): string;
// }

// const deepWork: Book = {
//   isbn: 123,
//   title: 'deep work',
//   author: 'cal newport',
//   genre: 'self-help',
//   printAuthor() {
//     console.log(this.author);
//   },
//   printTitle(message) {
//     return `${this.title} ${message}`;
//   },
// };

// deepWork.printAuthor();
// const result = deepWork.printTitle('hello');
// console.log(result);

// interface Computer {
//   readonly id: number;
//   brand: string;
//   ram: number;
//   storage?: number;
//   upgradeRam(number: number): number;
// }

// const object1: Computer = {
//   id: 1,
//   brand: 'apple',
//   ram: 16,
//   upgradeRam(number) {
//     this.ram += number;
//     return this.ram;
//   },
// };

// console.log(object1);
// console.log(object1.upgradeRam(16));
// console.log(object1);

// //interface merging and extend

// interface Person {
//   name: string;
//   getDetails(): string;
// }

// interface DogOwner {
//   dogName: string;
//   getDogDetails(): string;
// }

// interface Person {
//   age: number;
// }

// const person: Person = {
//   name: 'john',
//   age: 3,
//   getDetails() {
//     return `Name: ${this.name} ${this.age}`;
//   },
// };

// interface Employee extends Person {
//   employeeId: number;
// }

// const employee: Employee = {
//   name: 'tim',
//   age: 90,
//   employeeId: 123,
//   getDetails() {
//     return `${this.name} ${this.age} ${this.employeeId}`;
//   },
// };

// interface Manager extends Person, DogOwner {
//   managePeople(): void;
// }

// const manager: Manager = {
//   name: 'jim',
//   age: 35,
//   dogName: 'rex',

//   getDetails() {
//     return `${this.name} ${this.age}`;
//   },

//   getDogDetails() {
//     return `${this.dogName}`;
//   },
//   managePeople() {
//     console.log(`managing people`);
//   },
// };

// console.log(manager);

interface Person {
  name: string;
}

interface DogOwner extends Person {
  dogName: string;
}

interface Manager extends Person {
  managePeople(): void;
  delegateTasks(): void;
}

function getEmployee(): Person | Manager | DogOwner {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return { name: 'polo' };
  } else if (randomNumber < 0.66) {
    return { name: 'tim', dogName: 'rex' };
  } else {
    return {
      name: 'boss',
      managePeople() {
        console.log('managing');
      },
      delegateTasks() {
        console.log('delegating');
      },
    };
  }
}

const employee: Person | DogOwner | Manager = getEmployee();

function isManager(object: Person | DogOwner | Manager): object is Manager {
  return 'managePeople' in object;
}

if (isManager(employee)) {
  employee.delegateTasks();
}
