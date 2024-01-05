/* eslint-disable no-unused-vars */
const x = 1;
let y = 5;

console.log(x, y); // 1, 5 are printed
y += 10;
console.log(x, y); // 1, 15 are printed
y = "sometext";
console.log(x, y); // 1, sometext are printed
//x = 4               // causes an error

/*

const does not define a variable but a constant for which the value can no longer
be changed. On the other hand, let defines a normal variable.

It is also possible to define variables in JavaScript using the keyword var. 
var was, for a long time, the only way to define variables. const and let were
 only recently added in version ES6. In specific situations, var works in a 
 different way compared to variable definitions in most languages 
During this course the use of var is ill-advised and you should stick with using
 const and let!
*/

// Arrays

const t = [1, -1, 3];

t.push(5);

console.log(t.length); // 4 is printed
console.log(t[1]); // -1 is printed

t.forEach((value) => {
  value *= 2;
  console.log(value); // numbers 2, -2, 6, 10 are printed, each on its own line
});

/*

Notable in this example is the fact that the contents of the array can be modified
even though it is defined as a const. Because the array is an object, the variable
always points to the same object. However, the content of the array changes as new 
items are added to it.


One way of iterating through the items of the array is using forEach as seen in
the example. 
forEach receives a function defined using the arrow syntax as a
parameter.

forEach calls the function for each of the items in the array, always passing the
individual item as an argument. The function as the argument of forEach may also
receive other arguments.


In the previous example, a new item was added to the array using the method push. 
When using React, techniques from functional programming are often used. One 
characteristic of the functional programming paradigm is the use of immutable 
data structures. In React code, it is preferable to use the method concat, which
creates a new array with the added item. This ensures the original array remains
unchanged.
*/

const tt = [1, -1, 3];

const t2 = tt.concat(5); // creates new array

console.log(tt); // [1, -1, 3] is printed
console.log(t2); // [1, -1, 3, 5] is printed

/*
There are plenty of useful methods defined for arrays. Let's look at a short 
example of using the map method.
*/

const m1 = t.map((value) => value * 2);
console.log(m1); // [ 2, -2, 6, 10 ] is printed

// Map can also transform the array into something completely different:

const m2 = t.map((value) => "<li>" + value + "</li>");
console.log(m2);
// [ '<li>1</li>', '<li>-1</li>', '<li>3</li>', '<li>5</li>' ] is printed

/*
Individual items of an array are easy to assign to variables with the help of the 
destructuring assignment.
*/

const ttt = [1, 2, 3, 4, 5];

const [first, second, ...rest] = ttt;

console.log(first, second); // 1, 2 is printed
console.log(rest); // [3, 4, 5] is printed

// Objects

/*
There are a few different ways of defining objects in JavaScript. One very common
method is using object literals, which happens by listing its properties within
braces:
*/

const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
  }
  
  const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
  }
  
  const object3 = {
    name: {
      first: 'Dan',
      last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
  }

// The properties of an object are referenced by using the "dot" notation,
// or by using brackets

console.log(object1.name)         // Arto Hellas is printed
const fieldName = 'age' 
console.log(object1[fieldName])    // 35 is printed

/*
You can also add properties to an object on the fly by either using dot notation 
or brackets:
*/

object1.address = 'Helsinki'
object1['secret number'] = 12341
console.log(object1)
/*

{
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  address: 'Helsinki',
  'secret number': 12341
}

The latter of the additions has to be done by using brackets because when using dot
notation, secret number is not a valid property name because of the space character.


Naturally, objects in JavaScript can also have methods. However, during this course,
we do not need to define any objects with methods of their own. This is why they are
only discussed briefly during the course.

Objects can also be defined using so-called constructor functions, which results in
a mechanism reminiscent of many other programming languages, e.g. Java's classes.
Despite this similarity, JavaScript does not have classes in the same sense as 
object-oriented programming languages. There has been, however, an addition of the
class syntax starting from version ES6, which in some cases helps structure 
object-oriented classes.
 */

// Functions

/*We have already become familiar with defining arrow functions. 
The complete process, without cutting corners, of defining an arrow 
function is as follows:
*/
const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}
//and the function is called as can be expected:

const result = sum(1, 5)
console.log(result)

/*

If there is just a single parameter, we can exclude the parentheses from the
definition:
 */

const square = p => {
    console.log(p)
    return p * p
  }

const resultSquare = square(8)
console.log(resultSquare) // 64

/*
If the function only contains a single expression then the braces are not needed.
In this case, the function only returns the result of its only expression. Now, if
we remove console printing, we can further shorten the function definition:
*/

const squareShort = p => p * p

/*
This form is particularly handy when manipulating arrays - e.g. when using
the map method:
*/


const tSquared = t.map(p => p * p)
console.log(tSquared)
// tSquared is now [ 1, 1, 9, 25 ]

/*
The arrow function feature was added to JavaScript only a couple of years ago, 
with version ES6. Before this, the only way to define functions was by using 
the keyword function.

There are two ways to reference the function; one is giving a name in a function
declaration.
*/

function product(a, b) {
    return a * b
  }
  
const result1 = product(2, 6)
console.log(result1) // result1 is now 12

/*
The other way to define the function is by using a function expression. 
In this case, there is no need to give the function a name (anonymous function?)
and the definition may reside among the rest of the code:
*/

const average = function(a, b) {
    return (a + b) / 2
  }
  
const result2 = average(2, 5)
  // result2 is now 3.5

