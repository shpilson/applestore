const checkoutSelector = document.querySelector('.checkout-checkout');

function modalCheckout() {
checkoutSelector.insertAdjacentHTML('afterend', 

`<div id="modalCheckout" class="modalCheckout">

<!-- Modal content -->
<div class="modal-content1">
  <div class="modal-header1">
    <span class="close" id='close'>&times;</span>
    <h4>Добро пожаловать в корзину!</h4>
  </div>
  <div class="modal-body1">
    <h6>Вы находитесь на странице оформления заказа.</h6>
  </div>
  <div class="modal-footer1">
    <a href="https://www.sellavi.com/"><img src="https://www.sellavi.com/assets/logo.svg"></a>
  </div>
</div>

</div>`)
}

export default modalCheckout;