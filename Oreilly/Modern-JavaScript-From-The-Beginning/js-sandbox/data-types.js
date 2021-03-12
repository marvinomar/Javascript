/**
 *  Data Types in Javascript
**/


/*****PRIMITIVE TYPES******/
console.log('/*****PRIMITIVE TYPES******/');

//String
const  name = 'Marvin Flores';
console.log(typeof name);


//Number
const  age = 36;
console.log(typeof age);

//Boolean
const  hasKid = true;
console.log(typeof hasKid);

//NUll
const  car = null;
console.log(typeof car);

//Undefines
let test;
console.log(typeof test);

//Symbol(ES6)
const sym =  Symbol();
console.log(typeof sym);


/*****REFERENCE TYPES******/

console.log('/*****REFERENCE TYPES - Objects******/');

//Array
const hobbies = ['movies', 'music'];
console.log(typeof hobbies);

//Object Literal
const addres ={
  city: 'Boston',
  state: 'MA'
}
console.log(typeof addres);

//Date
const today = new Date();
console.log(typeof today);