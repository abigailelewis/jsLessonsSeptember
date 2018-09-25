/* 
Types


*/

//Booleans- binary, on off, true false, yes no

let on = true;
console.log(on); // output true

let off = false;
console.log(off); // output false

// represent: true/false, on/off, yes/no, black/white, just shows that they are opposite


//null
/* 
Null ( can be easy to think it is undefined)
Null = empty value (not 0;  not undefined)

it is like an empty container, nothing is in it, but it still exists as a space to fill

*/

let empty = null;
console.log(empty);

// undefined

/* 
Undefined = no value assigned ( not even an empty container)
it is not an error

*/

let undef = undefined;
console.log(undef);

let grass;
console.log(grass);

// difference in null and undefined ; you have to make it null, defined it has not been set yet
/*  think of undefined as packages in UPS
null is a package deliberatly sent out from UPS as empty
undefined is a package that was forgotten or a package that has not yet been used or filled

*/

// Numbers

let degrees = 65;
console.log(degrees);

let precise = 999999999999999; // can store 15 consecutive numbers
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded); // rounded at the 16th number, the "container" can only hold so  much aka let/variable

let notQuite = 0.2 + 0.1;
console.log(notQuite.toFixed(2)); // decimals will also round , if you try and do math with decimals it will round at different times

// adding .tofixed(2) will take that down to 2 decimal places

let anotherNum = .02 + .01;
console.log(anotherNum);

//////////////////////( 2      +   1    )   / 10
let numbersAreHard = (0.2 * 10 + 0.1 * 10) /10; 
console.log(numbersAreHard); // doing math with given numbers should not render funky decimals



// Strings

/* any value within quotes; JS will spit out the value within the quotes



*/

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

// numbers vs string
 
let first = 1050 + 100;
let second = '1050' + '100'; // string catcation
console.log(first); // number
console.log(second); // taking two stands and put them in a string 

console.log(typeof first); // number

console.log(typeof second); // string 

// what is going on here? 
// + sign does addition when given two numbers, it does concatenation when given to strings

let third = 1050 + '100';
console.log(third);  // this will show concatatenation if you change '100' to letters it will concatenate

//challenge

let firstName = 'Abby';
let lastName = 'Lewis';
let houseNumber = 2425;
let street = 'Wallace';
let city = 'Lafayette';
let state = 'IN';
let zipcode = 47904;

console.log(firstName, lastName + ',', houseNumber,street +',', city, state, zipcode); // Abby Lewis, 2425 Wallace, Lafayette IN 47904



// can add the ,commas in the variables

//Objects

/*

What is an object?
container that can hold multiple data types
denoted by {} it has keys and values

(color (key): blue (value)), separated with a colon 

each key is separated with a comma
anything more complex that boolean, null, undefined, string, number

variables inside an object




*/

let burritosNow = {
    size: 'large',
    quantity: 4,
    now: true
}

console.log(burritosNow);
// key and value , key and value, { size: 'large', quantity: 4, now: true }

console.log(typeof burritosNow);

// Arrays

/* 

Arrays are great for lists

denoted by the [] 
have values seprated by commas - ['blue', 'green', 'yellow']
brackets will show that this is a array 
use arrays to get objects? 

*/


let burritos = ['large', 4, true];

console.log(burritos);
console.log(typeof burritos);







