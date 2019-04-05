/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Biding. In this instance the 'this' will refer to whatever window you are using. 
* 2. Implicit Binding. In this instance the 'this' is implied. 
    When calling a function with a . 'this' is whatever is left of the dot. 
* 3. New Binding. When a constructor is used, the 'this' is the NEW object. 
* 4. Explicit Binding. This is when you use a build in JS function like call() or apply() that is 
    specifically created to tell 'this' what to be. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const person = {
    name: 'Chaz',
    age: 30,
    occupation: 'programmer',
    introduce: function(school) {
        return `My name is ${this.name} I am ${this.age} years old, and I am a ${this.occupation}`;
    }
}

console.log(person.introduce());

// Principle 3

// code example for New Binding
function Programmer(guy) {
    this.guy = guy,
    this.language = 'JavaScript';
    this.program = function () {
        console.log(`Im ${this.guy} and I am currently writing in ${this.language}`);
    }  
}

const Chaz = new Programmer('Chaz');
const Naruto = new Programmer('Naruto');
Chaz.program();

// Principle 4

// code example for Explicit Binding
Chaz.program.call(Naruto);