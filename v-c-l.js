//VAR LET CONST

var car = "alto";
console.log(car);

//REASSIGNMENT POSSIBLE
car = "xyz";
console.log(car);

var car = "suzuki";
console.log(car);

//REASSIGNMENT NOT POSSIBLE
// let a = 10;
// let a = 12;

// VAR IS FUNCTION SCOPED

function getSum() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log("Out side for loop : ", i);
  //Out side for loop :  10
}

//LET IS BLOCK SCOPED

function get() {
  if (true) {
    let value = 10;
  }

  console.log(value);
  //ReferenceError: value is not defined
}
//get();
//getSum();

//CONST DATA TYPE IT CAN"S CHANGE BUT STRUCTURE DOES

const abc = {
  a: "nikunj",
  b: "raj",
  c: function abc() {
    return hellloo;
  }
};

console.log(abc);

//change data in structure

abc.a = "raj";
console.log(abc);

// NOTE : use const as much as posssible also u can use let and avoid using var

//-------------------------------------------------------------------------------------------------------
//ARROW FUNCTION
// function welcome(name) {
//   return `Welcome ${name}`;
// }

const ss = () => "hello this is arrow function";
console.log(ss());
const welcome = name => `Welcome ${name}`;
console.log(welcome("john"));

// const a = (a, b) => {
//   "hello";
//   return a + b;
// };

// console.log(a());

//---------------------------------------------------------------------------------------------------------

//Object DESTRUCTRING

// const address = {
//   street: "abc",
//   city: "city",
//   country: ""
// };

// // const street = address.street;
// // const city = address.city;
// // const country = address.country;

// //ES6 - Object destructur

// const { city: ct } = address;

// console.log(ct);

//--------------------------------------------------------------------------------------------------------
//SPREAD OPERATOR

// const a = [1, 2, 3, 4, 5];

// const b = [7, 8, 9, 20];

// const sum = a.concat(b);

// console.log(sum);

// //Es6

// const sp = [...a, "new", ...b, "add"];

// console.log(sp);
//applies on object also

//-------------------------------------------------------------------------------------------------------------------
//MAP
//forEach() does not mutate the array on which it is called. (However, callback may do so).
//map() does not mutate the array on which it is called (although callback, if invoked, may do so).
//----------------------------------------------------------------------------------------------------------------------

// const a = ["1", "2", "3", "4", "5", "6"];
// const abc = a.map(number => `<li>${number}</li>`);
// console.log(abc);

// const programming = [
//   { name: "Pyhton", trending: "yes" },
//   { name: "Java", trending: "No" },
//   { name: "React", trending: "hell yes" }
// ];

// const pg = programming.map(a => `<li>${a.name}</li><li>${a.trending}</li>`);

// console.log(pg);

// const numbers = [1, 2, 3, 4, 5, 6];

// const sum = numbers.map(a => 1 + a);

// console.log("numbers:  ", numbers);
// console.log("sum : ", sum);
//--------------------------------------------------------------------------------------------------------------------------------

//Filter
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const fitems = items.filter(function it(item) {
  if (item % 2 == 0) {
    return true;
  }
  return false;
});

//const fitems = items.filter(item => item % 2 == 0);

console.log(fitems);

const employee = [
  { name: "raj", des: "dev" },
  { name: "shlok", des: "designer" },
  { name: "bhargav", des: "tester" },
  { name: "yash", des: "dev" },
  { name: "Nikunj", des: "dev" }
];

// const developer = employee.filter(function data(da) {
//   if (da.des == "dev") {
//     return true;
//   }
//   return false;
// });

const developer = employee.filter(da => da.des == "dev");

console.log(developer);

//-------------------------------------------------------------------------------------------------

//CALLBACKS
//SYNC - ASYNC

function one() {
  console.log("this is one");
}
function two(callback) {
  setTimeout(() => {
    console.log("this is two");
    callback();
  }, 0);
}

//JS hnadle it in stack and queue way!!

function three() {
  console.log("this is three");
}

//one();
//two(three);

//--------------------------------------------------------------------------
//PROMISES

//const promise = new Promise((resolve, reject) => {});
//console.log(promise);--------PENDING , VALUE - undefined

//THREE STATE OF PROMISE
//Pending - Initial state before being resolved or rejected
//Fulfilled - Successful operation, promise has resolved
//Rejected - Failed operation, promise has rejected

const promise = new Promise((resolve, reject) => {
  resolve("We did it!");
  //reject("error");
});
//console.log(promise);

//----------------------------------------------------------------

function getUsers(onSuccess) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Handle resolve and reject in the asynchronous API
      if (onSuccess) {
        resolve([
          { id: 1, name: "Jerry" },
          { id: 2, name: "Elaine" },
          { id: 3, name: "George" }
        ]);
      } else {
        reject("Failed to fetch data!");
      }
    }, 1000);
  });
}

getUsers(false)
  .then(data => console.log(data))
  .catch(err => console.log(err));

//-------------------GOT FETCH API---------------------------------

// fetch("https://api.got.show/api/show/characters/")
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

//----------------------------------------------------
//async-await provides you to handle it in synchroneus way
// to handle asynchronous code in a manner that appears synchronous.

async function getUser() {
  return {};
}

console.log(getUser());

//------------------------------------------------------------------------------

async function getUser() {
  //------SYNCHRONUS WAY--------
  const response = await fetch("https://api.github.com/users/octocat");
  const data = await response.json();

  //--------ERROR HANDLING USING TRY CATCH---------------------------

  console.log(data);
}

getUser();

//------------------FINISH---------------------------------------------------------

//create-react-app is an npm package that is expected to be run only once in a project's lifecycle. Hence, it is preferred to use npx to install and run it in a single step.

getUser();
