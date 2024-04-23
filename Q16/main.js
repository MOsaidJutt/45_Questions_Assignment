// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
var guests = ["Allama Iqbal", "Malala Yousafzai", "Faiz Ahmed Faiz"];
// Adding a print statement about a bigger dinner table
console.log("Great news! I've found a bigger dinner table, so more friends can join us.");
// Adding new guests
guests.unshift("Abdul Sattar Edhi"); // At the beginning
guests.splice(2, 0, "Noor Jehan"); // In the middle
guests.push("Wasim Akram"); // At the end
// Sending new invitations
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would be honored if you could join me for dinner."));
});
