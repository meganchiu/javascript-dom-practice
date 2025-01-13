// With the above knowledge 'in hand' and using the childNodes property, delete the second <li> from the #parentLi list.

const list = document.querySelector('#parentLi');
const secondChild = list.childNodes[3];

list.removeChild(secondChild);