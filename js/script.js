let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

/*let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}*/

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}



var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const shop = params.get('connected');
  if (shop === 'Foodcity') {
      alert('You are connected with Foodcity');
  }

  else if ( shop === 'Softlogic Glomark'){

      alert('You are connected with Softlogic Glomark');
  }
  else if ( shop === 'Keels Super'){

      alert('You are connected with Keels Super');
  }
  else if ( shop === 'Arpico'){

      alert('You are connected with Arpico');
  }
  else if ( shop === 'Araliya Super Market'){

      alert('You are connected with Araliya Super Market');
  }
  else if ( shop === 'Organic Green Care'){

      alert('You are connected with Organic Green Care');
  }
  else if ( shop === 'Laugfs Super'){

      alert('You are connected with Laugfs Super');
  }
  else if ( shop === 'Lanka Sathosa'){

      alert('You are connected with Lanka Sathosa');
  }
  else if ( shop === 'RTS Tea & Groceries'){

      alert('You are connected with RTS Tea & Groceries');
  }
  else if ( shop === 'Cargils'){

      alert('You are connected with Cargils');
  }
  else if ( shop === 'Premasiri Super Market'){

      alert('You are connected with Premasiri Super Market');
  }
});

function notifyShop(shopName) {
    const notifications = JSON.parse(localStorage.getItem("shopNotifications") || "{}");
    notifications[shopName] = true;
    localStorage.setItem("shopNotifications", JSON.stringify(notifications));
}


function toggleAccount() {
    const accountSection = document.getElementById('account-section');
    accountSection.style.display = 
        (accountSection.style.display === 'block') ? 'none' : 'block';
}

function openEditProfile() {
    document.getElementById("account-section").style.display = "none";
    document.getElementById("edit-profile-section").style.display = "block";
  }

  function closeEditProfile() {
    document.getElementById("edit-profile-section").style.display = "none";
    document.getElementById("account-section").style.display = "block";
  }




