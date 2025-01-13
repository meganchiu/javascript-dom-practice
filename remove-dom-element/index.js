// Remove the second <li> from the <ul> that is part of the HTML of this website.

const content = document.querySelector('#secondElement');

content.parentNode.removeChild(content);