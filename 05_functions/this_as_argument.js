'use strict';

class NameField {
    constructor(name) {
        const field = document.createElement('li');
        field.textContent = name;
        const nameListHook = document.querySelector('#names');
        nameListHook.appendChild(field);
    }
}

class NameGenerator {
    constructor () {
        console.log(this); // NameGenerator {...}
        const btn = document.querySelector('button');
        this.names = ['Kiril', 'Max', 'Elon'];
        this.currentName = 0;
        // this.addName();
        btn.addEventListener('click', this.addName); 
        // ^^^^^^^^^ the second this points to this outside of a function, the first one - to btn
        // btn.addEventListener('click', () => this.addName()); 
        // ^^^^^^^^  'this' jumps through btn object and points to this outside of a function
    }

    addName() {
        console.log('addName.this ---> ', this); // depends on how we call it
        const name = new NameField(this.names[this.currentName]);
        this.currentName = this.currentName >= this.names.length - 1 ? 0: this.currentName + 1;
        // this.currentName++;
        // if (this.currentName >= this.names.length) {
        //     this.currentName = 0;
        // }
    }
}

const gen = new NameGenerator();












