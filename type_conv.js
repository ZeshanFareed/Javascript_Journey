///////////// Type Convertion Implicit //////////

let num1 = 10;
let num2 = "10";

console.log(num1 + num2)

console.log(num1*num2)
console.log(num1-num2)

console.log("hello" - 20)  // only plus pr concat another is NaN


////////////// Explicit ////////////////////////

// let a = '10.12';
// let c = "120zbs"

// console.log(typeof a)

// let a1 = parseInt(c)
// let b1 = parseFloat(c)
// let c1 = Number(c)  //parse int flaot dono pr kam krta hy

// console.log(a1, typeof a1)
// console.log(b1, typeof b1)
// console.log(c1)   //Agar string ke andar koi non-numeric character ho (jaise "zbs"), to conversion fail ho jata hai.



////////// Template literal /////////////
let q = 10

console.log(`your number is ${q}`)


console.log(
    `
    1 name
    2 fname
    `
)


////////// Symbol -> unique Identify /////////

let value1 = 33
let value2 = 33

let result = Symbol(value1)
let result1 = Symbol(value2)

console.log(result == result1)



/////////// Array ////////////////
l = [1,2,3,4,5,6]

console.log(l, typeof l)


/////////// Object //////////////
obj = {
    name : "ALi",
    password : 123
}

console.log(obj)



// Declare two variable a=5 and b=10. and swap their value using third variable 
        let a = 5;
        let b = 10;
        let temp;


        temp = a    // temp = 5
        a = b     // a = 10
        b = temp  // b = 5

        console.log("Value of A is", a)
        console.log("Value of B is", b)

// Declare two variable a=5 and b=10. and swap their value without using third variable 

        let number1 = 5
        let number2 = 10

        number2 = number2 - number1
        number1 = number2 + number1

        console.log("VAlue of Number 1 : " + number1)
        console.log("VAlue of Number 2 : " + number2)


// Declare two variable a=5 and b=10. and swap their value without using third variable with Multiplication

      let z = 5
      let e = 10

      z = z * e // z=50
      e = z/e  // e=5
      z = z / e // z=10

      console.log("VAlue of Z : " + z)
      console.log("VAlue of E : " + e)
     

//////////////////grater than problem/////////////////

     let a1 = 10;
     let b1 = 20
     let c1 = 5

     console.log(a1<b1<c1)



//////////////// AND operator /////////////////////

    let username = "code";
    let password = 1234;

    console.log(username == "code" && password == 123)



/////////////// CONCATINATE /////////////////////
   
   let str = "Xeeeshan";
   let str2 = "fareed";

   console.log(str + str2)
   
   str += "Khan";
   console.log(str)

   console.log(str + 10)



//////////////// Ternary Operator ///////////////

  let age = 20;

  let output = (age >= 18) ? "Adult" : "Minor";
  console.log(output)


//////////////// Switch CAse  /////////////////

  let lights = "yellow";

  switch(lights)
  {
    case "red":
        console.log("Stop")
        break;
    case "yellow":
        console.log("Ready")
        break;
    case "green":
        console.log("Go...")
        break;
    default:
        console.log("Invalid")           
  }