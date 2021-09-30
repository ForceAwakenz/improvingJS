'use strict';
// to read some day: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

document.querySelector('h1').addEventListener('click', function() {
    console.log(this);
})


// ====================================================================

let person = {
    name: 'John Doe',
    getName: function() {
        console.log(this);
    }
};

person.getName();

// setTimeout(person.getName, 1000); // Window

// ====================================================================