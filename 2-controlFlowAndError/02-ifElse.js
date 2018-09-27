/* if else
*/

weather = 75;

if(weather < 70) {
    console.log('wear a jacket');
} else {
    console.log(' no jacket necessary'); // the else will run if the if is false. 
}

name = 'Abby';

if (name === 'tim') {
    console.log( 'hello, my name is Abby');

} else {
    console.log(' hello, what is your name?');
}
//caps the first letter of a name

// 
 (str.toUpperCase str.length = 0;) {

console.log('abby');

function name(string){
   return string.chartAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
console.log(name('josh'));

let name = 'tyler';
if(name[0] == name[0].toUpperCase()){
    firstLetter = name[0] + name.slice(1).toLowerCase();
    console.log(firstLetter);

} else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log(otherLetters);

}

//else if

let age = 26;
if (age <= 17) {
    console.log( 'sorry, you are too young to do anything.');
}
else if ( age >= 18 && age < 21){
    console.log('you can vote!');
}
else if (age >= 21 && age < 25) {
    console.log('you can drink!');

}
else if ( age >= 25) {
    console.log('you can rent a car!'); 
}

age = 32;
if (age >= 25) {
    console.log('yes you can rent a car');
} else if (age >= 21){
    console.log('you can drink');
}  else if (age >= 18) {
    console.log( ' you are young');
}