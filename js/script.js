const hamburgerButton = document.querySelector(".hamburger")
const hamburgerList = document.querySelector(".hamburger-list-container")

hamburgerButton.addEventListener("click", () => {
  hamburgerList.classList.toggle("hidden")
})
