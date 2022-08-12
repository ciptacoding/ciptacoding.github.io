const scriptURL = "https://script.google.com/macros/s/AKfycbxxl6JEcsnOIok3keT0dykNEEn6D6xNNjL3aFLiklYK3r6jQUyWoiR6ERslhZ25T70p/exec";
const form = document.forms["portfolio-form-submit"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika tombol submit diklik
  // tampilkan tombol loading, hilangkan tombol kirim
  btnKirim.classList.toggle("d-none");
  btnLoading.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol loading, hilangkan tombol kirim
      btnKirim.classList.toggle("d-none");
      btnLoading.classList.toggle("d-none");
      // tampilkan alert
      myAlert.classList.toggle("d-none");
      // reset form
      form.reset();

      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
