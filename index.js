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

// var name = 'Mehedi';
// var age = 23;

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

// let calculate = {
//   multiply(x, y) {
//     return x * y; //es6
//   },
// };
// console.log(calculate.multiply(20, 3));

//---------spread operator----------

// var arr = [3, 4, 5];
// var arr2 = [1, 2, ...arr, 6, 7];

// console.log(arr2);

// var array = [1, 2, 3, 4];
// var array2 = [...array];
// console.log(array2);

// var arr = [1, 2, 3, 4, 5, 6, 7];
// var arr2 = [5, 6, 7];

// arr3 = [...new Set([...arr, ...arr2])];
// console.log(arr3);

// var num = [1, 2, 3, 4, 5];

// function sum(a, b, c, d, e) {
//   return a + b + c + d + e;
// }
// console.log(sum(...num));

//---------REST OPERATOR----

// const test = (name, age, ...data) => {
//   console.log(`name:${name} age:${age}`);

//   for (let i = 0; i < data.length; i++) {
//     console.log(data[i]);
//   }
//   // console.log(data);
// };
// test('Mehedi', 34, 3, 55, 43, 2, 42);

// function sum(...numbers) {
//   let total = 0;
//   for (const number of numbers) {
//     total += number;
//   }
//   return total;
// }
// console.log(sum(10, 20, 40));

//-----------Destructuring-------------

// let user = [555, 'Mehedi Hasan', 27];

// let id = user[0];
// let name = user[1];
// let age = user[2];
// // let [id, name, age] = user;
// console.log(`Hi!..i am ${name} my id is ${id} and i am ${age} years old`);

// let users = {
//   ids: 2312,
//   names: 'Morshed Jahan',
//   ages: '21',
//   address: {
//     currentAddress: 'Dhaka',
//     education: {
//       SSC: 2013,
//       HSC: 2015,
//     },
//   },
// };

// let {
//   ids,
//   names,
//   ages,
//   address: {
//     currentAddress,
//     education: { SSC, HSC },
//   },
// } = users;

// console.log(
//   `my brother id ${ids}  his name is ${names} and He is ${ages} years old and He lives in ${currentAddress} his education Qualification ssc pass in ${SSC} and hsc pass in ${HSC}`
// );

//imediatly invoked function expression
//Expession function
// let test = (function (a, b) {
//   console.log(a, b);
// })(10, 5);

//declaration function
// (function tst() {
//   console.log('Hello World');
// })();

// {
//   let test = function () {
//     console.log('Hello World!...');
//   };
//   test();
// }
