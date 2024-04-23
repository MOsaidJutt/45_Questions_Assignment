var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Unchanged Magicians: Keep the original array unchanged and use a modified copy.
var originalMagicians = ['David Copperfield', 'Penn Jillette', 'Teller'];
function make_great(magicians) {
    return magicians.map(function (magician) { return magician + ' the Great'; });
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
var newGreatMagicians = make_great(__spreadArray([], originalMagicians, true)); // Use a spread to copy the array
show_magicians(originalMagicians); // Shows the original names
show_magicians(newGreatMagicians); // Shows the names with "the Great"
