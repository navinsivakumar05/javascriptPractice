// //SCOPE OF VARIABLES

// // VAR - FUNCTION SCOPE
// function outerfunction() {
//     if (true) {
//         var functionvar = " i am variable";
//         console.log(functionvar);
//     }
//     console.log(functionvar);

// }
// outerfunction();
// by using the var keyword we can acces the value within its function block .


// function blockscoped() {
//     if (true) {
//         let blockvariable = "i am block variable";
//         console.log(blockvariable);
//         const blockvariable1 = " i am a const variable";
//         console.log(blockvariable1);
//     }
//     console.log(blockvariable);
//     //if the value of the let, const is declared inside the block then it cannot be accesed outside that particular block.
//     console.log(blockvariable1);
// }
// blockscoped();

// var globalvariable = " i am accessible globally ";
// let blockscoped = "i am let variable";
// const blockscoped1 = "i am const variable";

// console.log(window.globalvariable);
// console.log(window.blockscoped);
// console.log(window.blockscoped1);

// // only the variables of the var keyword are accesible and visible in the all places, where the let,const variables are only present in the script.

// var a = 100;
// let b = 200;
// const c = 300;

// function globalvaraccess() {
//     var a = 102;
//     let b = 203;
//     const c = 303;

//     function innerfun() {
//         var a = 10;
//         let b = 20;
//         const c = 30;
//         console.log(a + b + c);
//     }
//     innerfun()
//     console.log(a + b + c);
// }
// globalvaraccess();
// console.log(a + b + c);


// var a = 100;
// let b = 200;
// const c = 300;

// function globalvaraccess() {
//     // var a = 102;
//     // let b = 203;
//     // const c = 303;

//     function innerfun() {
//         // var a = 10;
//         // let b = 20;
//         // const c = 30;
//         console.log(a + b + c);
//     }
//     innerfun()
//     console.log(a + b + c);
// }
// globalvaraccess();
// console.log(a + b + c);

// // this above is known as scope chaining.