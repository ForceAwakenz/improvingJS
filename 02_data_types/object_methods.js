'use strict';

console.warn('================== Object Methods =============')

const father = {
    experience: true,
    age: 50
};

const son = Object.create(father);

son.age = 15;
son.iCloud = true;

console.table(father);
console.table(son);

for (const props in son) {
    console.log(props); // took father's experience property through prototypal chain
}

console.log('=========== Object.assign in work: ');

Object.assign(son, {
    age: 16,
    skateboard: true
});

console.table(son);

console.log('=========== Testing Object.keys/.values with forEach');

Object.keys(son).forEach( key => {
    console.log('key: ', key, '|||   son[', key, '] -> ', son[key]);
});

console.log('=========== Testing Object.entries with for of');

for (const [key, value] of Object.entries(son)) {
    console.log('key:', key, 'value', value);
}


const z = {};
const w = {name: 'w'};

const isEmptyObject = obj => !!Object.keys(obj).length;


console.log(isEmptyObject(w));
console.log(isEmptyObject(z));