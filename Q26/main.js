// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block
// Version 1: Alien color is green, runs the if block
var alien_color = 'green';
if (alien_color === 'green') {
    console.log('You just earned 5 points for shooting the green alien!');
}
else {
    console.log('You just earned 10 points for shooting an alien that is not green!');
}
// Version 2: Alien color is red, runs the else block
alien_color = 'red';
if (alien_color === 'green') {
    console.log('You just earned 5 points for shooting the green alien!');
}
else {
    console.log('You just earned 10 points for shooting an alien that is not green!');
}
