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

let orderStatus: 'processing' | 'shipped' | 'delivered' = 'delivered';

orderStatus = 'shipped';
orderStatus = 'delivered';

let discount: number | string = 20;

discount = '20%';
