<script
  src="
https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js
"
></script>;

//dark mode section is here

const toggleButton = document.querySelector(".button.is-secondary");
const body = document.querySelector("body");

// Check if 'dark-mode' class was previously active
if (localStorage.getItem("isDarkMode") === "true") {
  body.classList.add("background-color-black");
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("background-color-black");
  localStorage.setItem(
    "isDarkMode",
    body.classList.contains("background-color-black")
  );
});
