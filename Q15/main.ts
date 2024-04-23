// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

let guests = ["Allama Iqbal", "Benazir Bhutto", "Faiz Ahmed Faiz"];
console.log(`Dear ${guests[0]}, I would be honored if you could join me for dinner.`);
console.log(`Dear ${guests[1]}, I would be honored if you could join me for dinner.`);
console.log(`Dear ${guests[2]}, I would be honored if you could join me for dinner.`);

let unavailableGuest = guests[1];
console.log(`${unavailableGuest} can't make it to the dinner.`);


guests[1] = "Malala Yousafzai";


console.log(`Dear ${guests[0]}, I would still be honored if you could join me for dinner.`);
console.log(`Dear ${guests[1]}, I would be honored if you could join me for dinner.`);
console.log(`Dear ${guests[2]}, I would still be honored if you could join me for dinner.`);
