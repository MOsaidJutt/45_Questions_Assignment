// Great Magicians: Modify the array of magicians by adding "the Great" to each magician’s name.
var magicians = ['David Copperfield', 'Penn Jillette', 'Teller'];
function make_great(magicians) {
    return magicians.map(function (magician) { return magician + ' the Great'; });
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
var greatMagicians = make_great(magicians);
show_magicians(greatMagicians);
