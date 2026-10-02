/*let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.add('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}*/

let cartOpen = document.querySelector("#cart-btn");
let cart = document.querySelector(".shopping-cart");
let cartClose = document.querySelector("#cart-close");

cartOpen.addEventListener("click" , () => cart.classList.add("active"));
cartClose.addEventListener("click" , () => cart.classList.remove("active"));


let addCartButtons = document.querySelectorAll(".add-cart");
addCartButtons.forEach(button => {
    button.addEventListener("click" , event =>{
        const productBox = event.target.closest(".box");
        addToCart(productBox);
    });
});


let cartContent = document.querySelector(".cart-content");
let addToCart  = productBox => {
    let productImgSrc = productBox.querySelector("img").src;
    let productTitle = productBox.querySelector(".product-title").textContent;
    let productPrice = productBox.querySelector(".price").textContent;

    let cartItems = cartContent.querySelectorAll(".cart-product-title");
    for(let item of cartItems){
        if(item.textContent === productTitle){
            alert("This item is already in the cart ");
            return;
        }
    }

    let cartBox = document.createElement("div");
    cartBox.classList.add(".cart-box");
    cartBox.innerHTML = `
                <<div class="cart-box">
                    <img src="${productImgSrc}" alt="" class="cart-img">
                    <div class="cart-detail" >
                        <div class="cart-product-title">${productTitle}</div>
                        <span class="cart-price">${productPrice}</span>
                        <div class="cart-qty">
                            <button id="decrement">-</button>
                            <span class="number">1</span>
                            <button id="increment">+</button>
                        </div>
                    </div>
                    <button type="reset" class="remove"> remove </button>
                    <i class="fa-solid fa-circle-xmark" style="color: #000000;" id="cart-close"></i>
                </div> 
                    
                    `;

    cartContent.appendChild(cartBox);

    cartBox.querySelector(".remove").addEventListener("click" , () => {
        cartBox.remove(); 

        updateTotalPrice();
        updateCartCount(-1);
    });

    cartBox.querySelector(".cart-qty").addEventListener("click" , event=> {
        let numberElement = cartBox.querySelector(".number");
        let decrementButton = cartBox.querySelector("#decrement");
        let quantity = numberElement.textContent;

        if(event.target.id === "decrement" && quantity > 1){
            quantity--;
            if(quantity === 1){
                decrementButton.style.color = "#999"
        }

        }else if(event.target.id === "increment" ){
           quantity++;
            decrementButton.style.color = "#333"
        }

        numberElement.textContent = quantity;

        updateTotalPrice();
    });

    updateCartCount(1);

    updateTotalPrice();
}; 


/*let updateTotalPrice = () => {
    let totalPriceElement = document.querySelector(".total-price");
    let cartBoxes = cartContent.querySelectorAll(".cart-box");
    let total = 0;
    cartBoxes.forEach (cartBox => {
        let PriceElement = cartBox.querySelector(".cart-price");
        let qtyElement = cartBox.querySelector(".number");
        let price = PriceElement.textContent.replace("Rs." , "");
        let quantity = qtyElement.textContent;
        total = total + price * quantity;
    });

    totalPriceElement.textContent = `Rs.${total}`;
};*/

let updateTotalPrice = () => {
    let totalPriceElement = document.querySelector(".total-price");
    if (!cartContent) return; 

    let cartBoxes = cartContent.querySelectorAll(".cart-box");
    let total = 0;

    cartBoxes.forEach(cartBox => {
        let priceElement = cartBox.querySelector(".cart-price");
        let qtyElement = cartBox.querySelector(".number");

        if (priceElement && qtyElement) {
            let price = parseFloat(priceElement.textContent.replace("Rs.", "").trim()) || 0;
            let quantity = parseInt(qtyElement.textContent.trim()) || 0;
            total += price * quantity;
        }
    });

    totalPriceElement.textContent = `Rs. ${total.toFixed(2)}`;

}

let cartItemCount = 0;
let updateCartCount = change => {
    let cartItemCountBadge = document.querySelector(".cart-item-count");
    cartItemCount +=  change;
    if (cartItemCount > 0){
        cartItemCountBadge.style.visibility = "visible";
        cartItemCountBadge.textContent = cartItemCount;        
    }

    else {
        cartItemCountBadge.style.visibility = "hidden";
        cartItemCountBadge.textContent = "";  
    }
    
};

/*let buyMowButton = document.querySelector(".btn-buy");
buyMowButton.addEventListener("click" , () => {
    let cartBoxes = cartContent.querySelectorAll(".cart-box");
    if(cartBoxes.length === 0){
        alert ('Your cart id empty! please add item to your cart before buying..');
        return;
    }

    cartBoxes.forEach(cartBox => cartBox.remove());

    cartItemCount = 0;
    updateCartCount(0);
    updateTotalPrice();
    alert("thank you for your purchase");
});*/