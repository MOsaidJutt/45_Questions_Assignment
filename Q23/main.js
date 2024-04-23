// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.
var car = 'subaru';
// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True
// Test 2
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // False
// Test 3
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru'); // False due to case sensitivity
// Test 4
console.log("Is car != 'audi'? I predict True.");
console.log(car != 'audi'); // True
// Test 5
console.log("Is car.toLowerCase() === 'SUBARU'.toLowerCase()? I predict True.");
console.log(car.toLowerCase() === 'SUBARU'.toLowerCase()); // True
// Test 6
console.log("Is car.length == 6? I predict True.");
console.log(car.length == 6); // True
// Test 7
console.log("Is car.length > 10? I predict False.");
console.log(car.length > 10); // False
// Test 8
console.log("Is car.length < 5? I predict False.");
console.log(car.length < 5); // False
// Test 9
console.log("Is 'Subaru' in car? I predict False.");
console.log(car.includes('Subaru')); // False because 'Subaru' is not exactly in 'subaru' (case-sensitive)
// Test 10
console.log("Is 'ru' a substring of car? I predict True.");
console.log(car.includes('ru')); // True
