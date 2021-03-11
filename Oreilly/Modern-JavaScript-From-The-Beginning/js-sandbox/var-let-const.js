/**
 * Variables - var, let, const
**/


//VAR
console.log('----------VAR------------');
var name = 'Marvin Flores';
console.log(name);
name = 'Fátima López';
console.log(name);

//Init var
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

//letters, numbers, _, $ (The only caracters that can be inside of a  variable name)
var gender= 'M';
var $ender= 'M'; //Can i use but is not recomendable
var _gender= 'M';//Can i use but is not recomendable

//Can not start with number(var 1gender;)


//Multi word variables
var fisrtName ='Marvin';// Camel Case(RECOMMENDED)
var fisrt_Name ='Marvin';// underscore
var FisrtName ='Marvin';// Pascal Case, is the same as camel case, except it starts with an uppercase as well(recommended in some situations)
var fisrtname ='Marvin';// All lowercase(not recommend)


//LET

console.log('----------LET------------');
let name2;
name2 = 'Marvin Flores';
console.log(name2);
name2 = 'Fátima López';
console.log(name2);

//CONST
console.log('----------CONST------------');
const name3 = 'Marvin';
console.log(name3);

//can not reassing, because is a constant
//name3 = 'Fátima';(no)

//We have to assing a value
//const greeting;(no)

const person = {
  name: 'John',
  age: '30'
}

//We can't reassing person but we can take the person object and we can mutate it, we can change the atributes
person.name = 'Sara';
person.age = 32;

console.log(person);

//We can't reassing numbers but we can take the numbers array and we can change or add items
const numbers =[1,2,3,4,5];
numbers.push(6);
console.log(numbers);

//RECOMEND
//We are going to use const unless i plan on the value changing, unless i need to initialize it or unless i'm using it in iterator or a loop, other than that using const let´s your program and anyone looking at your code know that this value should not be reassigned.