// // type annotations

// let name: string = 'sunny';
// name = name.toLocaleUpperCase();
// console.log(name);

// let cost: number = 12;
// cost++;
// console.log(cost);

// let isHome: boolean = false;
// isHome = false;
// console.log(isHome);

// console.log(name);

// //union type

// let tax: number | string = 10;

// tax = 100;
// tax = 'fs';

// let requestStatus: 'pending' | 'success' | 'error' = 'pending';

// requestStatus = 'pending';

// //type any

// let notSure: any = 4;
// notSure = 'sdf';
// notSure = 3;
// notSure = false;

// //example

// const books = ['hello', 'hi', 'hole'];

// let foundBook: string | undefined;

// for (let book of books) {
//   if (book === 'hi') {
//     foundBook = book;
//     break;
//   }
// }

// foundBook = foundBook?.toUpperCase();
// console.log(foundBook);

// let orderStatus: 'processing' | 'shipped' | 'delivered' = 'delivered';

// orderStatus = 'shipped';
// orderStatus = 'delivered';

// let discount: number | string = 20;

// discount = '20%';

// //arrays

// let prices: number[] = [122, 23, 42];

// let fruits: string[] = ['a', 'sd'];

// let names1 = ['per', 'polo', 1];
// let array: (string | boolean)[] = ['apple', true];

// let temp: (number | string)[] = [12, 'red'];
// temp.push('hi');

// console.log(temp);

// let car: { brand: string; year: number } = { brand: 'toyota', year: 20020 };
// let car1: { brand: string; year: number } = { brand: 'yota', year: 220 };

// let book1 = { title: 'bo', cost: 1 };
// let book2 = { title: 'boo', cost: 2 };
// let book3 = { title: 'book' };

// let items: { readonly title: string; cost?: number }[] = [book1, book2, book3];

let bike: { brand: string; year: number } = { brand: 'yamaha', year: 2010 };
// bike.year = 'old';

let laptop: { brand: string; year: number } = { brand: 'apple', year: 2012 };
// let laptop2: { brand: string; year: number } = { brand: 'app' };

let product1 = { title: 'shirt', price: 20 };
let product2 = { title: 'pants' };

let products: { title: string; price?: number }[] = [product1, product2];
