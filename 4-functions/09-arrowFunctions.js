// arrow functions

function coffee(){
    console.log("coffee rules");
}

let tea = ()=> {
    console.log("tea is awesome");
}

coffee();
tea();



var cats = (kitten, puppy) => {
    console.log(`i have ${kitten} cats, and ${puppy} dogs.`);
}
cats(2,3);

//arrow funtions body styles
// concise
let apples = x =>console.log(`there are ${x} apples`)
apples(5);



//block

let peaches = (x) => {console.log(`there are ${x} peaches`)}; // can not break on different lines unless you are in {}
peaches(6);


