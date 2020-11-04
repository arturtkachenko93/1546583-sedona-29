const formButton = document.querySelector(".hotel-search-button");
const formPopup = document.querySelector(".hotels-search-form");
const inputForm = document.querySelector("input");

formButton.addEventListener ("click", function (evt) {
    evt.preventDefault();
    formPopup.classList.toggle('hotels-search-form-close');
    formPopup.classList.toggle('hotels-search-form');
    inputForm.focus();
});

formPopup.addEventListener("submit", function (evt) {
    if (!inputForm.value) {
      evt.preventDefault();
    } else {
        localStorage.setItem(inputForm.value);
      }
});