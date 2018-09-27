/* interating

*/
/*

let food = ['pecan pie', 'shirmp', 'quesadilla', 'cheese cake', 'hotdog'];
for (let f of food)
console.log(f)

//food.forEach(f => {console.log(f)}) // each value is listed

food.forEach((food, number) => {
    console.log(food);
    console.log(number);
}) // shows the place and the value

*/

let movies = [ 'one', 'two', 'three', 'four']
for (let m of movies){

console.log(m)
}
movies.splice(4, 0, 'five' );
console.log(movies);

movies.forEach(movie) => {
    console.log(movie);
}

movies.push('six');
,


