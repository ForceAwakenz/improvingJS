'use strict';

console.warn('=================== tasks =======================')

// ===================== Task 1 ===========================

let a = { b: 1 };
let c = Object.create(a);

// console.log(c.b); // 1

delete c.b;
// console.log(c.b); // 1

delete a.b;
// console.log(c.b); // undefined

a.z = 2;
// console.log(c.z); // 2

c.z = 3;
// console.log(a.z); // 2

// ===================== Task 2 ===========================

class A {
    static x = 3;
    // yo = 'might be in prototype'; // no, it's in every instance
    constructor(name) {
     this.name = name;
    }
    fun1 () {};
}

// console.log(new A('hi').yo);
   
class B extends A {
    static z = 323;
    constructor(name, age) {
      super(name);
      this.age = age;
    }
    fun2 () {};
}

function C(name) {
    this.name = name;
    // this.__proto__.constructor.x = 3;
    // ^^ the same as C.x = 3 outside the constructor,
    // but doesn't work until we instantiate new C instance
}

// C.x = 3

C.prototype.fun1 = function () {};

const newC = new C('c');
console.log(C.x)

function D(name, age) {
    C.call(this, name);
    this.age = age;
}

D.prototype = Object.create(C.prototype);

D.z = 323;

D.prototype.fun2 = function () {};

D.prototype.constructor = D;








