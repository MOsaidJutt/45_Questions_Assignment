var personName1 = "Eric";
console.log(personName1.toLowerCase()); // Lowercase
console.log(personName1.toUpperCase()); // Uppercase
function toTitleCase(name) {
    return name.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}
console.log(toTitleCase(personName1)); // Titlecase
