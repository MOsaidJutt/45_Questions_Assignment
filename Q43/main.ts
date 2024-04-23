// Unchanged Magicians: Keep the original array unchanged and use a modified copy.
let originalMagicians = ['David Copperfield', 'Penn Jillette', 'Teller'];

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => magician + ' the Great');
}

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

let newGreatMagicians = make_great([...originalMagicians]); // Use a spread to copy the array

show_magicians(originalMagicians); // Shows the original names
show_magicians(newGreatMagicians); // Shows the names with "the Great"