'use strict';

const PersonProto = {
    calcAge: function() {
        // console.log('age: ', new Date().getFullYear() - this.birthYear);
    },
    init (name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto);

steven.name = 'Steven';
steven.birthYear = 1985;

steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1965);

// console.log(sarah);
// sarah.calcAge();

// ====================== Challenge ================================

// class Car {
//     constructor (brand, speed) {
//         this.brand = brand;
//         this.speed = speed;
//     }
//     accelerate() {
//        console.log(this.speed += 10);
        
//     }
//     break() {
//        console.log(this.speed -= 5);
//     }
//     get milesSpeed() {
//         return this.speed / 1.6;
//     }
//     set milesSpeed(miles) {
//         this.speed =  miles * 1.6;
//     }

// }

// const bmw = new Car('bmw', 160);

// console.log(bmw);
// bmw.milesSpeed = 50;
// console.log(bmw.speed);
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.break();

// ==================================================================

// function Person(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
// }

// Person.prototype.calcAge = function() {
//     console.log('age is ', new Date().getFullYear() - this.birthYear);
// }

// // const john = new Person('Johnny', 1988);
// // john.calcAge();

// function Student(name, birthYear, course) {
//     Person.call(this, name, birthYear);
//     this.course = course;
// }

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//     console.log(`hello! my name is ${this.name}, I study ${this.course}`);
// }


// const mike = new Student('Mike', 1995, 'Philosophy');

// console.log(mike);
// mike.introduce();

// mike.calcAge();

// console.log(mike.__proto__);


// ====================== Challenge 3 ================================

// function Car (brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function(accelerateTo) {
//     this.speed += accelerateTo || 10;
// }

// Car.prototype.break = function () {
//     this.speed -= 5;
//     console.log(`${this.brand} decreased it's speed to ${this.speed}`)
// }

// function EV (brand, speed, charge) {
//     Car.call(this, brand, speed);
//     this.charge = charge;
// }

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//     this.charge = chargeTo;
//     return this.charge;
// }

// EV.prototype.accelerate = function() {
//     Car.prototype.accelerate.call(this, 20);
//     console.log(`${this.brand} accelerates to ${this.speed} km/h, 
//     with charge changed from ${this.charge} to ${this.chargeBattery(this.charge - 1)}%`)
// }

// const tesla = new EV('Tesla', 160, 90);

// console.log(tesla);

// tesla.accelerate();
// tesla.break();

// console.log(tesla.charge);
// tesla.chargeBattery(tesla.charge - 1); // ???????????? why can't I use this instead of tesla
// console.log(tesla.charge);



// ==================================================================

// Class declaration
class PersonCl {
    constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
    }
  
    // Instance methods
    // Methods will be added to .prototype property
    calcAge() {
      console.log(2037 - this.birthYear);
    }
  
    greet() {
      console.log(`Hey ${this.fullName}`);
    }
  
    get age() {
      return 2037 - this.birthYear;
    }
  
    // Set a property that already exists
    set fullName(name) {
      if (name.includes(' ')) this._fullName = name;
      else alert(`${name} is not a full name!`);
    }
  
    get fullName() {
      return this._fullName;
    }
  
    // Static method
    static hey() {
      console.log('Hey there 👋');
      console.log(this);
    }
}
  
  const jessica = new PersonCl('Jessica Davis', 1996);
//   console.log(jessica);
//   jessica.calcAge();
//   console.log(jessica.age);

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        super(fullName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`Hi, my name is ${this.fullName.split(' ')[0]}, I study ${this.course}`)
    }

}

const vitold = new StudentCl('Vitold Bekhterev', 1944, 'Philosophy');

vitold.introduce();