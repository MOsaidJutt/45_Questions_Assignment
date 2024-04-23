// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var languages = ["Urdu", "Punjabi", "Sindhi", "Pashto", "Balochi"];
try {
    console.log("Accessing an invalid index:", languages[10]); // Intentionally accessing an out of range index
}
catch (error) {
    console.error("Caught an error accessing an out-of-bounds index:", error);
}
// Correcting the error
console.log("Accessing a valid index:", languages[0]);
