// document
//   .getElementsByClassName("log_button")[0]
//   .addEventListener("click", () => {
//     document.getElementsByClassName("log_display")[0].classList.toggle("open");
//     document.getElementsByClassName("texts")[0].classList.toggle("open");
//   });

let about_display = document.getElementsByClassName("about_display")[0];

document
  .getElementsByClassName("about_button")[0]
  .addEventListener("click", open_error);

document
  .getElementsByClassName("about_close_button")[0]
  .addEventListener("click", close_error);

function open_error() {
  effect.classList.add("on");
  blackout.classList.add("on");
  about_display.classList.add("open");
}

function close_error() {
  effect.classList.remove("on");
  blackout.classList.remove("on");
  about_display.classList.remove("open");
}
