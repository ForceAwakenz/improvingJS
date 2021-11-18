'use strict';

function ObjectCreator(property) {
    this.property = property;
}

const one = new ObjectCreator(1);

console.log('one ====>  ', one); // ObjectCreator {property: 1}
console.log('one.constructor ====>  ', one.constructor); // ƒ ObjectCreator(property) {this.property = property;}
console.log('one.prototype ====>  ', one.prototype); // undefined
console.log('but one.constructor.prototype ====>  ', one.constructor.prototype); // {constructor: ƒ}
console.log('%c the same as 🠓🠓🠓', "color: orangered; background: aqua; font-size: 14px")
console.log('one.__proto__ ====>  ', one.__proto__); // {constructor: ƒ}
console.log('%c & 🠓🠓🠓', "color: orangered; background: aqua; font-size: 14px")
console.log('Object.getPrototypeOf(one) ====>  ', Object.getPrototypeOf(one));
// console.log(new Function('console.log(this)').call(one.constructor)); // total trash
console.log(
    `%c ⇈ because prototype is a property of the ObjectCreator function,
    not the object, this function is linked to`, 
    "color: orangered; background: #ff7; font-size: 14px");

console.log('ObjectCreator.prototype.isPrototypeOf(one) ====>  ', ObjectCreator.prototype.isPrototypeOf(one))

console.warn('====================================================');

console.log("one.hasOwnProperty('property') ====>  ", one.hasOwnProperty('property'));





// *****************************
// Make function from the object
// *****************************

// let objectToFunction = {};

// objectToFunction.constructor = Function.prototype.constructor;
// // objectToFunction.constructor = "console.log('hi')";

// objectToFunction = objectToFunction.constructor;

// console.log(objectToFunction);


let objFunc = {};

objFunc.prototype = {
    constructor: function () { return new Function('console.log("I have created a function from the object")')}
};

objFunc = objFunc.prototype.constructor;

let functionFromObject = new objFunc();

functionFromObject();


// ****************************

let objFunc2 = {};

objFunc2.prototype = {
    constructor: function (code) { return new Function(code)}
};

objFunc2 = objFunc2.prototype.constructor;

let function2FromObject = new objFunc2('console.log("I did it!")');

function2FromObject();


// *****************************
// Some more trash
// *****************************


// let experimentThis = { hi: 'there'};

// experimentThis.this = 'yo';
// experimentThis.returnThis = function() {return this;}

// console.log(experimentThis.returnThis())



