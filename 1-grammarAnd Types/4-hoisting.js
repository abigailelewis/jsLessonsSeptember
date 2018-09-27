/* Hoisting

*/
console.log(scissors);// undefined

var scissors = 'blue'; // the declartion is being hoisted but the value is not therefore it is undefined

console.log(scissors);// blue

hello();
function hello(){
    console.log('hoisting is... interesting')
}

hello();

