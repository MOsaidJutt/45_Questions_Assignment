// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users = ['admin', 'eric', 'sarah', 'osaid', 'ali'];;
let new_users = ['ali', 'eric', 'rabeeta', 'aiman', 'khushi'];

// Convert current_users to lowercase for case-insensitive comparison
let lower_current_users = current_users.map(user => user.toLowerCase());

for (let new_user of new_users) {
    // Check if the new username, in lowercase, is already in the list of lowercase current usernames
    if (lower_current_users.includes(new_user.toLowerCase())) {
        console.log(`The username ${new_user} has already been used. You will need to enter a new username.`);
    } else {
        console.log(`The username ${new_user} is available.`);
    }
}
