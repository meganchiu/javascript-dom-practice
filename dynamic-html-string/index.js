// Using the getFullYear() function from the Date() object, 
// change the string content of the variable myString to make it print the current date's year into the HTML.

let date = new Date().getFullYear();
let myString = `<p>Hello!</p> <strong>My friend</strong>, the current date's year is ${date}`;

document.write(myString);
