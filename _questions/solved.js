'use strict';
console.warn('================== solved ================ ');
console.warn('================== this and inheritance ================ ');
// ====================  ==========================


// class NameGenerator {
//     constructor () {
//         const btn = document.querySelector('button');
//         btn.addEventListener('click', this.addName); 
//         // why we need this here? why doesn't it search in NameGenerator object?
//         // because under the hood we are in an object, that has method addName
//     }

//     addName() {
//         const name = new NameField('Kiril');
//     }
// }

// function NameGenerator2() {
//         this.revealThis(); // NameGenerator2 {}
//         this.constructor.revealThisStatic(); // ƒ NameGenerator2() {this.revealThis(); ... }
// }

// NameGenerator2.prototype.revealThis = function () {
//     console.log('revealThis -> this', this);
// }

// NameGenerator2.revealThisStatic = function () {
//     console.log('revealThisStatic -> this ', this);
// }

// const ng2 = new NameGenerator2();

// NameGenerator2.revealThisStatic(); // ƒ NameGenerator2() {this.revealThis(); ... }


// ======================== this inside of multiple functions + arrow ========================

let group = {
    title: "Our Group",
  
    showList() {
        empty(() => console.log('showList -> empty -> arrow this', this)); // group {...}
        // ^^^^^^^^^^^^^ this of an arrow function == this outside of an object/function that were invoked it
    }

};

function empty(f) {
    // console.log('empty -> this', this); // undefined
    f();
}
  
group.showList();

// ==================== why sometimes function look up through object  in a scope chain ==========================

const variable = 1;

const anotherObj = {
    lookup() {
        console.log('anotherObj -> lookup() -> ', variable); // 1
        // ^^^^^^^^^^^^^^^^^^^^ objects does lookup variable through scope chain
        console.log(this.variabe); // undefined
    }
};

anotherObj.lookup();


const obj = {
    objFunc() {
        const variable = 3;
        const insideObj = {
            insideFunc() {
                console.log('insideFunc -> variable ', variable); // 3
            }
        }
        insideObj.insideFunc();
        return {
            variableDisplay() {
                console.log(variable); // 3
                // why does it look up through scope chain??
                // it looks through the scope chain in the same way function would look
                // since function is object as well
                // console.log(this.variable); // undefined
            }
        }
    }
}

const nextObj = obj.objFunc();
// console.log('nextObj is ===> ', nextObj);
nextObj.variableDisplay(); 
// ^^^^^^^^^returned object methods still has acces to the Variable Environment of object/function object it was created on


// ======================== this as argument ================================

function Foo(age) {
    this.age = age;
}

Foo.prototype.changeAge = function (change) {
    this.age = change;
}

const bar = new Foo(10);

bar.changeAge(bar.age + 5); // why doesn't it work?? why does it point on window object?
// ^^^^^^^^^^^^^ this in parenthesis points on this outside the function/method in which it was mentioned
// but this inside the function body will point on this of object, which invoked the function

console.log(bar);


// =====================================================================

//===============================

class NameGenerator {
    constructor () {
        console.log('NameGenerator this ->', this); // NumberGenerator {} // with addName and constructor inside
        // this.addName();
        // why we need this here? why doesn't it search in NameGenerator object?
        // because under the hood we are in an object, that has method addName
    }

    addName() {
        const name = new NameField('Kiril');
    }
}

const ng = new NameGenerator();

function NameGenerator2() {
        this.revealThis(); // NameGenerator2 {}
        this.constructor.revealThisStatic(); // ƒ NameGenerator2() {this.revealThis(); ... }
}

NameGenerator2.prototype.revealThis = function () {
    console.log('revealThis -> this', this);
}

NameGenerator2.revealThisStatic = function () {
    console.log('revealThisStatic -> this ', this); // NameGenerator2 === NameGenerator2.prototype.constructor
    // so it reveals constructor object function
}

const ng2 = new NameGenerator2();

NameGenerator2.revealThisStatic(); // ƒ NameGenerator2() {this.revealThis(); ... }

console.warn('================================== ');