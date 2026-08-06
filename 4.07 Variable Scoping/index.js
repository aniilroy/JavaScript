/****************************************************************************************
 * JavaScript Scoping - Complete Guide
 * --------------------------------------------------------------------------------------
 * Scope determines WHERE a variable can be accessed in program.
 *
 * There are 4 main types of scope:
 *
 * 1. Global Scope
 * 2. Function Scope
 * 3. Block Scope
 * 4. Lexical Scope (Scope Chain)

/****************************************************************************************
 * 1. GLOBAL SCOPE
 ****************************************************************************************/

// Variables declared outside any function or block belong to the Global Scope.

let website = "anilroy.in";
const owner = "Anil Roy";
var language = "JavaScript";

console.log("========== GLOBAL SCOPE ==========");
console.log(website);
console.log(owner);
console.log(language);


// Functions can access global variables.
function showWebsite() {

    console.log("\nInside showWebsite()");

    console.log("Website :", website);
    console.log("Owner   :", owner);
    console.log("Language:", language);
}

showWebsite();

// Global variables are also accessible outside functions.
console.log("\nOutside Function");
console.log(website);
console.log(owner);
console.log(language);


/****************************************************************************************
 * 2. FUNCTION SCOPE
 ****************************************************************************************/

console.log("\n\n========== FUNCTION SCOPE ==========");

function userDetails() {

    // These variables exist ONLY inside this function.

    let username = "Anil";
    const age = 21;
    var country = "India";

    console.log(username);
    console.log(age);
    console.log(country);

}

userDetails();

/*
The following lines will throw ReferenceError because these
variables only exist inside userDetails().

console.log(username);
console.log(age);
console.log(country);

*/


/****************************************************************************************
 * Another Function Scope Example
 ****************************************************************************************/

function addNumbers() {

    let a = 10;
    let b = 20;

    console.log("\nSum =", a + b);

}

addNumbers();

/*

ReferenceError

console.log(a);
console.log(b);

*/


/****************************************************************************************
 * 3. BLOCK SCOPE
 ****************************************************************************************/

console.log("\n\n========== BLOCK SCOPE ==========");


// A block is anything inside { }

{

    let city = "Jalpaiguri";
    const state = "West Bengal";

    console.log(city);
    console.log(state);

}

/*

Not Accessible Outside

console.log(city);
console.log(state);

*/


/****************************************************************************************
 * Block Scope with IF
 ****************************************************************************************/

if (true) {

    let marks = 95;

    console.log("\nMarks =", marks);

}

/*

ReferenceError

console.log(marks);

*/


/****************************************************************************************
 * Block Scope with FOR LOOP
 ****************************************************************************************/

console.log("\nLoop");

for (let i = 1; i <= 5; i++) {

    console.log(i);

}

/*

ReferenceError

console.log(i);

*/


/****************************************************************************************
 * var is NOT Block Scoped
 ****************************************************************************************/

console.log("\n\n========== VAR IS NOT BLOCK SCOPED ==========");

if (true) {

    var message = "Hello World";

}

console.log(message);

// Why?
// Because var ignores block scope.
// It only follows FUNCTION SCOPE.


/****************************************************************************************
 * let is Block Scoped
 ****************************************************************************************/

if (true) {

    let secret = "Hidden";

    console.log(secret);

}

/*

ReferenceError

console.log(secret);

*/


/****************************************************************************************
 * var vs let vs const
 ****************************************************************************************/

console.log("\n\n========== var vs let vs const ==========");

{

    var x = 100;
    let y = 200;
    const z = 300;

}

console.log(x); // Works

/*

ReferenceError

console.log(y);

ReferenceError

console.log(z);

*/


/****************************************************************************************
 * 4. LEXICAL SCOPE
 ****************************************************************************************/

console.log("\n\n========== LEXICAL SCOPE ==========");

/*
A child function can access variables from its parent.

Parent CANNOT access child variables.
*/

function outer() {

    let username = "Anil Roy";

    function inner() {

        console.log(username);

    }

    inner();

}

outer();


/****************************************************************************************
 * Parent Cannot Access Child Variable
 ****************************************************************************************/

console.log("\n========== Parent Cannot Access Child ==========");

function parent() {

    function child() {

        let password = "123456";

        console.log(password);

    }

    child();

    /*

    ReferenceError

    console.log(password);

    */

}

parent();


/****************************************************************************************
 * Nested Lexical Scope
 ****************************************************************************************/

console.log("\n========== Nested Scope ==========");

let country = "India";

function stateFunction() {

    let state = "West Bengal";

    function cityFunction() {

        let city = "Jalpaiguri";

        console.log(country);
        console.log(state);
        console.log(city);

    }

    cityFunction();

}

stateFunction();

/****************************************************************************************
 * Scope Chain
 ****************************************************************************************/

console.log("\n========== SCOPE CHAIN ==========");

/*
JavaScript searches variables in this order

Current Scope
      ↓
Parent Scope
      ↓
Global Scope
      ↓
ReferenceError
*/

let a = 1;

function first() {

    let b = 2;

    function second() {

        let c = 3;

        console.log(c); // Current Scope

        console.log(b); // Parent Scope

        console.log(a); // Global Scope

    }

    second();

}

first();

/****************************************************************************************
 * Variable Shadowing
 ****************************************************************************************/

console.log("\n========== VARIABLE SHADOWING ==========");

let user = "Global User";

function login() {

    let user = "Local User";

    console.log(user);

}

login();

console.log(user);

/****************************************************************************************
 * Block Shadowing
 ****************************************************************************************/

console.log("\n========== BLOCK SHADOWING ==========");

let number = 100;

{

    let number = 200;

    console.log(number);

}

console.log(number);

/****************************************************************************************
 * GLOBAL vs FUNCTION vs BLOCK
 ****************************************************************************************/

console.log("\n========== GLOBAL vs FUNCTION vs BLOCK ==========");

let globalVariable = "I am Global";

function demo() {

    let functionVariable = "I am Function Scoped";

    if (true) {

        let blockVariable = "I am Block Scoped";

        console.log(globalVariable);

        console.log(functionVariable);

        console.log(blockVariable);

    }

    // blockVariable is NOT accessible here.

    // console.log(blockVariable);

}

demo();


/*

GLOBAL SCOPE
-------------
Accessible everywhere.

Example:
let x = 10;



FUNCTION SCOPE
---------------
Accessible only inside the function.

function test(){

    let x = 10;

}



BLOCK SCOPE
------------
Accessible only inside { }

if(true){

    let x = 10;

}


LEXICAL SCOPE
--------------
Child functions can access parent variables.

Parent cannot access child variables.

SHADOWING
-----------

A local variable with the same name hides the outer variable.
*/