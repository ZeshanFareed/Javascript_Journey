
// create set
const s = new Set(["xeeshan", "fareed"])
console.log(s)


// create set and add value
const letters = new Set();

letters.add("a");
letters.add(1);
letters.add("b");
// letter.add("b") // ignore duplicates value
// console.log(letters)


// You can list all Set elements (values) with a for..of loop:
for(let l of letters)
{
    console.log(l);
}


// set types are basically object
console.log(typeof(letters))



// size peoperty (tell the number of element)
const mySet = new Set(["a","b","c"]);

console.log(mySet.size);



// The has() method returns true if a specified value exists in a set.
const letter = new Set(["a","b","c"]);

// Does the Set contain "d"?
answer = letter.has("d");
console.log(answer);



// use of forEach 
let alphabet = new Set(["xeeshan","rooshan","khan"])

alphabet.forEach(function(value)
{
    console.log(value);
});


// forEach with parameters 
let mySet1 = new Set([10, 20, 30]);

mySet1.forEach((set) => {
    // console.log("value: ", value);
    // console.log("valueAgain: ", valueAgain);  // same as value
    console.log("set: ", set);               // pura Set
});



// The values() method returns an Iterator object with the values in a Set:
const leters = new Set(["a","b","c"]);

// Get all Values
const myIterator = leters.values();

for (const entry of myIterator) {
  console.log(entry)
}


// keys() return the set of value
let mySett = new Set(["a", "b", "c"]);

console.log(mySett.values()); // values method
console.log(mySett.keys());   // keys method




//Set mein entries() method ek iterator return karta hai [value, value] pairs ka.
// Haan, dono values same hote hain, kyunki Set mein key-value concept nahi hota (ye Map mein hota hai).
let mySeet = new Set(["a", "b", "c"]);

let iterator = mySeet.entries();

for (let entry of iterator) {
    console.log(entry);
}
