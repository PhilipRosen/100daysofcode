//JS in Chrome developer console


//returns head element
document.firstElementChild.firstElementChild;



//returns h1 element
document.firstElementChild.lastElementChild.firstElementChild;



//change the h1 innerHTML

var heading = document.firstElementChild.lastElementChild.firstElementChild;

heading.innerHTML = "This is the new heading"


//change style color of h1

heading.style.color = "green"



//click the checkbox with code

document.querySelector("input").click();

