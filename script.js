// "use strict";
// let name = `john`;

// alert("hello i am  ${name}");
// alert(`hello i am ${name}`);

// let isgreater = 4 > 1;

// alert(isgreater);

// let age = `so the value is nested? ${`first next, ${`second nest`}`};`;
// alert(age);

// alert(typeof age);

// name = prompt("whats your name?", "Ayush");

// let isBoss;
// isBoss = confirm(`are you the Boss? ${2 + 2}`);
// alert(isBoss);

// Answer = +prompt("Enter a number");
// if (Answer > 0) {
//   alert(1);
// } else if (Answer < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

// let result = a + b < 4 ? "Below" : "over";

// login = prompt("Employee,hello,Director,Greetings,no login,''");

// let message =
//   login == "Employee"
//     ? "hello"
//     : login == "Director"
//     ? "Greetings"
//     : login == ""
//     ? "no login"
//     : "";

// alert(message);

// NULLISH

// let firstName = null;
// let lastName = null;
// let nickname;

// alert(firstName ?? lastName ?? nickname ?? "anonymous");

// Loops

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) alert(i);
//   else continue;
// }
// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   ++i;
// }

// let num;
// do {
//   num = +prompt("enter a number greater than 100", 0);
// } while (num <= 100 && num);

// n = +prompt("enter the value of n: "); //prime numbers from 2 uptill a specific number
// nextNum: for (let i = 2; i <= n; i++) {
//   for (let j = 2; j <= Math.sqrt(i); j++) {
//     if (i % j == 0) {
//       continue nextNum;
//     }
//   }

//   alert(i);
// }
// Switch Statement
// let a = 2 + 1;
// switch (a) {
//   case 3:
//     alert("too small");
//     break;
//   case 5:
//   case 4:
//     alert("exactly");
//     break;
// }
// convert switch to if
// if (browser == "Edge") {
//   alert("you've got the Edge!");
// } else if (
//   browser == "Chrome" ||
//   browser == "Safari" ||
//   browser == "Firefox" ||
//   browser == "Opera"
// ) {
//   alert("okay browser you have");
// } else {
//   alert("we hope the webpages loads for you!");
// }
//////////convert if into switch
// let a = +prompt("a?", "");
// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert("2, 3");
//     break;
// }
//////////////////    FUNCTIONS
// function showMessage() {
//   alert("Hello World!");
// }
// showMessage();
// showMessage();

// function showMessage(from = "Anonymous", text = "no text given") {
//   from = "*" + from + "*";
//   alert(from + ": " + text);
// }

// let from = "Anna";
// showMessage("hello!");
// alert(from);

/// using '?' or '||'

// function checkAge(age) {
//   return age >= 18 || confirm("did u take permission");
// }

// checkAge(10);

// function checkAge(age) {
//   return age >= 18 ? true : confirm("took permission?");
// }

// function min(a, b) {
//   return a > b ? b : a;
// }
// alert(min());

// function pow(x, n) {
//   let result = 1;
//   if (checkN(n)) {
//     for (let i = 0; i < n; i++) {
//       result = result * x;
//     }
//     return result;
//   } else {
//     return "error n is not a natural number";
//   }
// }

// function checkN(n) {
//   return n > 0;
// }

// x = +prompt("enter the value of x:");
// n = +prompt("enter the value of n:");

// alert(pow(x, n));

//////////////////////////////////////////// Function Expressions
// function ask(question, yes, no) {
//   confirm(question) ? yes() : no();
// }

// ask(
//   "do you agree?",
//   function () {
//     alert("You agreed.");
//   },
//   function () {
//     alert("You canceled the execution.");
//   }
// );

// let age = prompt("What is your age?", 18);

// // conditionally declare a function
// if (age < 18) {
//   function welcome() {
//     alert("Hello!");
//   }
// } else {
//   function welcome() {
//     alert("Greetings!");
//   }
// }

// // ...use it later
// welcome(); // Error: welcome is not defined

// let age = +prompt("What is your age?:");
// let welcome;
// if (age < 18) {
//   welcome = function () {
//     alert("hello");
//   };
// } else {
//   welcome = function () {
//     alert("Greetings");
//   };
// }

// welcome();
//////////////////////// Arrow Functions ////////////////
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "do you agree?",
//   () => alert("You agreed"),
//   () => alert("you canceled")
// );

// function pow(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

// let x = prompt("x?", "");
// let n = prompt("n?", "");

// if (n <= 0) {
//   alert(
//     `Power ${n} is not supported, please enter an integer number \
//     greater than zero`
//   );
// } else {
//   alert(pow(x, n));
// }

/////////  Objects
// let user_ = new Object(); //object contructor
// let user_ = {}; //"object literal" syntax

// let name = "Ayush";
// let age = 20;
// alert(user.name);

// let user = {
//   name: "john",
//   age: 30,
// };

// alert("name" in user);

///// for....in loop
// let user = {
//   name: "john",
//   age: 30,
//   isAdimind: true,
// };

// for (let i in user) {
//   alert(i + ": " + user[i]);
// }
/// task: https://javascript.info/object#tasks

// let user = {};
// user.name = "Ayush";
// alert(isEmpty(user));

// function isEmpty(obj) {
//   for (i in obj) {
//     return false;
//   }
//   return true;
// }

////// task: https://javascript.info/object#sum-object-properties

// let salaries = {
//     Jogn: 100,
//     Ann: 160,
//     Pete: 130,
// };

// function NetSalaries(obj) {
//   let sum = 0;
//   for (let i in obj) {
//     sum += obj[i];
//   }
//   return sum;
// }

// alert(NetSalaries(salaries));
////// objects are referenced by address.

// let user = { name: "john" };
// let userref = user;

////////////// cloning objects
// let user = {
//   name: "john",
//   age: 80,
// };

// Clone = {};

// Object.assign(Clone, user);
// alert(Clone.name);
///////////////////////// Merging Objects
// let user = {};
// let name = { name: "Ayush" };
// let age = { age: 20 };

// Object.assign(user, name, age);
// alert(`${user.name}, ${user.age}`);
///////////// Structured cloning (deep cloning)
// function user(name) {
//   this.name = name;
//   this.IsAdmin = false;
// }

// newUser = new user("john");
// alert(newUser.name);

// let clone = structuredClone(user);
// alert(clone.size.length);
///////////////////////////////// Methods in Contructor

// function User(name) {
//   this.name = name;
//   this.sayHi = function () {
//     alert("My name is: " + this.name);
//   };
// }

// let john = new User("John");
// john.sayHi();

///// Two Functions - One Object

// let a = {};
// function A() {
//   return a;
// }

// function B() {
//   return a;
// }

// alert(new A() == new B());
/////// Create new Calculator ///////////////////

// function Calculator() {
//   this.read = function () {
//     this.a = +prompt("Enter 1st number:");
//     this.b = +prompt("Enter 2nd number:");
//   };
//   this.sum = function () {
//     return this.a + this.b;
//   };
//   this.mul = function () {
//     return this.a * this.b;
//   };
// }

// calc = new Calculator();
// calc.read();
// alert("Sum= " + calc.sum());
// alert("Mul= " + calc.mul());

///////////////////////////////////////////////////////
// function Accumu(startValue) {
//   this.value = startValue;
//
//   this.read = function () {
// value = +prompt("Enter a value: ");
// this.value = this.value + value;
//   };
//
//   this.display = function () {
// alert("current Value: " + this.value);
//   };
// }
//
// acc = new Accumu(1);
// acc.read();
// acc.read();
// acc.display();

//////////////// Symbols
// let a = Symbol.for("hey lol");
// alert(Symbol.keyFor(a));

/////////////////// Object to primitive Conversions

// obj = {
//   name: "John",
//   money: 1000,

//   [Symbol.toPrimitive](hint) {
//     return hint == "string" ? `name: "${this.name}"` : this.money;
//   },
// };

// alert(obj);
// alert(+obj);
// alert(obj + 500);

// obj = {
//   name: "john",
//   money: 1000,
//   toString() {
//     return this.name;
//   },
//   valueOf() {
//     return this.money;
//   },
// };

// alert(obj);
// alert(+obj);
// alert(obj + 1000);
