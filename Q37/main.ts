// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size: string = 'Large', message: string = 'I love TypeScript') {
    console.log(`The shirt size is ${size} and it says: '${message}'.`);
}

make_shirt(); // Default large shirt with default message
make_shirt('Medium'); // Medium shirt with default message
make_shirt('Small', 'JavaScript is cool too'); // Small shirt with a custom message
