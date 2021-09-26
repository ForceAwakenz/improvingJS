'use strict';

/*
1. Play around with bubbling and capturing
    a. stop capturing
    b. stop bubbling
    c. separate properties by stopping propagation for one but not another
2. Try Event Delegation
    a. figure out where we pass this and where we pass event
3. Implement smooth scrolling
*/

const h1 = document.querySelector('h1');



h1.addEventListener('click', function (e) {
    console.log(e); // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
    console.log(this); // <h1>DOM events</h1>
    // ^ window object, if use arrow function
});
