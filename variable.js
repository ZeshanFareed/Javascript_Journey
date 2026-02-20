// // let variable 
// let a = 10;
// let b = 10;

// let z = a + b;
// console.log(z)



// // let variable change 
// let name = "Xeeshan";
// name = "Rooshan";

// console.log(name)



// // let variable not access outside the scope
// {
//     let num = 1
// }
// //console.log(num)  // we cannot access outside




// // const variable
// const number = 21;
// // number = 22;   // const variable cannot change
// console.log(number)  




// // const variable outside scope not access
// {
//     const num1 = 12;
// }
// // console.log(num1) 


// // var variable
// var v = 10;

// {
//     var v = 2;  // var redecalre kr sakty hy
// }

// console.log(v)  //outside the scope accessible hy 







// ///////////////////////////// Data types check //////////////////////////////

// // integer 
// let int = 10;
// console.log(typeof(int));


// // string
// const string = 'xeeshan';
// console.log(typeof(string));


// // string as an object
// let y = new String("John");
// console.log(typeof(y))   // type shoe object


// // boolean
// let x = true;
// console.log(typeof(x));


// // object
// let obj = {
//     name : "xeeshan",
//     age : 21
// }

// console.log(typeof(obj))



// // array 
// let arr = [1,2,3,4,5]
// console.log(typeof(arr));


// // date 
// const dt = new Date(2026,1,8);  // year/month/date
// const dt1 = new Date("2026,1,8");
// console.log(dt)
// console.log(typeof(dt1));


// // undefined
// let A;
// console.log(typeof(A));


// // Null
// let r = null;
// console.log(typeof(r));


// // symbol -> A unique and primitive identifier
// let fname = Symbol("xeeshan");
// let lname = Symbol("xeeshan");

// console.log(fname == lname)
// console.log(typeof(fname));





// ////////////////////// Assignment Operator ////////////////
// let g = 10;

// g += 5;
// console.log(g)

// g -= 5;
// console.log(g)

// g *= 2;
// console.log(g)

// g %= 2;
// console.log(g)



// value in the string
let c = 10;
console.log(`Number is ${c}`);


// extract string character
let st = "xeeshan";
console.log(st.at(3))
console.log(st.charAt(0))


// string concat
let string1 = "xeeshan";
console.log(string1.concat(" Fareed"))



/////////////////// extract string part ///////////////////////

// slice slice(start, end)    // 1 step before end
// substring(start, end)
// substr(start, length)

let text = "Apple, Banana, Kiwi";
let part = text.slice(7,13);
console.log(part)


let z = "zeeshan";
console.log(z.slice(2 , 3))

let z1 = "zeeshan";
console.log(z.substring(0 , 3))

let z2 = "zeeshan";
console.log(z.substr(1 , 3))



// replace in string
let text1 = "Apple, Banana, Kiwi";
console.log(text1.replace("Banana", 2))


// replace all
let txt = "I love cats. Cats are very easy to love. Cats are very popular."
console.log(txt.replaceAll("cats","dog"))



// split string ko tor kr array bana deta hy 
let text5 = "I love JavaScript";
let arr = text5.split(" ");
console.log(arr);


// string ka index find krna ho 
let naam = "xeeshan";
console.log(naam.indexOf("s"))


// search method
let textt = "Please locate where 'locate' occurs!";
console.log(textt.search("python"));
