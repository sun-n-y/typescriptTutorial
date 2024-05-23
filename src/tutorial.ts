//type guard challenge

//type of
type ValueType = string | number | boolean;

let value: ValueType;
const random = Math.random();
value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true;

function checkValue(param: ValueType): void {
  if (typeof param == 'string') {
    console.log(param.toLowerCase());
  } else if (typeof param == 'number') {
    console.log(param.toFixed(2));
  } else {
    console.log(`Boolean: ${param}`);
  }
}

checkValue(value);

//equality narrowing
type Dog = { type: 'dog'; name: string; bark: () => void };
type Cat = { type: 'cat'; name: string; meow: () => void };
type Animal = Dog | Cat;

const rex: Animal = {
  type: 'dog',
  name: 'rex',
  bark: () => {
    console.log('bark bark');
  },
};

function makeSound(animal: Animal): void {
  if (animal.type === 'dog') {
    animal.bark();
  } else {
    animal.meow();
  }
}

makeSound(rex);

//truthy / falsy

function printLength(str: String | null | undefined): void {
  if (str) {
    console.log(str.length);
    return;
  } else {
    console.log('no string provided');
    return;
  }
}

printLength('');

//instance of

try {
  throw new Error('this is an error');
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}

function checkInput(input: Date | string): string {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  }
  return input;
}

//predicate
type Student = {
  name: string;
  study: () => void;
};

type User = {
  name: string;
  login: () => void;
};

type Person = Student | User;

const randomPerson = (): Person => {
  return Math.random() > 0.5
    ? { name: 'john', study: () => console.log('Studying') }
    : { name: 'mary', login: () => console.log('Logging in') };
};

const person = randomPerson();

function isStudent(person: Person): person is Student {
  // return 'study' in person
  return (person as Student).study !== undefined;
}

if (isStudent(person)) {
  person.study();
} else {
  person.login();
}
