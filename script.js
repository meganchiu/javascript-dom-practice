// Update text
const content = document.querySelector('#title');
content.innerHTML = "Practicing with DOM";

// Update style to select random color for text
const colorArr = ["red", "orange", "yellow", "green", "blue", "purple"];
content.style.color = colorArr[Math.floor(Math.random() * colorArr.length)];
console.log(content.style.color);

// Update style to select random font size for text
content.style.fontSize = (Math.floor(Math.random() * 100) + 1) + "px";
console.log(content.style.fontSize);

// Update style to add some margin to the text
content.style.margin = "50px";

// Update style to add a solid black border
content.style.border = "3px solid black";