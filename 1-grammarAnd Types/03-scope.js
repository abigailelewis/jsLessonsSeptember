/* 
Scope

javascript has both local and global scope.

*/


var x = 12;

function scope() {
    var x = 33;
    console.log(x);
}

scope(); //output 33
console.log(x); // output12 the variable inside the function is operating differently inside the function than it is outside

// global is outside the function and local is on the inside of the function or scope


var x = 12;
function scope(){
    x= 33;
    console.log(x);
}
scope();
console.log(x);  // output 33 for both
//the local is just changing the global and we are logging the changed var to now equal 33

/* the twoo are different because the first example had two variables named x and the second example just had one var named x
in the global scope.and it was chnaged in the local
*/

var x = 12
function scope() {
    var x = 33;
    if (true) {
        var x = 45;
        console.log(x);// guess 45, actual 45
    }
    console.log(x);// guess 33, actual 45
}
 scope();
 console.log(x);// guess 12, actual 12

 //

 let x = 12
 function scope() {
     let x = 33;
     if (true) {
         let x = 45;
         console.log(x);

     }
     console.log(x);
 }
 scope();
 console.log(x);

 // let plays nice with every level 

 function constTest(){
     const scope = 1;
     if (true) {
         const scope = 2;
         console.log(scope);
     }
     console.log(scope);
     if (true) {
         const scope = 3;
         console.log(scope);
     }
     console.log(scope);
 }
 constTest();
 // after the } it deletes that so that it does not bleed to the next lline, if you change that to a var it will not delete
// let and const play by the rules
// you have to declare it as a new variable x means it does use do it
/*/*
    variable declar.   obeys functional scope    obeys block scope   can be mutated (changed after initialization)
    var                 x                         o                   x
    let                 x                         x                   x
    const               x                         x                   o
*/


