'use strict';

setTimeout(() => console.log('1'), 1000); // go to Web API for a 1 second
console.log('2'); // run immediately
const a = new Promise((resolve, reject) => {
 console.log('4'); // will run syncronously since function is executed immediatly
 reject('3'); // go to microtasks so will run faster, then another async code
});
setTimeout(() => console.log('6'), 0); // will go to Web API but will return immediately into the callback queue
a.then((res) => console.log(res), (res) => console.log(res)).catch(() => console.log('7')); 
// then takes two parameters: first is function that processes fulfilled promise, the second one - rejected
// so second function will run, and console log reject reason
console.log('5'); //

/*

2 
4 - the only viable function in promise a - is reject, so it will run to return something into the 'a'
    // when it will run it executes the code inside, which will log 4 and will return rejected promise into 'a' variable
5 - synchronous code first
3 - since browser prioritize microtask, it will run promise.then before timeout, 
    //reject in 'then' will log the reason from 'a'
    // reject callback doesn't reject or return itself, so there is nothing to catch, that's why 7 will not log
6 
1 - after microtasks callback queue will start to put setTimeout tasks to the call stack one by one

*/
