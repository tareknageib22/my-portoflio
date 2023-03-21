const sunIcon = document.querySelector(".sun-icon");
const moonIcon = document.querySelector(".moon-icon");
const body = document.querySelector("body");


// Check if 'dark-mode' class was previously active
if (localStorage.getItem("isDarkMode") === "true") {
  body.classList.add("background-color-black");
}


moonIcon.addEventListener("click", () => {
  body.classList.add("background-color-black");
  localStorage.setItem(
    "isDarkMode",
    body.classList.contains("background-color-black")
  );
});
