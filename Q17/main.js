// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guests = ["Abdul Sattar Edhi", "Allama Iqbal", "Noor Jehan", "Malala Yousafzai", "Faiz Ahmed Faiz", "Wasim Akram"];
console.log("Unfortunately, my new dinner table won't arrive in time for the dinner, and I can invite only two people.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("I'm really sorry, ".concat(removedGuest, ", that I can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited to dinner. Please confirm your attendance."));
});
// Clearing all guests to empty the list
guests.splice(0, guests.length);
console.log("Current guest list:", guests); // This should print an empty list
