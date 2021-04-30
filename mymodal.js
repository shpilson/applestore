const pages = {
    main: document.querySelector('.common-home'),
    category: document.querySelector('.product-category'),
    checkout: document.querySelector('.checkout-checkout'),
    cart: document.querySelector('.checkout-cart'),
    product: document.querySelector('.product-product'),
    information: document.querySelector('.information-information'),
    login: document.querySelector('.account-login'),
    register: document.querySelector('.account-register'),
    sitemap: document.querySelector('.information-sitemap'),
    all: document.querySelector('.wrapper')
  }


// Get the modal
var modal = document.getElementById("myModal");
var showpopup = document.getElementById("myModal");

// Открываем окно по умолчанию
if (document.querySelector('.common-home')) { 
    var delay_popup = 5000;
    showpopup = function() {
        modal.style.display = "block";
      }
    setTimeout(showpopup, delay_popup);
 }


// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
