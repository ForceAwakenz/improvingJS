'use strict';

/*
1. Play around with bubbling and capturing
    a. stop capturing 
    b. stop bubbling
    c. separate properties by stopping propagation for one but not another
2. Try Event Delegation
    a. figure out where we pass this and where we pass event ✔
3. Implement smooth scrolling
*/

const h1 = document.querySelector('h1');


h1.addEventListener('click', function (e) {
    console.log(e); // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
    console.log(this); // <h1>DOM events</h1>
    // ^ window object, if use arrow function
}, {once: true, capture: true}); // options

// How 'this' works in higher order functions

const obj = {
    a: 10,
    wrapper : function (func) {
        console.log(this);// {a: 10, wrapper: ƒ}
        func();
        
    },
}

const thisIndicator = () => {
    console.log(this); // undefined
    // ========================= Why it works different then eventListener ?????????? ========================
}

obj.wrapper(thisIndicator);

// ============================================

console.warn('===============================================');

const outer = document.getElementById('outerdiv');
const middle = document.getElementById('middlediv');
const inner1 = document.getElementById('inner1');
const inner2 = document.getElementById('inner2');
const inner3 = document.getElementById('inner3');


// outer.addEventListener('click', () => console.log('outer capturing'), true);
// outer.addEventListener('click', () => console.log('outer bubbling'));

middle.addEventListener('click', e => {e.stopPropagation()}, {capture: true});
inner1.addEventListener('click', () => console.log('hi'))

