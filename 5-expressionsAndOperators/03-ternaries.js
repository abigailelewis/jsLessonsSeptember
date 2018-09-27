/* ternaries

*/


var x = 6;

(x > 0) ? console.log("x is greater than 0.") : console.log ("x is not greater than 0") // dont' have to write out if and else

if (x > 0) {
    console.log('greater')
} else {
    console.log('lesser')
}


let x = 10; 

(x == 0) ? console.log('x equals 0') : (x < 0) ? Console.log('x less than 0') : console.log('x is greater than 0')

/* Challenge:
Write a ternary that does the same thing as the age challenge

Age Challenge (if else):

var age = 30;

if (age >= 25) {
	console.log("Yay! You can rent a car!");
} else if (age >= 21) {
	console.log("Yay! You can drink!");
} else if (age >= 18) {
	console.log("Yay! You can vote!");
} else {
	console.log("Sorry, you're too young to do anything fun.");
}

*/
let age = 30;

(age>= 25) ? console.log('you can rent a car') 
: (age >= 21) ? console.log('you can drink') 
: (age >= 18) ? console.log('you can vote') 
: console.log('sorry you are young')

let yep = -8;

(yep < 0 && yep > -10) ? console.log('yep is between 0 and -10') : (yep > 0 ) ? console.log('yep it is greater than 0') :
 console.log('yep is greater than 0');

 let y = 5;

 (y == 2) ? console.log('y is equal to two') : console.log ('default');
