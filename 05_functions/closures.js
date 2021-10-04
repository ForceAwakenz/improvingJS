// 'use strict';

const variable = 1;

const anotherObj = {
    lookup() {
        // console.log(variable); // undefined 
        // ^^^^^^^^^^^^^^^^^^^^^^^objects doesn't lookup variable through scope chain
        // console.log(this.variabe); // undefined
    }
};

anotherObj.lookup();


const obj = {
    objFunc() {
        const variable = 3;
        return {
            variableDisplay() {
                console.log(variable); // 3
                // why does it look up through scope chain??
                // console.log(this.variable); // undefined
            }
        }
    }
}

const nextObj = obj.objFunc();
nextObj.variableDisplay();



// =============================================================

function aliveVariable() {
    // let v = 1;

    setTimeout(() => {
        console.log(v);
    }, 2000);
    
    let v = 2;
    
}

// aliveVariable();

// =============================================================


function accountant() {
    let count = 0;
    
    return {
        countPersons() {
            count++;
        },
        countGroups(groupsize) {
            count += groupsize;
        },
        displayCount() {
            console.log(count);
        }
    }
}

const match1 = accountant();

match1.countPersons();
match1.countPersons();
match1.countPersons();
match1.countGroups(5);
// match1.displayCount()

const match2 = accountant();
match2.countPersons();
match2.countGroups(20);
// match2.displayCount();


// =============================================================


for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log('initial task ================', i); // ->  6 6 6 6 6
    }, i * 1000);
}

for (var i = 1; i <= 5; i++) {
    setTimeout( i => {
        console.log('my solution', i); // -> 1 2 3 4 5
    }, 2000, i);
}

for (var i = 1; i <= 5; i++) {
    setTimeout((i) => {
        console.log('if not to put args parameter', i); // -> undefined undefined undefined undefined undefined
        // i in setTimeout is shadowing global i
    }, 3000);
}

for (var i = 1; i <= 5; i++) {
    const j = i;
    setTimeout(() => {
        console.log('j = i', j); // -> 1 2 3 4 5
    }, 4000);
}

for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log('let', i); // -> 1 2 3 4 5
    }, 1000);
}

for (var i = 1; i <= 5; i++) {
    (function(i) {
        setTimeout(() => console.log('iify', i), 5000); // -> 1 2 3 4 5
    }
    )(i);
}

function printWithDelay(i) {
    setTimeout(() => console.log('func printWithDelay', i), 6000); // -> 1 2 3 4 5
}

for (var i = 1; i <= 5; i++) {
    printWithDelay(i);
}


{
    var z = 1;
    let q = 1;
    setTimeout(() => console.log('z: ', z, 'q: ', q)); // z: 2 , q: 1
}

{
    var z = 2;
    let q = 2;
}



// ================== Not closure: ==========================
// it's object reference

var foo = (function () {

    var o = { bar: 'bar'};

    return {obj: o}
})();

// console.log(foo.obj.bar);
// console.log(o.bar)
