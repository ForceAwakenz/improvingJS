'use strict';

console.warn('=================== Array methods ==========================');

const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// ********************************************************************

// Array methods: every(), some(), find(), and findIndex() 
// test the array elements with a predicate returning a truthy value to determine if further iteration is required.


// 🟢 forEach: ƒ forEach() ********************************************

// passing the arguments to callback 
const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));
// array1.forEach(console.log); 


// =========================
// Modifying the array during iteration
// =========================

let words = ['one', 'two', 'three', 'four']
words.forEach(function(word) {
//   console.log(word)
  if (word === 'two') {
    words.shift() //'one' will delete from array
  }
}) // one // two // four

// console.log(words);  //['two', 'three', 'four']

// =========================

// Note: There is no way to stop or break a forEach() loop other than by throwing an exception.

// Note: forEach expects a synchronous function.

// No operation for uninitialized values

// forEach(function callbackFn(element, index, array) { ... }, thisArg)


// ***********************************************************************************
// 🟢 Array.from ********************************************

const string1 = 'hello';

const indexedArr = Array.from(string1, (char, indx) => char + ` (${indx})`);
console.log('[Array.from] string hello, adding index to each char: ', indexedArr);

// 🟢 Array.of ********************************************
// The difference between Array.of() and the Array constructor is in the handling of integer arguments: 
// Array.of(7) creates an array with a single element, 7, 
// whereas Array(7) creates an empty array with a length property of 7 
// (Note: this implies an array of 7 empty slots, not slots with actual undefined values).

Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3);    // [1, 2, 3]


// 🟢 Array.isArray ********************************************

const arr4 = [1, 2];
const obj4 = {'0': 1, '1': 2, length: 2};

console.log('array arr4 [isArray]: ', Array.isArray(arr4), 'object obj4 [isArray]: ',  Array.isArray(obj4)); // true false

// 🟢 toString: ƒ toString()  ********************************************

const arr5 = [1,,['z', 'q'], 2];
console.log('[toString]: ' , arr5.toString()); // 1,,z,q,2


// ***********************************************************************************

// ***********************************************************************************
const arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('array to work with: ', arr10);

// 🟢 every: ƒ every() ******************************************** 

console.log('[every] item > 0 ? -> ' , arr10.every(i => i > 0)); // true
console.log('[every] item > 2 ? -> ' , arr10.every(i => i > 2)); // false

// 🟢 some: ƒ some() ******************************************** 

console.log('[some] items > 5 ? -> ', arr10.some(i => i > 5)); // true
console.log('[some] items > 100 ? -> ', arr10.some(i => i > 100)); // false

// 🟢 find: ƒ find() ********************************************

console.log('[find] element that is bigger then 2 and even: ', arr10.find(i => i > 2 && i % 2 === 0)); // 4
console.log('[find] element that is bigger then 10: ', arr10.find(i => i > 10)); // undefined

// 🟢 findIndex: ƒ findIndex() ********************************************

console.log('[findIndex]: what is the index of element that is bigger, then 3 ? -> index:', 
    arr10.findIndex(i => i > 3), 'the value of index is: ', arr10[arr10.findIndex(i => i > 3)]); // 3, 4

console.log('[findIndex] of element that is bigger than 50, result -> ', arr10.findIndex(i => i > 50)); // -1

// 🟢 includes: ƒ includes() ********************************************

console.log('array [includes] 3 ? -> ', arr10.includes(3)); // true
console.log('array [includes] 17 ? -> ', arr10.includes(17)); // true
console.log('array [includes] 1, if count from 3d index ? -> ', arr10.includes(1, 3)); // false

// ***********************************************************************

const arr22 = [1, 2, 3, 1, 2];
console.log('array to work with: ', arr22);

// 🟢 indexOf: ƒ indexOf() ********************************************

console.log('[indexOf] 2 is ->', arr22.indexOf(2)); // 1
console.log('[indexOf] 2 if to count from 3d index is ->', arr22.indexOf(2, 3)); // 4

// 🟢 lastIndexOf: ƒ lastIndexOf() ********************************************

console.log('[lastIndexOf] 2 is ->', arr22.lastIndexOf(2)); // 4
console.log('[lastIndexOf] 2 if to count from 3d index is ->', arr22.lastIndexOf(2, 3)); // 1

// ***********************************************************************************


// 🟢 concat: ƒ concat() ********************************************

const arr18 = [1, 2];
const arr19 = [3, [4, 5]];

console.log('[concat] two arrays, [1, 2] and [3, 4] -> ', [].concat(arr18, arr19)); // [1, 2, 3, [4, 5]]

// 🟢 copyWithin: ƒ copyWithin() ********************************************

// const arr42 = [5, 10, 15, 20, 25, 30];

// 🟢 fill: ƒ fill() ********************************************

const arr25 = [1, 2, 3, 4];

console.log('[fill] array [1, 2, 3, 4] with 0 from position 2 until position 5 -> ', arr25.fill(0, 2, 5)); // [1, 2, 0, 0]

// 🟢 flat: ƒ flat() ********************************************

const arr31 = [0, 1, 2, [3, 4]];

console.log('[flat] [0, 1, 2, [3, 4]] -> ', arr31.flat()); // [0, 1, 2, 3, 4]

const arr32 = [0, 1, 2, [[[3, 4]]]];

console.log('[flat] [0, 1, 2, [[[3, 4]]]] -> ', arr32.flat(2)); // [0, 1, 2, [3, 4]];


// 🟢 flatMap: ƒ flatMap() ********************************************
// ***********************************************************************************
// 🟢 filter: ƒ filter() ********************************************
// 🟢 map: ƒ map() ********************************************
// 🟢 splice: ƒ splice() ********************************************
// 🟢 slice: ƒ slice() ********************************************

console.log('[slice] from arr10 from 3d index to 5th index', arr10.slice(3, 5)); // [4, 5]
console.log('[slice] from arr10 from unexisting 11th to 12th index', arr10.slice(11, 12)); // []

// ***********************************************************************************

// 🟢 reduce: ƒ reduce()
// 🟢 reduceRight: ƒ reduceRight()
// 🟢 sort: ƒ sort()
// 🟢 reverse: ƒ reverse()
// 🟢 toLocaleString: ƒ toLocaleString() ********************************************

var prices = ['￥7', 500, 8123, 12];
prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });
"￥7,￥500,￥8,123,￥12";

// ***********************************************************************************

const arr10ValIter = arr10.values();
const arr10KeyIter = arr10.keys();
const arr10EntryIter = arr10.entries();

// 🟢 values: ƒ values() ********************************************

console.log('arr10 entries next() -> ', arr10EntryIter.next()); // {value: Array(2), done: false}

// 🟢 keys: ƒ keys() ********************************************

console.log('arr10 values next() -> ', arr10ValIter.next() ); // {value: 1, done: false}

// 🟢 entries: ƒ entries() ********************************************

console.log('arr10 keys next() -> ', arr10KeyIter.next()); // {value: 0, done: false}


// ***********************************************************************************
// 🟢 pop: ƒ pop() ********************************************
// 🟢 push: ƒ push() ********************************************
// 🟢 unshift: ƒ unshift() ********************************************
// 🟢 shift: ƒ shift() ********************************************
// ***********************************************************************************

// 🟢 join: ƒ join() ********************************************

console.log('[join] array [1, 2, 3] into string -> ', [1, 2, 3].join(''));
