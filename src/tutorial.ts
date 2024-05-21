interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  printAuthor(): void;
  printTitle(message: string): string;
}

const deepWork: Book = {
  isbn: 123,
  title: 'deep work',
  author: 'cal newport',
  genre: 'self-help',
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
};

deepWork.printAuthor();
const result = deepWork.printTitle('hello');
console.log(result);

interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam(number: number): number;
}

const object1: Computer = {
  id: 1,
  brand: 'apple',
  ram: 16,
  upgradeRam(number) {
    this.ram += number;
    return this.ram;
  },
};

console.log(object1);
console.log(object1.upgradeRam(16));
console.log(object1);
