
// har element pay function apply hoga
const myArray = [1,2,3,4]
let map_array = myArray.map ((value,index)=>
{
    return value+5;
});

console.log(map_array)



// another example
// let numbers = [1, 2, 3, 4];

// let result = numbers.map(num => num * 2);

// console.log(result);



///////////////////////// filter /////////////////////
// filter() array se sirf woh elements nikalta hai jo condition pass karein

// let numbers = [10, 25, 40, 15, 60];

// let result = numbers.filter(num => num > 20);

// console.log(result);




/////////////////////// reduce //////////////////////
// reduce() poore array ko “ek single value” mein convert kar deta hai

// let numbers = [10, 20, 30, 40];

// let sum = numbers.reduce((total, num) => {
//     return total + num;
// }, 0);

// console.log(sum);



/////////////////////////// find //////////////////////
// find = “pehla matching item dhoondo, double value return nhi krta 
let numbers = [10, 25, 40, 15, 60];

let result = numbers.find(n => n > 20);

console.log(result);




////////////////////////////// task ///////////////////////////////
// give an array of number return a new array with each number doubled

let arr = [1,2,3,4]

let rslt = arr.map(num => num * 2)
console.log(rslt)


/////////////////////////// filter even number //////////////////////

let filt = [1,2,3,4,5,6];

let evenNo = filt.filter(num => num % 2 === 0);

console.log(evenNo);


////////////////////// find student whose marks less than 30 ////////////

const students = [
    { name: "xeeshan", marks: 31 },
    { name: "eisa", marks: 30 },
    { name: "imran", marks: 24 }
];

let std = students.find(s => s.marks < 30);
console.log(std);

