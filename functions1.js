/*
This file is all about function special data type
*/
// Ways of defining a function 

function sum(a, b) { return a+b;}
sum(5,5);

var sum = function (a, b){return a+b;};
sum(5, 5);


//using Function constructor , should be avoided when possible
//we should not use Function constructor as we always should avoid the cases where javascript code as string in 
//case of eval() and setTimeout()
var sum = new Function ('a','b','return a+b;'};
sum(5,5);

//proerties of Function objects
//1. constructor properties
function sum(a, b) { return a+b;}
sum.constructor;
//output should be Function()

// 2. length property : Return the number of the parameter the function will accept
sum.length; //should return 2

// 3. Caller property : this will return a reference to the function that call this function

function CalledFunc (){ return CalledFunc.Caller; };
function CallerFunc () { return CalledFunc(); }
CallerFunc(); //Output should be CallerFunc() 



