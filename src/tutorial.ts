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
