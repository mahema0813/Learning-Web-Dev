let menuItems = document.querySelectorAll("#menuList li");

menuItems.forEach(function(item) {
  item.addEventListener("click", function() {
    item.classList.toggle("highlight");
  });
});

let hoursButton = document.getElementById("hoursButton");
let hoursText = document.getElementById("hours");

hoursButton.addEventListener("click", function() {
  hoursText.textContent = "Open daily: 8:00 AM - 6:00 PM";
});
