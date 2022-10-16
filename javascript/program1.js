// Leart about execution context which contains 2 phases - memory creation and code creation
// Memory execution contains all the allocated memrory of the program inside it and Code execution contains the code and the execution takes palce line by line

var n=2; //n is a variable
function square(num){ 
    var ans=num*num;
    console.log("square of the number %d is %d",num,ans);
    return ans;
}
var square2=square(n);
var square4=square(4);

// learnt about call stack 
// Call stack is a stack like structure for managing the execution context, it maintains the order of execution of the execution context (push and pop operation takes place)
// also known as execution control stack, runtime/control/machine/program stack. 