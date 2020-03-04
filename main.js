// Select the section with an id of container without using querySelector.
const container = document.getElementById("container");

// Select the section with an id of container using querySelector.
const queryContainer = document.querySelector("#container");

// Select all of the list items with a class of “second”.
const seconds = document.querySelectorAll("li.second");

// Select a list item with a class of third, but only the list item inside of the ol tag.
const thirdOrdered = document.querySelector("ol > li.third");

// Give the section with an id of container the text “Hello!”.
container.innerText = "Hello!";

// Add the class main to the div with a class of footer.
const footer = document.querySelector("div.footer");
footer.classList.add("main");

// Remove the class main on the div with a class of footer.
footer.classList.remove("main");

// Create a new li element.
const newListElement = document.createElement("li");

// Give the li the text “four”.
newListElement.innerText = "four";

// Append the li to the ul element.
const ul = document.querySelector("ul");
ul.append(newListElement);

// Loop over all of the lis inside the ol tag and give them a background color of “green”.
const orderedListItems = document.querySelectorAll("ol li");

for (let item of orderedListItems) {
  item.style.backgroundColor = "green";
}

// Remove the div with a class of footer
footer.remove();
