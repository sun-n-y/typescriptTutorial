//classes

class Book {
  private checkedOut: boolean = false;
  constructor(readonly title: string, public author: string) {}

  get info() {
    return `${this.author} by ${this.author}`;
  }
  private set checkOut(checkOut: boolean) {
    this.checkedOut = checkOut;
  }

  get checkOut() {
    return this.checkedOut;
  }

  public get someInfo() {
    this.checkOut = true;
    return `${this.author} by ${this.author}`;
  }
}

const deepWork = new Book('deep work', 'cal newport');

// console.log(deepWork.info);
// // deepWork.checkOut = true;
// console.log(deepWork.someInfo);
// console.log(deepWork);

interface IPerson {
  name: string;
  age: number;
  greet(): void;
}

class Person implements IPerson {
  constructor(public name: string, public age: number) {}
  greet(): void {
    console.log(`hello ${this.age}, ${this.name}`);
  }
}

const hipster = new Person('polo', 100);
hipster.greet();
console.log(hipster);
