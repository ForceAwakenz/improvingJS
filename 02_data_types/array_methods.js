'use strict';

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

array1.forEach(element => console.log(element));
console.warn('');
array1.forEach(console.log); 


// =========================
// Modifying the array during iteration
// =========================
let words = ['one', 'two', 'three', 'four']
words.forEach(function(word) {
  console.log(word)
  if (word === 'two') {
    words.shift() //'one' will delete from array
  }
}) // one // two // four

console.log(words);  //['two', 'three', 'four']

// =========================

// Note: There is no way to stop or break a forEach() loop other than by throwing an exception.

// Note: forEach expects a synchronous function.

// No operation for uninitialized values

// forEach(function callbackFn(element, index, array) { ... }, thisArg)


// ***********************************************************************************
// 🟢 Array.from ********************************************
// 🟢 Array.isArray ********************************************
// 🟢 Array.toString ********************************************
// ***********************************************************************************

// ***********************************************************************************
// 🟢 every: ƒ every() ******************************************** 
// 🟢 some: ƒ some() ******************************************** 
// 🟢 includes: ƒ includes() ********************************************
// 🟢 find: ƒ find() ********************************************
// 🟢 findIndex: ƒ findIndex() ********************************************
// 🟢 indexOf: ƒ indexOf() ********************************************
// 🟢 lastIndexOf: ƒ lastIndexOf() ********************************************
// ***********************************************************************************


// 🟢 concat: ƒ concat() ********************************************
// 🟢 copyWithin: ƒ copyWithin() ********************************************
// 🟢 fill: ƒ fill() ********************************************
// 🟢 flat: ƒ flat() ********************************************
// 🟢 flatMap: ƒ flatMap() ********************************************




// ***********************************************************************************
// 🟢 filter: ƒ filter() ********************************************
// 🟢 map: ƒ map() ********************************************
// 🟢 splice: ƒ splice() ********************************************
// 🟢 slice: ƒ slice() ********************************************
// ***********************************************************************************








// reduce: ƒ reduce()
// reduceRight: ƒ reduceRight()


// sort: ƒ sort()
// reverse: ƒ reverse()



// 🟢 toLocaleString: ƒ toLocaleString() ********************************************
var prices = ['￥7', 500, 8123, 12];
prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });
"￥7,￥500,￥8,123,￥12";


//🟢 Array.of & Array
// The difference between Array.of() and the Array constructor is in the handling of integer arguments: 
// Array.of(7) creates an array with a single element, 7, 
// whereas Array(7) creates an empty array with a length property of 7 
// (Note: this implies an array of 7 empty slots, not slots with actual undefined values).


// ***********************************************************************************
// 🟢 values: ƒ values() ********************************************
// 🟢 keys: ƒ keys() ********************************************
// 🟢 entries: ƒ entries() ********************************************

// ***********************************************************************************
// 🟢 pop: ƒ pop() ********************************************
// 🟢 push: ƒ push() ********************************************
// 🟢 unshift: ƒ unshift() ********************************************
// 🟢 shift: ƒ shift() ********************************************
// ***********************************************************************************

// 🟢 toString: ƒ toString() ********************************************
// 🟢 join: ƒ join() ********************************************