// Using the createElement() function, create a paragraph (p) element with yellow background, 
// set the innerHTML to 'Hello World', and finally append it in the document.

const content = document.createElement('p');
content.innerHTML = 'Hello World';
content.style.background = 'yellow';

document.body.appendChild(content);