'use strict';

// experiment with different values
const a = false;
const b = false;

// "and" expression
const andValue = a && b;

// conditional statement
//let conditionalValue;
//if (Boolean(a) === false) {
// conditionalValue = a;
//} else {
// conditionalValue = b;
//}

let conditionalValue = Boolean(a) === false ? a : b;

console.assert(andValue === conditionalValue, 'always the same!');
