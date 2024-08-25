const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");

function validateForm() {
    const email = document.getElementById("email");
    console.log(email);
    card1.classList.toggle("hidden");
    card2.classList.toggle("hidden");
}