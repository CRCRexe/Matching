document.getElementsByClassName("saveData_close_button")[0].addEventListener("click", close_saveData);
function close_saveData() {
  document.getElementsByClassName("saveData_display")[0].classList.remove("open");
  open_setting(true);
}

document.getElementsByClassName("saveData_setName_close_button")[0].addEventListener("click", close_saveData_setName);
function close_saveData_setName() {
  document.getElementsByClassName("saveData_setName_display")[0].classList.remove("open");
  open_saveData();
}

// function open_saveData_setName() {
//   document.getElementsByClassName("saveData_setName_display")[0].classList.remove("open");
//   close_setting(true);
// }

// let data_process = new _data_process();

// class _data_process {
//   process = { set: 0, add: 1 };

//   data_process(type) {
//     switch (type) {
//       case 0:
//         break;
//       case 1:
//         break;
//     }
//   }
// }

//load QRCode
document.getElementById("saveData_qr").addEventListener("change", loadQRCode, false);
let save_names = new Array();
let save_names_qr_successful = false;

function loadQRCode() {
  var fileReader = new FileReader();
  fileReader.onload = function () {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var image = new Image();
    image.src = fileReader.result;
    image.onload = function () {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);
      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let code = jsQR(imageData.data, canvas.width, canvas.height);
      if (code) {
        var text_decoder = new TextDecoder("shift-jis");
        let str = text_decoder.decode(Uint8Array.from(code.binaryData).buffer);
        save_names = str.split(",");

        document.querySelector(".setName_input input").value = "";
        document.getElementsByClassName("saveData_display")[0].classList.remove("open");
        document.getElementsByClassName("saveData_setName_display")[0].classList.add("open");

        // let save_names_json = JSON.stringify(save_names, undefined, 1);
        // localStorage.setItem("sample", save_names_json);
      } else {
        open_error("Is this QR Code...?");
      }
    };
  };
  fileReader.readAsDataURL(this.files[0]);
}

//apply
document.getElementsByClassName("apply_button")[0].addEventListener("click", () => {
  let value = document.querySelector(".setName_input input").value;
  // save_names.unshift(value);
  let json = JSON.stringify(save_names, undefined, 1);
  localStorage.setItem(value, json);
  close_saveData_setName();
});

let data_buttons = document.getElementsByClassName("data_buttons")[0];
function open_saveData() {
  while (data_buttons.lastChild) {
    data_buttons.removeChild(data_buttons.lastChild);
  }

  let loop_num = 0;
  for (key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      let new_div = document.createElement("div");
      if (!remove_flag) new_div.className = `data_button data_button_${loop_num}`;
      else new_div.className = `data_button data_button_${loop_num} on`;
      new_div.innerHTML = key;
      data_buttons.appendChild(new_div);
    }

    loop_num++;
  }

  let e = document.getElementsByClassName("data_button");
  for (let i = 0; i < e.length; i++) {
    e[i].addEventListener("click", () => {
      if (!remove_flag) {
        let data = localStorage.getItem(e[i].innerHTML);
        data = JSON.parse(data);
        names = data;
        class_number = names.length;
        qr_successful = true;
        document.getElementsByClassName("ef")[0].value = class_number;
        close_saveData();
        remove_absent_numbers();
        set_absent_numbers();
        open_setting();
      } else {
        localStorage.removeItem(e[i].innerHTML);
        open_saveData();
      }
    });
  }

  document.getElementsByClassName("saveData_display")[0].classList.add("open");
}

//remove_button
let remove_button = document.getElementsByClassName("remove_button")[0];
let remove_flag = false;
remove_button.addEventListener("click", () => {
  remove_flag = !remove_flag;
  remove_button.classList.toggle("on");
  let e = document.getElementsByClassName("data_button");
  for (let i = 0; i < e.length; i++) {
    e[i].classList.toggle("on");
  }
});

/*
let data = ["sample1, sample2"];
        let json = JSON.stringify(data, undefined, 1);
        localStorage.setItem("sample", json);
        console.log(localStorage.getItem("sample"));
*/
