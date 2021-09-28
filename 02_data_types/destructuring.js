

// Note that Object.assign() triggers setters, whereas spread syntax doesn't.

// ===========================

let a = 1;
let b = 3;

[a, b] = [b, a];

const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
// console.log(arr); // [1,3,2]

// ===========================

function f() {
    return [1, 2];
}
  
let s, t;
[s, t] = f();

// ===========================

const obj1 = {
    dark: 100,
    light: 0
}

const {dark: black, light: white, shadow: grey = 50} = obj1;

console.log({black, white, grey});


// ===========================



const people = [
    {
      name: 'Mike Smith',
      family: {
        mother: 'Jane Smith',
        father: 'Harry Smith',
      },
    },
    {
      name: 'Tom Jones',
      family: {
        mother: 'Norah Jones',
        father: 'Richard Jones',
      },
    }
];

const [,{family:{...tomJFamily}}] = people;
console.table({tomJFamily});

for (const {name: n, family: {father: f}} of people) {
    console.warn('Name: ' + n + ', Father: ' + f);
}

// ===========================

let key = 'z';
let {[key]: foo} = {z: 'bar'};

console.log(foo); // "bar"





