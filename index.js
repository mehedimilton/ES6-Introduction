// var name = 'Mehedi';
// function test() {
//   var name = 'hasan';
// }
// test();
// console.log(name);
//-------------
// if (true) {
//   var age = 18;
// }
// console.log(age);
//-----------------
// if (true) {
//   let age2 = 18;
// }
// console.log(age2);
//------------------
// const age = 27;
// age = 13;
// console.log(age);
//-------------------

// const user = { name: 'jahn' };
// user = { name: 'Doe' };
// user.name = 'Hasan';

// console.log(user);
//---------Arrow function--------

//Normal function
// function multiply(x, y) {
//   return x * y;
// }

// function setNameId(id, name) {
//   return {
//     id: id,
//     name: name,
//   };
// }
// console.log(setNameId(2011, 'Mehedi'));

//Expresion Function
// var multiply = function (x, y) {
//   return x * y;
// };
// console.log(multiply(10, 7));

//Arrow Function
// const multiply = (x, y) => {
//   return x * y;
// };

// console.log(multiply(10, 7));
// const setNameId = (id, name) => ({ id: id, name: name });
// console.log(setNameId(20144, 'Hasan'));

//practice
// function setGroupName(group, name) {
//   return {
//     group: group,
//     name: name,
//   };
// }
// console.log(setGroupName('science', 'Kamal'));

// const setSubName = (subject, name1) => ({
//   subject: subject,
//   name1: name1,
// });
// console.log(setSubName('Bangla', 'Karim'));
//-------default parameter---------
// function test(id, name) {
//   id ? (id = id) : (id = 2);
//   name ? (name = name) : (name = 'kamal');
//   console.log(id, name);
// }
// test(4,'Limon');

// const test = (id = 2, name = 'karim') => {
//   console.log(id, name);
// };
// test();

//TEMPLATE LITERAL

// var name = ' Mehedi';
// var age = 23;
// console.log(`my name is ${name} and i am ${age} years old`);

//OBJECT LITERALS

var name = 'Mehedi';
var age = 23;

// var user = {
//   name: name,//ES5
//   age: age,
// };
// console.log(user);
// let user = {
//   name,
//   age,//ES6
// };
// console.log(user);

// var calculate = {
//   multiply: function (x, y) {
//     return x * y;//normal
//   },
// };

let calculate = {
  multiply(x, y) {
    return x * y; //es6
  },
};
console.log(calculate.multiply(20, 3));
