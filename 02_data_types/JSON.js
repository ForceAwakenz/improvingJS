let user = {
    name: "Martin Eden",
    age: 35
};

let userString = JSON.stringify(user);
console.log(userString);

let user2 = JSON.parse(userString);

console.log(user2);