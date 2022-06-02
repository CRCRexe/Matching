var names = new Array();
var qu_successful = false;

document.getElementById("qr").addEventListener("change", previewImage, false);

function previewImage() {
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
      const code = jsQR(imageData.data, canvas.width, canvas.height);
      if (code) {
        var text_decoder = new TextDecoder("shift-jis");
        let str = text_decoder.decode(Uint8Array.from(code.binaryData).buffer);
        names = str.split(",");
        class_number = names.length;
        document.getElementsByClassName("ef")[0].value = class_number;

        qu_successful = true;
        close_setting();
        open_setting();
      }
    };
  };
  fileReader.readAsDataURL(this.files[0]);
}
