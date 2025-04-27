
// //SELF INVOKE FUNCTION

// function normalfun() {
//     console.log("execute whenever i call");

// }

// normalfun();
// normalfun();
// normalfun();
// normalfun();
//the above is the example of the normal function it will execute whenever we call it explicitly.
//ananomous function is the function which didnt have the specific name it will directly intiated with the function keyword with brackets and open close paranthesis and .

// IIFE - IMEDIATELY INVOKED FUNCITON EXPRESSION
// (function () {
//     console.log("self invoked statements");

// })()

(function (username, age) {
    console.log("self invoked statements", username + age);

})(" Navin ", 20);