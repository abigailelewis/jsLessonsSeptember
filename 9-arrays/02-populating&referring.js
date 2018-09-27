/* arrays

multiply data types
in brackets []
commas
great for listing


*/

//overview

let students = ['tony', 'marshall', 'rhys', 'ray', 23, true, ['ryan', 'iesha']]; // nesting an array inside on array, a way to group things that have a simialrites
 console.log(typeof students); // objects

 console.log(students[2]); // rhys

 console.log("hello,", students[6][1], "you look nice today"); // ${students[6][1]} option

 let food = ['pecan pie', 'shirmp', 'quesadilla', 'cheese cake', 'hotdog'];
  for(let f of food){
      console.log(f);  } // prints out each line cause it is a loop each food gets its own console.log
      // so f is for each item in the array
//for(let i = 0; i < food.length; i ++){
  //  console.log(food[i])
//}

food.push('pizza') //adds pizza to the end of the array)
console.log(food);
food.splice(1, 1, 'bananas'); // first number  is the index where to start then the second number is the number of things to remove, third number is the replacement value
console.log(food)

food.splice(2, 0, 'Sweet potato pie')
console.log(food)

food.pop(); // it removes that last item in the array
console.log(food)

