/* ./ is a relative path indicating that converters.js is stored in the same folder as water-limits.js.*/
const converters = require('./converters.js'); 

/* water-limits.js */
function celsiusToFahrenheit(celsius) {
    return celsius * (9/5) + 32;
  }
   
  const freezingPointC = 0;
  const boilingPointC = 100;
   
  const freezingPointF = converters.celsiusToFahrenheit(freezingPointC);
  const boilingPointF = converters.celsiusToFahrenheit(boilingPointC);
   
  console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
  console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);