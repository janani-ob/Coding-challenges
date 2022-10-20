var x=1;
a(); // a is invoked
b(); // b is invoked
console.log(x); // finally x=1 is printed

function a(){
 var x=10;
 console.log(x);
}

function b(){
  var x=100;
  console.log(x);
}


/***************Output*****************
10
100
1
 **************************************/
