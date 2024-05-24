//generics

let array1: Array<string> = ['apple', 'banana', 'mango'];
console.log(array1.length);

//function / interface
//function that takes any type and returns the same type

// function createString(p1:string):string{
//   return p1
// }

// function createNumber(p1:number):number{
//   return p1
// }

function genericFunction<T>(p1: T): T {
  return p1;
}

const someStringValue = genericFunction('hello');
const someNumberValue = genericFunction(4);

interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<string> = {
  value: 'sdf',
  getValue() {
    return this.value;
  },
};

// challenge

function createArray<T>(p1: number, p2: T): Array<T> {
  return Array(p1).fill(p2);
}
console.log(createArray(4, 'one'));

function pair<T, U>(p1: T, p2: U): [T, U] {
  return [p1, p2];
}

let result = pair<number, string>(123, 'sdn');
let result1 = pair(123, 332);

function processValue<T extends string | number>(value: T): T {
  console.log(value);
  return value;
}

processValue('hello');
processValue(3);

//default type

interface StoreData<T = any> {
  data: T[];
}

const storeNumbers: StoreData<number> = {
  data: [1, 2, 3, 4],
};

const randomStuff: StoreData = {
  data: ['polo', 2],
};
