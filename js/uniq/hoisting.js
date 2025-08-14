

// // console.log(a);
// const a = 10;
// console.log(a);

// console.log(b);
// let b = 15;
// console.log(b);

// console.log(c);
// let c = 20;
// console.log(c);

//FUNCTION DECLARATION

// sample1();

// function sample1() {
//     console.log('sample1');

// }


//UNCURRING is same as normal function.

// function add(a, b, c) {
//     console.log(a + b + c);
// }
// add(1, 4, 5);  //in uncurring multiple arguments are passed


// //CURRING FUNCTION
// function add(a) {
//     return function (b) {
//         return function (c) {
//             console.log(a + b + c)
//         }
//     }
// }
// add(10)(30)(50);  // in this single single agrguments are passed. it is done by chaining

// let curry1 = add(100);
// let curry2 = curry1(300);
// curry2(300);

