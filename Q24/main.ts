// More Conditional Tests: Expanding on different comparison types with both True and False results for each category.

// Tests for equality and inequality with strings
console.log("Test for equality with strings 'apple' == 'apple':", 'apple' == 'apple');
console.log("Test for inequality with strings 'apple' != 'orange':", 'apple' != 'orange');

// Tests using the lower case function
let fruit = 'Banana';
console.log("Test using lowercase function 'banana' == fruit.toLowerCase():", 'banana' == fruit.toLowerCase());
console.log("Test using lowercase function 'BANANA' == fruit.toLowerCase():", 'BANANA' == fruit.toLowerCase());

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number = 10;
console.log("Numerical test for equality 10 == number:", 10 == number);
console.log("Numerical test for inequality 10 != 5:", 10 != 5);
console.log("Numerical test for greater than 5 > 3:", 5 > 3);
console.log("Numerical test for less than 3 < 5:", 3 < 5);
console.log("Numerical test for greater than or equal to 10 >= 10:", 10 >= 10);
console.log("Numerical test for less than or equal to 5 <= 10:", 5 <= 10);

// Tests using "and" and "or" operators
console.log("Test using 'and' operator (5 > 3 && 10 > 8):", 5 > 3 && 10 > 8);
console.log("Test using 'or' operator (5 > 10 || 10 > 8):", 5 > 10 || 10 > 8);

// Test whether an item is in an array
let colors = ['red', 'blue', 'green'];
console.log("Test whether 'red' is in array colors:", colors.includes('red'));
console.log("Test whether 'yellow' is in array colors:", colors.includes('yellow'));

// Test whether an item is not in an array
console.log("Test whether 'black' is not in array colors:", !colors.includes('black'));
console.log("Test whether 'green' is not in array colors:", !colors.includes('green'));
