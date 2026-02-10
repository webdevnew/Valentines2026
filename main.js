const noButton = document.querySelector("#no"),
      buttons = document.querySelector(".buttons");

noButton.addEventListener("click", () => {
    buttons.classList.add("disable");
})