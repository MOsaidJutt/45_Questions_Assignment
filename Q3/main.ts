// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.



let personName1 = "Eric";

console.log(personName1.toLowerCase()); 
console.log(personName1.toUpperCase()); 

function toTitleCase(name: string): string {
    return name.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

console.log(toTitleCase(personName1)); 
