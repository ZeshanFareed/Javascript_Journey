// const obj = {
//     fname : "xeeshan",
//     lname : "fareed",
//     age : 21
// };
// console.log(obj)


// // create empty object
// const person = {};

// person.firstname = "rooshan";
// person.lastaname = "fareed";

// console.log(person)



// // cosntructor function for object
// function Person(first, last, age, eye) {
//   this.first_Name = first;
//   this.last_Name = last;
//   this.Age = age;
//   this.eyeColor = eye;
// }

// // Create a Person object
// const myFather = new Person("John", "Doe", 50, "blue");
// console.log(myFather)




// // acces the property of object
// const obj1 = {
//     fname : "xeeshan",
//     lname : "fareed",
//     age : 21
// };
// console.log(obj1["fname"])
// console.log(obj1.lname)  //or




// // add new property 
// obj1.rollNo = 35815;
// console.log(obj1)



// // delete property
// delete obj1.age;
// // delete person["age"];  // or
// console.log(obj1);



// // nested object
// const myobj = {
//     name : "ali",
//     sex : "male",
//     car:{
//         car1 : "bmw",
//         car2 : "civic",
//         car3 : "toyota"
//     }
// }

// console.log(myobj.car.car1);
// // myObj["myCars"]["car2"]; // or




// // object method
// const person1 = {
//     fname : "xeeshan",
//     lname : "fareed",
//     fullName : function()
//     {
//         return this.fname + " " + this.lname;
//     }
// };

// console.log(person1.fullName());




// // Displaying a JavaScript object
// const personn = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// let textt = personn;
// for(let x in textt)
// {
//     console.log(x,textt[x])
// }



// //  creates an array from the object value property
// // convert the only object value into array

// let v = {
//     number1 : 1,
//     number2 : 2,
//     number3 : 3,
// }

// const myArray = Object.values(v);
// console.log(myArray)



// // Object ko array of arrays mein convert kar deta hai, jahan har key-value pair ek array ke form mein hota hai.
// let persson = {
//     name: "Zeeshan",
//     age: 25,
//     city: "Bahawalpur"
// };

// let entries = Object.entries(persson);

// console.log(entries);





// // JSON.stringify() JavaScript object ko string (text) mein convert kar deta hai.
// const perrson = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// // Stringify Object
// let texxt = JSON.stringify(perrson);
// console.log(texxt)








console.log("\n-----------------------------Object Task-------------------------------")
console.log("\n-----------------------Student Record System---------------------------")
let Student = {
    name: "xeeshan",
    rollNo: 35815,
    class: "Bscs",
    marks:
    {
        math: 40,
        english: 50,
        computer: 55,
    },

    total_marks: function () {
        return this.marks.math + this.marks.english + this.marks.computer;
    },
    percentage: function () {
        return (this.total_marks() / 180) * 100;
    },
    grade: function () {

        let perc = this.percentage();

        if (perc >= 80) {
            return "A";
        }
        else if (perc >= 70) {
            return "B";
        }
        else if (perc >= 60) {
            return "C";
        }
        else {
            return "Fail";
        }
    }
}


cal_marks = Student.total_marks();
console.log("Total Marks is : " + cal_marks);

perc = Student.percentage();
console.log("Percentage is: " + perc.toFixed(2) + "%");

grad = Student.grade();
console.log("Your grade is : " + grad);







console.log("\n--------------------------Product Cart System-----------------------------")

let Product = {
    id: 35815,
    name: "xeeshan",
    price: 100,
    quantity: 10,
    
    total_price: function () {
        return this.price * this.quantity;
    },
    
    discount: function () {
        let totalPrice = this.total_price(); // call function

        if (totalPrice > 1000) 
        {
            let discountAmount = (totalPrice * 10) / 100;
            return discountAmount;
        } 
        else if (totalPrice > 500) 
        {
            let discountAmount = (totalPrice * 5) / 100;
            return discountAmount;
        }
        else 
        {
            return 0;
        }
    },

    final_price: function () {
        return this.total_price() - this.discount();
    }
};

let total_bill = Product.total_price();
console.log(Product.name + " Your Total Bill is : " + total_bill);

let disc = Product.discount();
console.log("Discount : " + disc);

let final = Product.final_price();
console.log("Final Price after Discount : " + final);





console.log("\n-----------------------Bank Account Object----------------------------------")

const Account = {
    holderName: "Xeeshan",
    balance: 1000,

    deposit: function(amount) 
    {
        if (amount > 0) 
        {
            this.balance += amount;
            return `Deposited: ${amount}, New Balance: ${this.balance}`;
        }
        else
        {
            return "Error: Invalid deposit amount!";
        }
    },

    withdraw: function(amount) 
    {
        if (amount <= 0)
        {
            return "Error: Invalid withdraw amount!";
        }
        else if (amount > this.balance) 
        {
            return "Error: Insufficient Balance";
        } else 
        {
            this.balance -= amount;
            return `Withdrawn: ${amount}, Remaining Balance: ${this.balance}`;
        }
    },

    checkBalance: function() {
        return `Current Balance: ${this.balance}`;
    }
}


let depositAmount = Account.deposit(1000);
console.log(depositAmount)

let withdrawAmount = Account.withdraw(1200);
console.log(withdrawAmount)

let total_balance = Account.checkBalance();
console.log(total_balance);





console.log("\n--------------------------------Login Task-------------------------------------")

const User = {
    username: "Xeeshan",
    password: "12345",
    isLogin: false,

    // Login method
    login: function(pass) 
    {
        if(pass === this.password)
        {
            this.isLogin = true;
            return `Login Successful! Welcome ${this.username}`;
        }
        else
        {
            return "Login Failed! Incorrect Password";
        }
    },

    // Logout method
    logout: function()
    {
        if(this.isLogin)
        {
            this.isLogin = false;
            return `Logout Successful! Goodbye ${this.username}`;
        }
        else
        {
            return "User is already logged out!";
        }
    }
}

// Usage examples
console.log(User.login("12345"));   // Correct password
console.log(User.isLogin);          // true

console.log(User.logout());         // Logout
console.log(User.isLogin);          // false

console.log(User.login("123456")); // Wrong password
