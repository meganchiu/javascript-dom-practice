// Using the createElement() function, add a new <li> element to the #myList whenever the #superDuperButton is clicked.

let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
  const list = document.getElementById('myList');
  const newListItem = document.createElement('li');
  newListItem.innerHTML = 'New Element';
  list.appendChild(newListItem);
});
