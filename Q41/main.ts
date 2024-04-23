// Magicians: Make an array of magician’s names.

let magicians = ['David Copperfield', 'Penn Jillette', 'Teller'];

function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

show_magicians(magicians);
