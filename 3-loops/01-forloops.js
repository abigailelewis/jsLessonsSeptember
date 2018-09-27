/*
classic for loops
*/

// loop variations
//for statment
//do while statments
//while statement
// labeled statement
//break statment
//continure statement
// for in statement
// for of statment

// counted from 0 to 9 by one
for (let i = 0; i < 10; i ++){  // ++ add one the 1 < 10 is the run condition, it will run when this is true,  changer ++ increases by one
    console.log(i);

}

// count from 0 to 20 by 2

for(let i = 0; i <= 20; i+=2){  // i = i +2
    console.log(i);
} 
for(let i = 10; i >= 0; i--){
    console.log(i);
}

// my try at the challenge display each letter in the name 
//for (let name = 'abby'; [name.sting.length] >=0, name++){
//    console.log(name);


let name = 'kenn'

for(let i = 0; i< name.length; i++){
    console.log(name[i]);
}

let sum = 0;
for(let i = 1; i <= 50; i++){
    console.log(sum);
    sum = sum + i;
    console.log(sum);
}