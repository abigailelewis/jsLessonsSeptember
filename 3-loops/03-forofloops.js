/* for of looops

better for arrays
has to be iterable

*/

let student = {name: 'emily', awesome: true, degree: 'Javascript', week: 1};

for (let key of student){
    console.log(key);
}

let catArray =['tabby', 'british shorthair', 'burmese', 'main coon'];

for (cat of catArray){
    console.log(cat, 'says meow'); // cat of is pulling the value 

}

for (cat in catArray) {
    console.log(cat, 'says meow'); // cat in is pulling the postion
}