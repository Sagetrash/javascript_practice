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
