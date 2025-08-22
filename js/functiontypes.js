

function fname(uname) {
    console.log("i am a function" + uname);
}
fname(' Naivn');

//ANANAMOUS FUNCTION

let var2 = function () {
    console.log('i am ananamous function');
}
var2();

//ARROW FUNCTION

let fatarrow = () => {
    console.log("i am arrow function");
}
fatarrow();

//HIGHER ORDER FUNCTION
function fun1() {
    console.log("i am a higher order function");
}

function fun2() {
    console.log("i am a callback function");

}

fun1(fun2());

function add(callBack, a, b) {
    console.log(a + b);
    callBack(30, 40);
}

function sub(num1, num2) {
    console.log(num1 + num2);
}
add(sub, 60, 40);
