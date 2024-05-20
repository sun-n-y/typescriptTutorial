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
