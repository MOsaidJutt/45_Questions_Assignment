// Sandwiches: Accepts a variable number of items on a sandwich.

function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(', ')}`);
}

make_sandwich('ham', 'cheese');
make_sandwich('turkey', 'lettuce', 'tomato');
make_sandwich('peanut butter', 'jelly');
