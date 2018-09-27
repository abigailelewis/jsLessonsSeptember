/*
Comparison Operators

*/

//equality

console.log('3' == 3);
// werid cause one is a string and one is a number, == doesn't care what type
// type coercion, if we make this a sting will it match the other number yes

console.log( 'three'== 3); // false

// strict equality

console.log(3 === 3);

// === checks the types and the value

console.log(3 === '3');

console.log(0 == false);
/*  if you use 0 false '' null will come back true with == (falsey)

*/

console.log('3'!= 4); // are these not equal - true

console.log('4' != 4); // doesn't care about type - false

//strict not equal

console.log('3' !== 3); // true they do not equal each other

//greater than

console.log(3 >2);

// less than

console.log(2 < 3);

// greater than or = to

console.log(3 >= 3);

// less than or = to

console.log(4 <= 4);

//and returns true if the left and the right are both true

console.log(true && true); //true
let x = 5;
console.log(x < 10 && x > -5); // true

console.log(x < 10 && x > 15); // false you can use var strings


let str = 'a';
console.log(str < 'p');

//or : return true if the left or right are true

console.log(true || false); // true

let x = 5;
console.log(x < 10 || x > 15); // true










