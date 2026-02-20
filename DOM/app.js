let headingElement = document.getElementById("heading");
let paragraphElement = document.getElementById("paragraph");

console.log(headingElement.innerHTML);
console.log(paragraphElement.innerText);


////////////// query selector(only one target element) //////////////
let tar_input = document.querySelector("#name");  // target id
console.log(tar_input);

let targ_input = document.querySelector(".input");  // target class
console.log(targ_input);

let target_input = document.querySelector("#email");  // target tag
console.log(target_input.placeholder);  // access placeholder


let find_type = document.querySelector("#email");
console.log(target_input.type);  // access type of input


target_input.placeholder = "Enter your email";  // change placeholder
target_input.type = "password";  // change type

console.log(tar_input.value);  // access value


///////////////////// query selector all (multiple element target) /////////////////////

let allListElement = document.querySelectorAll("li");
console.log(allListElement);


console.log(allListElement[0].innerHTML); // access one by one element of list
console.log(allListElement[1].innerText);

// access all of element at a time
allListElement.forEach((items, index) => {
    console.log(items.innerHTML);
})



//////////////////////////// Event //////////////////////
// let target_input_pass = document.querySelector("#pass");
// console.log(target_input_pass.type);  //type password hy

// let target_btn = document.querySelector("#btn");

function showInputPassword() {
    if (target_btn.innerHTML == "Show") 
    {
        target_input_pass.type = "text"   // type text kr do
        target_btn.innerHTML = "Hide"   // text Show se Hide ho jay ga
    }
    else 
    {
        target_input_pass.type = "password"   // type text kr do
        target_btn.innerHTML = "Show"   // text Show se Hide ho jay ga
    }
}




//////////////////////// AddEventListener ////////////////////////
let target_input_pass = document.querySelector("#pass");
let target_btn = document.querySelector("#btn");   // btn jispe click krna hy


target_btn.addEventListener("click",showInputPassword)
// {
//     if (target_btn.innerHTML == "Show") 
//     {
//         target_input_pass.type = "text"   // type text kr do
//         target_btn.innerHTML = "Hide"   // text Show se Hide ho jay ga
//     }
//     else 
//     {
//         target_input_pass.type = "password"   // type text kr do
//         target_btn.innerHTML = "Show"   // text Show se Hide ho jay ga
//     }
// })




