const progress = document.getElementById("progress");
const form = document.getElementById("form");
let xhr = new XMLHttpRequest();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(form);
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
  xhr.upload.onprogress = function (element) {
    progress.value = element.loaded / element.total;
    
  };
  xhr.send(formData);
  xhr.upload.onload = function () {
    alert(`Файл успешно загружен!`);
  };
});