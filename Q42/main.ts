// Great Magicians: Modify the array of magicians by adding "the Great" to each magician’s name.
let magicians = ['David Copperfield', 'Penn Jillette', 'Teller'];

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => magician + ' the Great');
}

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

let greatMagicians = make_great(magicians);
show_magicians(greatMagicians);
