'use strict';

// ===================== Set ==========================

const newSet = new Set(['hoo', 'la', 'hoop']);

console.log(newSet.has('hoo')); // true
console.log(newSet.delete('hoo')); // true
console.log(newSet.delete('woo')); // false
console.log(newSet.has('hoo')); // false
newSet.add('wwoomba!!');

newSet.forEach(ja => console.warn(ja));
console.log(newSet.size); // size, not length

for (const ja of newSet) console.log(ja);

// ===================== Map ==========================

const testMap = new Map();

testMap.set(true, 'string');
testMap.set(document.querySelector('h1'), 'does it work?');
console.log(testMap.get(document.querySelector('h1'))); // yes, it works, since it's link to the same object
testMap.set('ja', 100).set(100 , '100');


testMap.forEach(console.log);

console.log([...testMap.keys()].filter(e => e !== true || e !== 'ja')); // .keys returns iterable












