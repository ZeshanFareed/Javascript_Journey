
///////////////// EMpty Array //////////////
// const cars = [];
// cars[0]= "Saab";
// cars[1]= "Volvo";
// cars[2]= "BMW";

// for(let car of cars)
// {
//     console.log(car);
// }


// /////////////// Access Array //////////////
// let l = [1, 2, 3, 4, 5]
// let l2 = l[3]
// console.log(l2)



// ///////////// array in array /////////////

// let array = [1, 2, 3, 4, ["eisa", "xeeshan"]]
// array2 = array[4]
// console.log(array2)
// console.log(array[4][1])


// ////////////// find Length ///////////////

// let l3 = array.length
// console.log(l3)



// console.log()

// //////////// for loop access ///////////////
// user = ["xeeshan", "rooshan", "roooshiii"]
// let t = user.length;
// console.log("length " + t)

// for(let i=0; i<t; i++){
//     console.log(i, user[i])
// }



// console.log()
// console.log("reverse an array")
// ////////////// reverse an array //////////////////
// for (j = t-1; j>=0; j--){
//     console.log(j, user[j])
// }



// console.log()
// /////////////// total sum of array ////////////////
// let l1 = [1, 2, 4, 5, 8, 9]
// let sum = 0;

// for (let v of l1){
//     sum = sum + v
//     console.log(v)
// }
// console.log(sum)



// console.log()
// /////////////// find even number in the array /////////
// let list = [12, 15, 27, 34, 99, 84, 74]

// for (let e of list){
//     if (e % 2 == 0){
//         console.log(e)
//     }
// }



// console.log()
// ////////////////// change in array //////////////////
// let w = [1, 2, 4, 5]
// console.log(w)
// w[2] = 3
// console.log(w)



// console.log()
// ////////////////////////////////////////////////////
// console.log("insert data in the array")

// let q = [1, 2, 4, 5]
// q.push(6)    // push last mein add krta hy 
// q.push(7,8,9)
// console.log(q)




// console.log()
// ////////////////////////////////////////////////////
// console.log("insert without built-in function")

// let array = [1, 2, 4, 5]
// let addElement = 6;
// let newArr = []

// for (let i=0; i<array.length; i++){
//     newArr[i] = array[i]    // newArr[1,2,3]
// }

// newArr[array.length] = addElement;  // newArr mein value add hongi like newArr[4] = 6
// console.log(newArr)





// console.log()
// ////////////////////////////////////////////////////
// console.log("remove last element in array")

// let q = [1, 2, 3, 4, 5]
// console.log(q.pop())   // pop last element remove krta hy 
// console.log(q)




// console.log()
// ////////////////////////////////////////////////////
// console.log("remove without built-in fun.")

// let array = [1, 2, 3, 4, 5]
// let newArr = []
// let index = 0;

// for (let i=0; i<array.length-1; i++){
//     newArr[i] = array[i]    // newArr[1,2,3]
    
// }
// console.log(newArr)




// console.log()
// ////////////////////////////////////////////////////
// console.log("remove some specific element")

// let array = [1, 2, 3, 4, 5]
// removeELement = 3
// let newArr = []
// let index = 0;

// for (let i=0; i<array.length; i++){
//     if(array[i]!== removeELement){
//         newArr[index] = array[i]
//         index++;
//     }
     
// }
// console.log(newArr)




// console.log()
// ////////////////////////////////////////////////////
// console.log("remove first element in array")

// let q = [1, 2, 3, 4, 5]
// console.log(q.shift())  // split first element remove krta hy 
// console.log(q.shift())  // another element remove
// console.log(q)




// console.log()
// //////////////////// Use of Unshift /////////////////////////
// console.log("Add first element in array")

// let q = [1, 2, 3, 4, 5]
// q.unshift(11)  // split first element remove krta hy  
// console.log(q)




// console.log()
// //////////////////// splice method /////////////////////////
// console.log("remove add replace element form any position")

// let q = [1, 2, 3, 4]
// q.splice(2,1)  // 2 -> index , 1 -> kitny remove krny hy 
// console.log(q)


console.log()
//////////////////// splice method /////////////////////////
// console.log("add element form any position")

// let q = [1, 2, 3, 4]
// q.splice(2,0, 4,8)  // 2 -> index , 2 -> delete count
// console.log(q)





// replace element
// console.log("replace element form any position")
// let arr = [10, 20, 30, 40, 50];
// arr.splice(1, 2, 21, 22); // index 1 se 2 elements delete aur 21,22 add
// console.log(arr);


// return value
// splice() jo elements delete kare usko return karta hai.
let arr = [1,2,3,4,5];
let removed = arr.splice(2, 2);
console.log(removed); // [3,4]
console.log(arr);
