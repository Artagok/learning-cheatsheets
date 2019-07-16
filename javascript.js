/* ================================== STRICT ================================== */
// Only comments can be on top of strict mode declaration
"use strict";
// This code works the modern way (strict mode)
// Ensure that “use strict” is at the top
// There’s no way to cancel use strict
// Variable assignment without declaration (let, const) is an error in strict mode

/* ================================== TYPES ================================== */
// Number => integer, floats, Infinity (1/0), NaN (error)
//    We can do anything: divide by zero, treat non-numeric strings as numbers, etc.
//    The script will never stop with a fatal error (“die”). At worst, we’ll get NaN as the result.
// String 
//    'string', "string", `string ${name}`
//    There is no char type, String of size 1
// Boolean 
// Null 
// Undefined
// Object 
// Symbol
//    typeof(x) to get the type of a variable

/* ================================== FUNCTIONS ================================== */
// A Function Declaration can be called earlier than it is defined.
// A Function Expression is created when the execution reaches it and is usable only from that moment.
// Functions can be assigned to variables
let sayHi = function() {
  alert( "Hello" );
};

// And then copied to another 
function sayHi() {
  alert( "Hello" );
}

let func = sayHi;

func();  // Hello
sayHi(); // Hello 

// Callback functions
// Functions inside ask() are Anonymous
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

// Arrow functions
// They are like function declarations, anonymous
let func = (arg1, arg2, ...argN) => expression
let func = function(arg1, arg2, ...argN) {
  statements
};

// With one parameter, no () needed
let double = n => n * 2;
// With no parameter, () required
let sayHi = () => alert('Hello!');

/* ================================== INTERACTIONS ================================== */
// Ask a question, and return either what the visitor entered or null if they clicked “cancel”.
prompt(question, [default])
// Ask a question and suggest to choose between Ok and Cancel. The choice is returned as true/false.
confirm(question)
// Output a message.
alert(message)
// All these functions are modal, they pause the code execution and prevent
// the visitor from interacting with the page until they answer.


/* ================================== OBJECTS ================================== */
{ (key: value)* };

let user = {
  name: 'John',
  age: 30,
  'likes metal': true, // Multiword property as a quoted string
  address = {
    name: 'Deepriver',
    number: 13,       // Last property can end with a comma
  }
};

// Square Brackets [] for multiword props and run-time access
let user = {};
user['likes metal'] = true;
alert(user['likes metal']); // true
delete user['likes metal'];

let key = calculatedAtRuntime();
alert(user[key]) // dot notation (user.key) doesnt allow this runtime calculation

let fruit = calculatedAtRuntime();
let bag = {
  [fruit]: 5, // computed property, takes name of variable fruit
};

// Property shorthand
function makeUser(name, age) {
  return {
    name,   // same as name: name
    age,    // same as age: age
    street: "Highpeak"
  };
}

// Existance check
user.noSuchProperty === undefined // true means there is no such property
"name" in user // true/false depending user.name exists or not (this option better)

// for..in loop
for (let key in object) {
  alert(key);
  alert(object[key])
  // executes body for each key among object properties
}

// Object ordering 
//  Integer properties - Sorted ascending (string that can be converted to and from integer nicely)
//  Rest of properties - Order of creation

// Objects work with references
// When an Object variable is copied a pointer to it is assigned, the object is NOT duplicated

// Object comparison
// Two Objects are equal if they are the same object
let a = {};
let b = a;
a == b  // true 
a === b // true 
let a = {};
let b = {};
a == b  // false
