// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
function consume(a, b, cb){
return cb(a, b);
}
const add = function(a, b) {
  return a + b;
}
const multiply = function(a, b) {
return a * b;
}

const greeting = function(firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to meet you!`
}

console.log(consume(2, 2, add));
console.log(consume(10, 16, multiply));
console.log(consume("Mary", "Poppins", greeting));
/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/


/* Step 3: Check your work by un-commenting the following calls to consume(): */
// console.log(consume(2, 2, add)); // 4
// console.log(consume(10, 16, multiply)); // 160
// console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.
// Explanation: 
// nestedFunction is nested inside myFunction and can therefore access the variable internal which is a part of myFunction.
// The internal variable has been identified as a part of myFunction and we can access it from there.
// The lexical scope of the internal variable is myFunction, because that is where it was initially defined.
// the internal variable is a closure.
const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
