
//global scope
let data = "hello";

function greet () 
{
    console.log(data);
}

greet();

//local scope
function greet() 
{
    let surname = "World"
    console.log(surname);
}
greet();

//variable hoisting

num = 23;
console.log(num);
var num;

//function hoisting
greet();
function greet() 
{
    console.log('hello world');
}

//operators
let num1=4;
let num2=6;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);


//arrays
const bike = ["royalenfield", "ninja", "bmw"];
bike.pop();
console.log(bike);
bike.push('pulsar');
console.log(bike);
bike.shift();
console.log(bike);
bike.unshift('suzuki');
console.log(bike);

//while loop
let i = 1, num = 5;
while (i <= num) {
    console.log(i);
    i += 1;
}

//do while
let j = 1;
const num = 5;
do {
    console.log(j);
    j++;
} 
while(j <=num);

//this keyword
const person = {
    name: 'sam',
    userid:3425,
    greet: function()
 {
    let surname = 'rao';
console.log('Name' + ' ' + this.name + ' ' + this.userid+'surname is'+surname); 
    
}
};
person.greet();

//functions
function greet()
{
    console.log("welcome");
}
greet();

//constructor
function  Person () {
    this.name = 'sam',
    this.age = 21,

    this.greet = function ()
{
 console.log('welcome');
}
}
const p1 = new Person();
console.log(p1.name); 

//spread operator
const cars = ['honda', 'hyundai', 'nissan', 'audi'];

console.log(cars); 
console.log(...cars); 

//rest opeartor
function sum(a, b ,c) {
    console.log(a + b + c);
}

const result = [2, 4, 6, 8];

sum(...result); 

//destructing
const value = ['debit', 'credit', 'platinum','visa'];
const [d, e, f, g] = value;

console.log(d);
console.log(e); 
console.log(f);
console.log(g); 


