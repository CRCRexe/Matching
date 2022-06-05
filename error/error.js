let error_display = document.getElementsByClassName("error_display")[0];
let error_value = document.querySelector(".error_display .p2");

function open_error(str) {
  effect.classList.add("on");
  blackout.classList.add("on");
  error_display.classList.add("open");
  setting_display.classList.remove("open");
  setting_button.classList.remove("open");
  error_value.innerHTML = str;
}

document
  .getElementsByClassName("error_close_button")[0]
  .addEventListener("click", close_error);

function close_error() {
  effect.classList.remove("on");
  blackout.classList.remove("on");
  error_display.classList.remove("open");
}
