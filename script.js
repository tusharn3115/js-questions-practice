// Beginner Level Questions -------------------------------------------------------

// 1. Variables and Data Types
// Declare a variable to store your name and log it to the console.
// How do you declare a constant variable in JavaScript? Show an example.

// const pi = 3.14;     // const and let was introduced in ES6
// let yName = "Your Name";
// var age = 32;   // used in old version of JS

// console.log(pi);
// console.log(yName);
// console.log(age);



// 2. Basic Operators
// Write a JavaScript code to add two numbers and display the result.

// let a = 20;
// let b = 30
// let add = a + b;
// console.log(`a + b = ${add}`);
// console.log(20 + 30);  // direct method to add two numbers



// 3. Conditional Statements
// Write a program that checks if a person is adult or a minor using there age.

// let your_age = 20;

// if (your_age >= 18) {
//     console.log("You're an adult");
// } else {
//     console.log("You're a minor");
// }



// 4. Loops
// Write a for loop that prints numbers from 1 to 10.
// How would you use a while loop to sum numbers from 1 to 100?

// console.log("Counting 1 to 10 using for loop");
// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }
// console.log("Stopped");

// console.log("Counting 1 to 10 using while loop");
// let i = 1
// while(i <= 10){
//     console.log(i);
//     i++;
// }
// console.log("Stopped");



// 5. Functions
// Write a function called greet that takes a name as an argument and prints "Hello, [name]!".

// function declaration
// function greet(name){
//     console.log(`Hello ${name}`);
// }
// greet("John");

// function expression
// let greeting = function greet(name){
//     console.log(`Hello ${name}`);
// }
// greeting("John");




// 7. Objects
// Create an object representing a book with properties like title, author, and year.
// How would you access the value of author from the object?


// const book = {
//     title: "The Lost Lake",
//     author: "Adam",
//     year: 1978,
// }
// // console.log(book)
// console.log(`Author: ${book.author}`);



// 8. Events (for Browser-based JS)
// How do you handle a button click event in JavaScript? Write a simple example.

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    console.log("button clicked");
})