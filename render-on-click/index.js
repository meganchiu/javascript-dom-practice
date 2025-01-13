// Using the createElement function, create a <div> container with yellow background and "Hello World" as innerHTML.

// Then append that <div> into the <body> of the website when the user clicks on the #superDuperButton.

const button = document.querySelector('#superDuperButton');

button.addEventListener("click", function() {
  const div = document.createElement('div');
  div.style.backgroundColor = 'yellow';
  div.innerHTML = 'Hello World';
  document.body.appendChild(div);
});