let effect = document.getElementsByClassName("effect")[0];
let setting_display = document.getElementsByClassName("setting_display")[0];
let setting_button = document.getElementsByClassName("setting_button")[0];
let blackout = document.getElementsByClassName("blackout")[0];
let absent_numbers = document.getElementsByClassName("absent_numbers")[0];

let setting_toggle = false;
var absent = 0;

document.getElementsByClassName("setting_button")[0].addEventListener("click", open_setting);

document.getElementsByClassName("setting_close_button")[0].addEventListener("click", close_setting);

function open_setting() {
  class_number = element.value;
  if (0 < element.value) {
    effect.classList.add("on");
    blackout.classList.add("on");
    setting_display.classList.add("open");
    setting_button.classList.add("open");
    setting_toggle = true;

    if (class_number !== class_number_save) {
      remove_absent_numbers();
      set_absent_numbers();
    }
    class_number_save = class_number;
  } else {
    open_error("You set less than 1, right?");
  }
}
function close_setting(flag = false) {
  if (flag) {
    effect.classList.remove("on");
    blackout.classList.remove("on");
  }

  setting_display.classList.remove("open");
  setting_button.classList.remove("open");
  setting_toggle = false;
}

function set_absent_numbers() {
  for (let i = 0; i < class_number; i++) {
    const new_div = document.createElement("div");
    new_div.className = "absent_number";
    if (qr_successful) {
      new_div.innerHTML = names[i];
    } else {
      new_div.innerHTML = i + 1;
    }

    absent_numbers.appendChild(new_div);
  }

  let e = document.getElementsByClassName("absent_number");

  for (let i = 0; i < class_number; i++) {
    e[i].addEventListener("click", () => {
      e[i].classList.toggle("on");

      if (e[i].classList.contains("on")) {
        absent += 1;
      } else {
        absent -= 1;
      }
    });
  }
}

function remove_absent_numbers() {
  while (absent_numbers.lastChild) {
    absent_numbers.removeChild(absent_numbers.lastChild);
  }
  absent = 0;
}
