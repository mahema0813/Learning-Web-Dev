let bioButton = document.getElementById("bioButton");
let bioText = document.getElementById("bio")

bioButton.addEventListener("Click", function() {
  bioText.textContent = "I've been coding for 2 years, love clean design, and I'm currently learning JavaScript to build more interactive projects?!";
});

let pink = "#FFC0CB";
let red = "#FF0000";

let skillItems = document.forEach(function(item) {
  item.addEventListener("CLick", function() {
    item.style.color = "red";
  });
});

let skillItems = document.querySelectionAll("#skillsList li");

skillItems.forEach(function(item) {
  item.addEventListener("click", function() {
    item.classList.toggle("highlight");
  });
});
