/* 
variables
refer to something that changes over time

notes:
1)variables must begin with a letter, underscore, or dollar sign $
2) you can use numbers but the must follow one of the items from above ex r4
3) JavaScript is case sensitive -- "hello" and "Hello" are different
4) should use ; and should use "" or ' ' but pick one!if the person is logged in then, it should said hello abby, if you are not logged in then it will say log in.
    the name will be different for different users so therefore the let is different for each person.
5) variables are used in input, loops, 
6) it is the container to hold "things"
*/

var a = 1;
var b = 2;
console.log(a+b); //3

/*
Declarations


Declarations are the left side of a variable
    it is simply the var x
    on the left side of the assignment operator (=)



Initializations are the right side of a varible
    Set the value of the variable
    includes the variables name (x), the assignment operator (=), and the value (10) => x = 10

*/

var x;
console.log('Declaration', x);

x = 10;
console.log('Initialization 1:', x);

x = 33
console.log('Initialization 2:', x);

/*
var, let, and Const:
var = "old" js keyword for variables
let = "new" keyword for variables (intro in ES6) should be used as a jr dev, here on out use let not var
const = "new" declares unchangeable variables
*/

let today = 'great!'; // this is an expression and the end will be shown with the ;
const elevenfifty = 'wonderful!';
console.log(today, elevenfifty);

today = 'lovely!';
console.log(today, elevenfifty);

elevenfifty = 'super' /*  do not need to have the ; at the end of the line of code, can help to see the end of a thought or code, should use
console.log(today, elevenfifty); */





