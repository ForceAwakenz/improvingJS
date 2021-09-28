'use strict'

const arr = [1, 10, 100, 1000];

const iterator1 = arr[Symbol.iterator]();
const iterator2 = arr[Symbol.iterator]();

// console.log('iterator1.next: ', iterator1.next().value);
// console.log('iterator2.next: ', iterator2.next());
// console.log('iterator1.next: ', iterator1.next().value);
// console.log('iterator1.next: ', iterator1.next().value);
// console.log('iterator1.next: ', iterator1.next().value);
// console.log('iterator1.next: ', iterator1.next().value);
// console.log('iterator1.next: ', iterator1.next());
// console.log('iterator2.next: ', iterator2.next().value);

const a = {
    b: 1,
    c: 2,
    [Symbol.iterator]: function() {
        let counter = 0;
        return {
            next: () => {
                counter++;
                if (counter === 1) {
                    return {value: this.b, done: false};
                }
                if (counter === 2) {
                    return {value: this.c, done: false};
                }
                return {value: undefined, done: true};
            }
        }
    }
}

// const z = a[Symbol.iterator]();

// console.log(z.next());
// console.log(z.next());
// console.log(z.next());

// ***************************************************
console.log({...a});
console.log(...a); // Without Symbol.iterator in object will be mistake
// console.log(Array.from(a));
// ***************************************************


// const obj1 = {
//     a: 1,
//     b: 2
// };

// const obj2 = {
//     a: 1,
//     b: 20
// };

// const obj12 = {
//     ...obj1,
//     ...obj2
// };

// console.table(obj12);

// ***************************************************

