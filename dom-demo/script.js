console.log("hello form the js file of the demo");

document.getElementById("myButton").onclick = function () {
  document.getElementById("myText").innerHTML =
    "NEW TEXT!!!! THis text replaces teh starter text after the button is clicked.";
  document.getElementById("myButton").style.display = "none";
};

document.getElementById("one").onclick = function () {
  document.getElementById("one").innerHTML = "X";
};
