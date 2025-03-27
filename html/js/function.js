//A Javascript function is a block of Javascript code that performs a tastk or calculates the value.
//function declaration

let person1 = {
    name1: 'Navin',
    age: 20
}

function printUserName() {


    console.log("Hello everyone", person1.name1, person1.age);
    console.log(typeof (person1.age));

}



printUserName();

function printvalue(uname = 'Kavin', uage = 25) {
    console.log("hello everyone", uname, uage);
}

printvalue('Navin', 20);
printvalue('kevin', 22);
printvalue('Ram', 22);
printvalue(undefined);
// if we didnot pass the value for the parameter here for eg., uage is not passed in case of Som
// default the program will the undefined in the place of uage, to change that we can give our own default value in the function parameter eg., uage=25.
printvalue(undefined, 36);
//if we want only to pass the second paramtere age by leaving the first one then we should use undefined function
//so that the default value in the function will be executed.

printvalue(undefined, 36);
//if the default value kavin uname is not assigned then the undefined is printed.

//in the above examples we print the default undefined examples for the functions here we see for variables.
let unique = 'somestring';
let value2 = unique || 'assignedstring';
console.log(value2);
//here as the unique value is null so the value2 is assigned as the assignedstring.
let unique1 = null;
let value1 = unique1 || 'assignedstring';
console.log(value1);