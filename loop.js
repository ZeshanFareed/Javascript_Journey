// ///////////// increment ////////////////

// for (let i = 1; i <= 10; i++) {
//     console.log(i, "xeeshan");
//     if (i == 5) {
//         break;
//     }
// }

// console.log();

// ///////////// decrement ////////////////

// for (let k = 10; k > 0; k--) {
//     console.log(k, "xeeshan");
// }

// // console.log(k) let wala variable block of code k bahir accessible nii hy woh private hy


// console.log();


/////////// Table of 2 //////////////////

// for (t=1; t<=10; t++){
//     console.log("2 * " + t + " = " + t*2 )
// }


// /////////// while loop ////////////////

// let j = 0;

// while (j <= 5) {
//     console.log(j, "Xeeshan")
//     j++;
// }

// // console.log(j)



// /////////////// iterable loop ////////////////

// w = "Xeeshan"

// for (let v of w) {
//     console.log(v)
// }

// let l = [1, 2, 4, 5, 6, 7]

// for (let z of l) {
//     console.log(z)
// }

// /////////// for 'in' used for index & key //////
// for (let x in l) {
//     console.log(x, "index")
// }

// console.log()


// /////////////// key /////////////////////
// user = {
//     naam : "Xeeshan",
//     age : 21
// }
// for (let b in user){
//     console.log(b , user[b])
// }





// for (let i=1; i<=5; i++){
//     for (let j=1; j<=i; j++){
//         process.stdout.write("*");
//     }
//     console.log()
// }




// // Upper part
// for (let i = 1; i <= 4; i++) {

//     for (let j = 1; j <= i; j++) process.stdout.write("*");

//     for (let s = 1; s <= (10 - 2*i); s++) process.stdout.write(" ");

//     for (let j = 1; j <= i; j++) process.stdout.write("*");

//     console.log();
// }

// // Middle row (special case)
// for (let i = 1; i <= 10; i++) process.stdout.write("*");
// console.log();

// // Lower part
// for (let i = 4; i >= 1; i--) {

//     for (let j = 1; j <= i; j++) process.stdout.write("*");

//     for (let s = 1; s <= (10 - 2*i); s++) process.stdout.write(" ");

//     for (let j = 1; j <= i; j++) process.stdout.write("*");

//     console.log();
// }




// Prime number check
// let n = 13;
// let count = 0;

// for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//         count += 1;
//     }
// }

// if (count == 2) {
//     console.log(n + " is prime");
// } else {
//     console.log(n + " is not prime");
// }



///////////// find perfect Number /////////

// let input = 6;
// let sum = 0; 

// for (let l=1; l<=input; l++){
//     if(input % l==0){
//         sum += l
//     }
// }
// if (sum==input){
//     console.log("Number is perfect")
// }
// else{
//     console.log("Number is not Perfect")
// }




////////////////// reversed Number ///////////////

// let num = 12345
// let reversed = 0;

// for (n=num; n>0; n=Math.floor(n/10)){
//     let digit = n % 10;
//     reversed  = reversed * 10 + digit;
// }

// console.log(reversed)



////////////// Reversed String with built-in fun ///////////
// let st = "Rooshan";

// reversed = st.split("").reverse().join("");
// console.log(reversed)



/////////////// without buid-in fun  /////////////////////

// let str1 = "Xeeshan";
// let reversedd = "";

// for (let i=str1.length - 1; i>=0; i--){
//     reversedd = reversedd + str1[i];
// }
// console.log(reversedd)


/////////////// print Number /////////////////////

let v = 0;
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= i; j++) {
        v += 1
        process.stdout.write(v + " ")
    }
    console.log()
}