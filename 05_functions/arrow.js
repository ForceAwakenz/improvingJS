'use strict';

let group = {
    title: "Our Group",
  
    showList() {
        empty(() => console.log(this))
    }

};

function empty(f) {
    console.log(this);
    f();
}


  
group.showList();

// ============ arrow returns object 

const createObj = (a, b) => ({alpha: a, beta: b});

console.log(createObj(100, 200));