let popup = document.getElementById("payment");

function openPopup(){
    popup.classList.add("active");
}

function closePopup(){
    popup.classList.remove("active");
    alert("Thank you for your purchase");
}

/*let paymentOpen = document.querySelector(".btn-buy");
let paymentForm = document.querySelector("#payment");
let paymentClose = document.querySelector("#close-payment");

paymentOpen.addEventListener("click" , () => paymentForm.classList.add("active"));
paymentClose.addEventListener("click" , () => paymentForm.classList.remove("active"));*/

