// Use the appendChild() method to add all these countries into the select with the id #mySelect.

//Then, add a listener to the 'change' event and display an alert with the selected country when the user selects it.

let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here

const select = document.getElementById('mySelect');

countries.forEach((country) => {
  const option = document.createElement('option');
  option.innerHTML = country;
  option.value = country;
  select.appendChild(option);
});

select.addEventListener('change', function() {
  let country = select.value;
  alert(`You chose the country ${country}`);
});