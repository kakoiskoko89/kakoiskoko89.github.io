document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        alert("ありがとう! Welcome to the Japanese Club!");
      });
    }
  });