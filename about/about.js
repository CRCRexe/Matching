// document
//   .getElementsByClassName("log_button")[0]
//   .addEventListener("click", () => {
//     document.getElementsByClassName("log_display")[0].classList.toggle("open");
//     document.getElementsByClassName("texts")[0].classList.toggle("open");
//   });

let about_display = document.getElementsByClassName("about_display")[0];

document
  .getElementsByClassName("about_button")[0]
  .addEventListener("click", open_about);

document
  .getElementsByClassName("about_close_button")[0]
  .addEventListener("click", close_about);

function open_about() {
  effect.classList.add("on");
  blackout.classList.add("on");
  about_display.classList.add("open");
}

function close_about() {
  effect.classList.remove("on");
  blackout.classList.remove("on");
  about_display.classList.remove("open");
}
