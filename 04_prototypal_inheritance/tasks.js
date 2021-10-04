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
    constructor(name) {
     this.name = name;
    }
    fun1 () {};
}
   
class B extends A {
    static z = 323;
    constructor(name, age) {
      super(name);
      this.age = age;
    }
    fun2 () {};
}

function C(name) {
    const x = 3;
    this.name = name;
}
C.prototype.fun1 = function () {};

function D(name, age) {
    C(name);
    this.age = age;
    let z = 323;
}

D.prototype.fun2 = function () {};

console.dir(C);
console.dir(D);






