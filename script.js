/*

////////////////////// Values and Variables

let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Constants can be written with capital letters
let PI = 3.1415;

// Make variable names clear
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

console.log(myFirstJob);

let country = "UK";
let continent = "Europe";
let population = "37m";

console.log(country, continent, population);

////////////////////// Data Types

// Boolean values
let javascriptIsFun = true;
console.log(javascriptIsFun);

// Typeof 
// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Nick');

// Reassign the value of variable
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

// Undefined example
let year;
console.log(year);
console.log(typeof year);

// Example of dynamic typing
year = 1991;
console.log(typeof year);

// Example of error with typeof (displays as an object) - a known bug!
console.log(typeof null);

/////////////////////// Let, const and var

// Reassign or mutate a variable
let age = 30;
age = 31;

// Const is an imutible variable - throws up an error when reassigned
const birthYear = 1991;

// Var as a legacy declaration
var job = "programmer";
job = "teacher";

// Example of creating a variable without declaring it - BAD idea!
lastName = "Coles";
console.log(lastName);
*/

/////////////////// Basic Operators

// Simple math operator - displaying the need for variable within operation
const currentYear = 2022;
const ageNick = currentYear - 1988;
const ageSarah = currentYear - 2010;
console.log(ageNick, ageSarah);

// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
console.log(ageNick * 2, ageNick / 10, 2 ** 3);

// Concatinating strings using the +
const firstName = "Nick";
const lastName = "Coles";
console.log(firstName + " " + lastName);

// Assignment operators - the = sign
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

// Comparison operators - which produce boolean values
console.log(ageNick > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(currentYear - 1991 > currentYear - 2010);
