'use strict';
console.warn('========================= hardcore closures ===========================');


const jack = {
    name: 'Jack', 
    totalSalary: 0,
}

const richard = {
    name: 'Richard', 
    totalSalary: 0,
}

function workPlace() {
    let salaryBudget = 5000;
    function getPaycheck(amount) {
        salaryBudget -= amount;
        console.log(`After paying salary to ${this.name}, Salary budget of our company is ${salaryBudget}$`)
        this.totalSalary += amount;
    }
    return getPaycheck;
}

const getSalary = workPlace();

getSalary.call(richard, 500);
getSalary.call(jack, 1000);

console.log(richard);
console.log(jack);

console.dir(getSalary);

// ===================================================


