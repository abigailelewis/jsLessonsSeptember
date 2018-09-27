/* recap

*/

let stringExample = 'string';
let numberExample = 0;
let boolExample = true;

let conditionExample = 0;



//let secondString = userinput();

//if else example

if (typeof conditionExample === 'string') {
    console.log('yep it is a sting');
}

else if (typeof conditionExample === 'number'){
    console.log('yep it is a number')
}
else if (typeof conditionExample === 'boolean'){
    console.log('yep it is a boolean');
}


console.log(typeof conditionExample);
//switch

switch(typeof conditionExample){
    case 'string':
    console.log('this is a string')
    break;
    case 'number':
    console.log('this is a number')
    break;
    default:
    console.log('this variable is not a string or a number');
    break;

}

//ternaries

(typeof conditionExample === 'string') ? console.log('our variable is a string'): 
(typeof conditionExample === 'number') ? console.log('our variable is a number'):
(typeof conditionExample === 'undefined') ? console.log('our variable is undefined'):
console.log('this is our default case');

/* challenge */

let FB = 15;

if( FB % 3 === 0){
    console.log('fizz')

}else if (FB % 5 === 0) {
    console.log('buzz')

}else if (FB % 3 === 0 && FB % 5 ===0) {
    console.log('fizz buzz');
}

// pput the last at the top

let FB = 15;

if (FB % 3 === 0 && FB % 5 ===0) {
    console.log('fizz buzz')

}else if (FB % 5 === 0) {
    console.log('buzz')

}else if ( FB % 3 === 0){
    console.log('fizz');
}

switch (true){
    case (FB % 15 === 0):
    console.log('fizz buzz');
    break;
    case (FB % 5 === 0):
    console.log('buzz');
    break;
    case (FB % 3 === 0):
    console.log('fizz');

}



// smallest multiple 15
var FB = 15

(FB % 15 === 0) ? console.log('fizz buzz')
: (FB % 5 === 0) ? console.log('buzz')
: (FB % 3 === 0) ? console.log ('fizz buzz')
: console.log(' your num is not divisible by 3 or 5');