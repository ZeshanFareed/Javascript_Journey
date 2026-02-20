function sayHello() {
  return "Hello World";
}

let text = sayHello();
console.log(text)



// function call mulitple times
function sayHello() {
  console.log("Hello World");
}
sayHello();
sayHello();
sayHello();
sayHello();


// add function
function add(a, b)
{
    return a + b
}

let add1 = add(2,3);
let add2 = add(4,5)
console.log("the addition is : " + add1)
console.log("the addition is : " + add2)


// code written after written will not execute
function testReturn() {
  return "Done";
  console.log("This will never run");  // will not print
}

let txt = testReturn();
console.log(txt)




// function with condition
function myFunction(x, y) {
  if (y === undefined) {
    y = 2;
    console.log(y)
  }
}

myFunction();


// function expression :> that are stored in the variable
// function name ho bhi sakta hy nii bhi
const x = function expression(f,g)
{
    console.log(f + g);
}

x(1,2);
// expression();  // show error



// anonymous function jisme function ka naam nhii hota
const greet = function() {
    console.log("Hello World");
};

greet(); // Hello World


