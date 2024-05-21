//functions

function sayHi(name: string) {
  console.log(`hi, ${name.toUpperCase()}`);
}

//explicity set return type to number
function calculateDiscount(price: number): number {
  return price * 0.9;
}

const finalPrice = calculateDiscount(200);

//challenge

const names: string[] = ['tim', 'kim'];

function checkName(name: string): boolean {
  if (names.includes(name)) {
    console.log(name);
    return true;
  } else {
    return false;
  }
}

checkName('tim');
console.log(checkName('ti'));

function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

let priceAfterDis = calculatePrice(100, 20);

console.log(priceAfterDis);

function calculateScore(initialScore: number, penalty: number = 0): number {
  return initialScore - penalty;
}

let score1 = calculateScore(100, 20);
let score2 = calculateScore(100);

function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  let total = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);

  return `${message}${total}`;
}

let result = sum('The total is : ', 1, 2, 3, 4, 5);

console.log(result);

function logMessage(message: string): void {
  console.log(message);
}
logMessage('hello');

function processInput(value: string | number) {
  if (typeof value === 'number') {
    console.log(value * 2);
  } else {
    value = value.toUpperCase();
    console.log(value);
  }
}

processInput(2);
processInput('hi there');

function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });

console.log(first);
console.log(second);

//alt

function createStudent(student: { id: number; name: string }): void {
  console.log(`heroihf${student.name}`);
}

createStudent({ id: 1, name: 'tim' });
createStudent({ id: 1, name: 'uihiub' });

///challenge II

function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input == 'number') {
    return input * input;
  } else if (config.reverse === true) {
    return input.toUpperCase().split('').reverse().join('');
  } else {
    return input.toUpperCase();
  }
}

console.log(processData(10));
console.log(processData('sunny'));
console.log(processData('sunny', { reverse: true }));
