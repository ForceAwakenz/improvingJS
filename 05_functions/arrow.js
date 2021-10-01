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

