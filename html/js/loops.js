// for loop

// for (i = 0; i <= 10; i++) {
//     // if (i % 2 == 0) console.log(i);
//     if (i % 2 != 0) console.log(i);
// }

// //while loop

// intialization;
// while(condition){
//     statement;
//     increment/counter;

// }

// let i = 10;
// while (i >= 0) {
//     console.log(i);
//     i--;
// }

// let num = 1234;
// let sum = 0;
// // output: 1+2+3+4 =10

// while (num > 0) {
//     let last = num % 10;  // 1234 % 10 gives 4 as remainder.
//     num = parseInt(num / 10);   //parseInt convert the decimal to integer eg., 123.4 will be 123.
//     sum = sum + last;

// }
// console.log(sum);

// //1234 => 4 => 123 => sum=4
// //123=>3 => 12 => sum=>7

//do while

//it will print the statement first and then check the condition the it will increment the value and check the conditon
//,it will check the condition after the execution of the statement.

// let num = 10;

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 20)

// let num = 21;

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 20)

//continue,break.
//if the break condition is once met then the pointer will be moved from loop to outsid


// for (let i = 0; i < 20; i++) {
//     if (i % 2 == 0) {
//         if (i == 12) {
//             break;
//         }
//         console.log(i);
//     }
// }

// the continue is used to skip the particular iteration which satisfies our condition
// other iterations will be continued.

// for (let i = 0; i < 20; i++) {
//     if (i % 2 == 0) {
//         if (i == 12) {
//             continue;
//         }
//         console.log(i);
//     }
// }
