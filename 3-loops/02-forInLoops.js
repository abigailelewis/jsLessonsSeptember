/*


for in loops

great for iterating over vales in an object

*/

let student = {name: 'christian', awesome: true, degree: 'javascript', week: 1};

for (let item in student){
    console.log(typeof item);
    console.log(student[item])
}

let catArray =['tabby', 'british shorthair', 'burmser', 'main coon'];
for (cat in catArray){
    console.log(cat);
} // key is the position of the array

/*let catArray =['tabby', 'british shorthair', 'burmser', 'main coon'];
for (cat in catArray){
    console.log(catArray[cat]);
}

let studentname = 'paul'
let capName = ''
for (let ch in studentname){
    if (ch ==0){
        capname = studentName[ch].toUppperCase();

    }else{
        capname = capName + studentName[ch].toLowerCase();
    }
console.log(capName);

studentname.charAt(0).toUpperCase() in studentname
{
    console.log(studentname);
*/