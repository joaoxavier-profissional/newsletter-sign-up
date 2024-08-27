const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const errorMessage = document.querySelector(".error")

function validateForm() {
    const email = document.getElementById("email").value;

    //regex for email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(email)) {
        errorMessage.textContent = '';
        card1.classList.toggle("hidden");
        card2.classList.toggle("hidden");
      } else {
        errorMessage.classList.toggle("hidden");
      }

}