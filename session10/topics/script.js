// Selecting elements
const title = document.getElementById("title");
// console.log("title", title);
const messages = document.getElementsByClassName("message");
// console.log("messages", messages);
const firstMessage = document.querySelector(".message");
// console.log("firstMessage", firstMessage);

// Changing Text & HTML Content
document.getElementById("changeTextBtn").addEventListener("click", () => {
  title.textContent = "Text Changed!";
  firstMessage.innerHTML = "<strong>Strong message!</strong>";
});

// Changing Styles
document.getElementById("changeStyleBtn").addEventListener("click", () => {
  document.body.style.backgroundColor = "#f0f0f0";
  title.style.color = "blue";
  for (let message of messages) {
    message.classList.add("highlight");
  }
});

// Creating and Adding an Element
document.getElementById("addElementBtn").addEventListener("click", () => {
  const newElement = document.createElement("p");
  newElement.textContent = "A new paragraph!";
  document.body.appendChild(newElement);
});

// Removing an Element
document.getElementById("removeElementBtn").addEventListener("click", () => {
  if (document.querySelector(".message")) {
    // Ensure there's a message to remove
    document.querySelector(".message").remove();
  }
});
