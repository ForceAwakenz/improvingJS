'use strict';

// const promise = new Promise(r => {
//     setTimeout(r, 2000);
// });

// promise.then(() => console.log('success!!!!'));
// promise.then(() => console.log('success!!!!'));

function delay(ms) {
    return new Promise(
        r => setTimeout(r, ms)
    )
}
  
// delay(3000).then(() => console.log('выполнилось через 3 секунды'));