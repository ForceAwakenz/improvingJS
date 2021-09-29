'use strict';

// ===================== Set ==========================

console.warn('================ Maps and Sets ==================')

const newSet = new Set(['hoo', 'la', 'hoop']);

console.log(newSet.has('hoo')); // true
console.log(newSet.delete('hoo')); // true
console.log(newSet.delete('woo')); // false
console.log(newSet.has('hoo')); // false
newSet.add('wwoomba!!');

// newSet.forEach(ja => console.log(ja));
console.log(newSet.size); // size, not length

// for (const ja of newSet) console.log(ja);

// ===================== Map ==========================

const testMap = new Map();

testMap.set(true, 'string');
testMap.set(document.querySelector('h1'), 'does it work?');
console.log(testMap.get(document.querySelector('h1'))); // yes, it works, since it's link to the same object
testMap.set('ja', 100).set(100 , '100');


// testMap.forEach(console.log);

console.log([...testMap.keys()].filter(e => e !== true || e !== 'ja')); // .keys returns iterable


// ===================== Minin on Map and Set ==========================
// https://www.youtube.com/watch?v=mbcP3Oc0PjU

const objPerson = {
    name: 'Kiril',
    profession: 'Software Engeneer',
    age: 33
};

const arrPerson = [
    ['name', 'Kiril'],
    ['profession', 'Software Engeneer'],
    ['age', 33]
];

console.log(objPerson);
console.log('Object.entries from object to array -> ', Object.entries(objPerson));
console.log(arrPerson);
console.log('Object.fromEntries from array to object -> ', Object.fromEntries(arrPerson));

const map = new Map(arrPerson);
console.log('map', map);


