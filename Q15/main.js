// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var guests = ["Allama Iqbal", "Benazir Bhutto", "Faiz Ahmed Faiz"];
console.log("Dear ".concat(guests[0], ", I would be honored if you could join me for dinner."));
console.log("Dear ".concat(guests[1], ", I would be honored if you could join me for dinner."));
console.log("Dear ".concat(guests[2], ", I would be honored if you could join me for dinner."));
var unavailableGuest = guests[1];
console.log("".concat(unavailableGuest, " can't make it to the dinner."));
// Replacing the unavailable guest with a new guest
guests[1] = "Malala Yousafzai";
// Sending new invitations
console.log("Dear ".concat(guests[0], ", I would still be honored if you could join me for dinner."));
console.log("Dear ".concat(guests[1], ", I would be honored if you could join me for dinner."));
console.log("Dear ".concat(guests[2], ", I would still be honored if you could join me for dinner."));
