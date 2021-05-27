/**
 *  Type Conversion
**/

console.log('****************TYPE CONVERSION**********************');
let val;

console.log('****************Number to string**********************');
//Number to string
val = String(5) ;
val2 = String(4+4);

//Output
console.log(val);
console.log(typeof val);
console.log(val.length);

console.log(val2);
console.log(typeof val2);
console.log(val2.length);

console.log('****************Bool to string**********************');
//Bool to string
val = String(true);
//Output
console.log(val);
console.log(typeof val);
console.log(val.length);

console.log('****************Date to string**********************');
//Date to string
val = String(new Date());

//Output
console.log(val);
console.log(typeof val);
console.log(val.length);

console.log('****************Array to string**********************');
//Date to string
val = String([1,2,3,4]);

//Output
console.log(val);
console.log(typeof val);
console.log(val.length);

console.log('****************toString() Method**********************');
//toString()
val = (5).toString();
val2 = (true).toString();

//Output
console.log(val);
console.log(typeof val);
console.log(val.length);

console.log(val2);
console.log(typeof val2);
console.log(val2.length);

console.log('****************String to number**********************');
//String to number
val = Number('5');
val2 = Number('hello');

//Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

console.log(val2);
console.log(typeof val2);
console.log(val2.toFixed(2));

console.log('****************Boolean to number**********************');
//Boolean to number
val = Number(true);

//Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

console.log('****************Null to number**********************');
//Null to number
val = Number(null);

//Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

console.log('****************Array to number**********************');
//Array to number
val = Number([1,2,3,4]);

//Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

console.log('****************parseInt(Only the integer part of a number)**********************');
//parseInt
val = parseInt('100');

//Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

console.log('****************parseFloat(Integer part and Decimals)**********************');
//parseFloat
val = parseFloat('100.30');

//Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));


console.log('****************TYPE COERCION**********************');
const val3 = 5;
const val4 = 6;
const sum = val3+val4;
console.log(sum);
console.log(typeof sum);

const val5 = String(5);
const val6 = 6;
const sum1 = val5+val6;
console.log(sum1);
console.log(typeof sum1);