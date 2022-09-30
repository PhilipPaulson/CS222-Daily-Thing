/*
alert("Hello World");
console.log("Hello World");
console.error("This is an error");
console.warn("This is a warning");

//let, const
let oldage = 30;
oldage = 31;

console.log(oldage);
let score;

score = 10;

console.log(score);

// String, Numbers, Boolean, null, undefined
const name = "John";
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

// Concatination
console.log("My name is name and I am age");
console.log("My name is " + name + " and I am age");

// Template String
console.log(`My name is ${name} and I am ${age}`);
const hello = `My name is ${name} and I am ${age}`;

console.log(hello);

const s = "Hello World";

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(""));

const s0 = "technology, computers, it, code";
console.log(s0.split(", "));

// Arrays - variables that hold multiple values
const numbers = new Array(1, 2, 3, 4, 5);

console.log(numbers);

const fruits = ["apples", "oranges", "pears", 10, true];

console.log(fruits);

const fruits0 = ["apples", "oranges", "pears"];

console.log(fruits0);
console.log(fruits0[1]);

fruits0[3] = "grapes";
console.log(fruits0);

fruits0.push("mangoes");
console.log(fruits0);

fruits0.unshift("strawberries");
console.log(fruits0);

fruits0.pop();
console.log(fruits0);

console.log(Array.isArray(fruits0));
console.log(Array.isArray("hello"));

console.log(fruits0.indexOf("oranges"));

/* multi
line
comment
*/

/*
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA",
  },
};

console.log(person);
alert(person);
console.log(person.hobbies[1]);
console.log(person.address.city);

const {
  firstName,
  lastName,
  address: { city },
} = person;

console.log(firstName);
console.log(city);

person.email = "john@gmail.com";
console.log(person);

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Denist appointment",
    isCompleted: false,
  },
];

console.log(todos);
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For
for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 0; i <= 10; i++) {
  console.log(`For Loop Number: ${i}`);
}

// While
let i = 0;
while (i < 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}

for (let i = 0; i < todos.length; i++) {
  console.log(i);
}

for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

for (let todo of todos) {
  console.log(todo);
}

for (let todo of todos) {
  console.log(todo.text);
}

for (let todo of todos) {
  console.log(todo.id);
}

// forEach, map, filter
todos.forEach(function (todo) {
  console.log(todo.text);
});

const todoText = todos.map(function (todo) {
  return todo.text;
});

console.log(todoText);

const todoCompleted = todos.filter(function (todo) {
  return todo.isCompleted == true;
});

console.log(todoCompleted);

const todoCompleted0 = todos
  .filter(function (todo) {
    return todo.isCompleted == true;
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(todoCompleted0);

const x0 = 10;

if (x0 == 10) {
  console.log("x0 is 10");
}

if (x0 === 10) {
  console.log("x0 is 10");
}

const x1 = "10";

if (x1 == 10) {
  console.log("x1 is 10");
}

if (x1 === 10) {
  console.log("x1 is 10");
}

const x2 = 20;

if (x2 === 10) {
  console.log("x2 is 10");
} else if (x2 > 10) {
  console.log("x2 is greater than 10");
} else {
  console.log("x2 is less than 10");
}

if (x0 === 10) {
  console.log("x0 is 10");
} else if (x0 > 10) {
  console.log("x0 is greater than 10");
} else {
  console.log("x0 is less than 10");
}

const x3 = 4;

if (x3 === 10) {
  console.log("x3 is 10");
} else if (x3 > 10) {
  console.log("x3 is greater than 10");
} else {
  console.log("x3 is less than 10");
}

const y0 = 10;

if (x3 > 5 || y0 > 10) {
  console.log("x3 is more than 5 or y0 is more than 10");
}

const y1 = 11;
if (x3 > 5 || y1 > 10) {
  console.log("x3 is more than 5 or y1 is more than 10");
}

if (x3 > 5 && y1 > 10) {
  console.log("x3 is more than 5 or y1 is more than 10");
}

const x4 = 6;

if (x4 > 5 || y1 > 10) {
  console.log("x4 is more than 5 or y1 is more than 10");
}

if (x4 > 5) {
  if (y1 > 10) {
    console.log("x4 is more than 5 or y1 is more than 10");
  }
}

const color = x0 > 10 ? "red" : "blue";

console.log(color);

const x5 = 11;
const color0 = x5 > 10 ? "red" : "blue";

console.log(color0);

switch (color0) {
  case "red":
    console.log("color0 is red");
    break;
  case "blue":
    console.log("color0 is blue");
    break;
  default:
    console.log("color0 is NOT red or blue");
    break;
}

switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is NOT red or blue");
    break;
}

const color1 = "green";

switch (color1) {
  case "red":
    console.log("color1 is red");
    break;
  case "blue":
    console.log("color1 is blue");
    break;
  default:
    console.log("color1 is NOT red or blue");
    break;
}

function addNums(num1, num2) {
  console.log(num1 + num2);
}

addNums(5, 4);
addNums();

function addNums0(num1 = 1, num2 = 2) {
  console.log(num1 + num2);
}

addNums0();
addNums0(5, 5);

function addNums1(num1 = 1, num2 = 2) {
  return num1 + num2;
}

addNums1(5, 5);
console.log(addNums1(5, 5));

const addNums2 = (num1 = 1, num2 = 1) => {
  return num1 + num2;
};

console.log(addNums2(5, 5));

const addNums3 = (num1 = 1, num2 = 1) => console.log(num1 + num2);

addNums3(5, 5);

const addNums4 = (num1 = 1, num2 = 1) => num1 + num2;

console.log(addNums4(5, 5));

const addNums5 = (num1) => num1 + 5;
console.log(addNums5(5));

todos.forEach((todo) => console.log(todo));

// Constructor function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;
}

// Instantiate object
const person1 = new Person("John", "Doe", "4-3-1980");
const person2 = new Person("Mary", "Smith", "3-6-1970");

console.log(person1);
console.log(person2);
console.log(person2.firstName);

function Person0(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = function () {
    return this.dob.getFullYear();
  };
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

const person20 = new Person0("Mary", "Smith", "3-6-1970");

console.log(person20.dob);
console.log(person20.dob.getFullYear());

const person10 = new Person0("John", "Doe", "4-3-1980");
console.log(person10.getBirthYear());
console.log(person10.getFullName());

console.log(person10);

function Person1(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

Person1.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};

Person1.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const person21 = new Person1("Mary", "Smith", "3-6-1970");
const person11 = new Person1("John", "Doe", "4-3-1980");

console.log(person21.getFullName());
console.log(person11);

// Class
class Person2 {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person22 = new Person2("Mary", "Smith", "3-6-1970");
const person12 = new Person2("John", "Doe", "4-3-1980");

console.log(person21.getFullName());
console.log(person11);

console.log(window);

alert(1);
window.alert(1);

// Single element
console.log(document.getElementById("my-form"));

const form = document.getElementById("my-form");
console.log(form);

console.log(document.querySelector(".container"));
console.log(document.querySelector("h1"));

// Multiple elemet
console.log(document.querySelectorAll(".item"));
console.log(document.getElementsByClassName("item"));
console.log(document.getElementsByTagName("li"));

const items = document.querySelectorAll(".item");

items.forEach((item) => console.log(item));

const ul = document.querySelector(".items");

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "Brad";
ul.lastElementChild.innerHTML = "<h4>Hello</h4>";

const btn = document.querySelector(".btn");
btn.style.background = "red";


btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");

  console.log(e);
  console.log(e.target);
  console.log(e.target.className);
  console.log(e.target.id);

  document.querySelector("#my-form").style.background = "#ccc";
  document.querySelector("body").classList.add("bg-dark");
  ul.lastElementChild.innerHTML = "<h1>Hello</h4>";
});

btn.addEventListener("mouseout", (e) => {
  e.preventDefault();
  document.querySelector("#my-form").style.background = "#ccc";
  document.querySelector("body").classList.add("bg-dark");
  ul.lastElementChild.innerHTML = "<h1>Hello</h4>";
});


const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    alert("Please enter fields");
  } else {
    console.log("success");
  }
}
*/
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    userList.appendChild(li);

    // Clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
