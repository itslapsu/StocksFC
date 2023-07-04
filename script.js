const popupOpenButton = document.querySelectorAll(".popup-open");
const popupWrapper = document.querySelector(".popup-wrapper");
const popupCloseButton = document.querySelector(".popup__close");
const themeSwitcher = document.querySelector(".header__buttons-switch");

let theme = localStorage.getItem("theme");

if (theme) {
  if (theme === "light") {
    document.body.classList.add("light-theme");
  } else if (theme === "dark") {
    document.body.classList.add("dark-theme");
  }
} else {
  localStorage.setItem("theme", "light");
  document.body.classList.add("light-theme");
}

themeSwitcher.addEventListener("click", (e) => {
  e.preventDefault();

  switch (theme) {
    case "dark": {
      localStorage.setItem("theme", "light");
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
      theme = "light";
      break;
    }
    case "light": {
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
      theme = "dark";
      break;
    }
  }
});

popupOpenButton.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    popupWrapper.classList.remove("hide");
    document.body.classList.add("no-scroll");
  });
});

popupCloseButton.addEventListener("click", (e) => {
  e.preventDefault();
  popupWrapper.classList.add("hide");
  document.body.classList.remove("no-scroll");
});
