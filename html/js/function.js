// A Javascript function is a block of Javascript code that performs a tastk or calculates the value.
//function declaration

// let person1 = {
//     name1: 'Navin',
//     age: 20
// }

// function printUserName() {


//     console.log("Hello everyone", person1.name1, person1.age);
//     console.log(typeof (person1.age));

// }



// printUserName();

function printvalue(uname, uage = 25) {
    console.log("hello everyone", uname, uage);
}

printvalue('Navin', 20);
printvalue('kevin', 22);
printvalue('Ram', 22);
printvalue('Som');
// if we didnot pass the value for the parameter here for eg., uage is not passed in case of Som
// default the program will the undefined in the place of uage, to change that we can give our own default value in the function parameter eg., uage=25.
