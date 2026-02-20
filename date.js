
// current date and time
let now = new Date();
console.log(now);


// byself date
const dt = new Date("2022-03-25");
console.log(dt)


// date string
const sd = new Date("October 14, 2014 11:13:00")
console.log(sd)


// Date components se (year, month, day...)
let d2 = new Date(2014, 9, 14); // month = 0-based → 0=Jan, 9=Oct
console.log(d2);


// Get Methods (Read date/time)
let d = new Date("October 14, 2014 10:30:15");

console.log(d.getFullYear());  // 2014
console.log(d.getMonth());     // 9 (0-based, October)
console.log(d.getDate());      // 14
console.log(d.getDay());       // 2 (0=Sun, 1=Mon, ... 2=Tue)
console.log(d.getHours());     // 10
console.log(d.getMinutes());   // 30
console.log(d.getSeconds());   // 15
console.log(d.getMilliseconds()); // 0



let t = new Date("October 14, 2014");

t.setFullYear(2020);
t.setMonth(0); // January
t.setDate(1);

console.log(t); // Wed Jan 01 2020




//6 numbers specify year, month, day, hour, minute, second:

const num = new Date(2018, 11, 24, 10, 33, 30);
console.log(num)




console.log(new Date("03/25/2015"))