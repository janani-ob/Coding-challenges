//Hoisting is a phenomenon that accessing some variables and before even initializing or putting some values into them without getting error.
//placing the code snippetes in different parts of the program and the execution of ot gave a ckear view of what is hoisting in javascipt.

var x=7;
function getName(){
    console.log("Namaste Javascript");
}

getName();
console.log(x);


// also the demo of call stack has been teached, which was really interesting.