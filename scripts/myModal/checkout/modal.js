const checkoutSelector = document.querySelector('.checkout-checkout');

function modalCheckout() {
checkoutSelector.insertAdjacentHTML('beforebegin', 

`<div id="modalCheckout" class="modalCheckout">

<!-- Modal content -->
<div class="modal-content">
  <div class="modal-header">
    <span class="close" id='close'>&times;</span>
    <h4>Добро пожаловать в корзину!</h4>
  </div>
  <div class="modal-body">
    <h6>Вы находитесь на странице оформления заказа.</h6>
  </div>
  <div class="modal-footer">
    <a href="https://www.sellavi.com/"><img src="https://www.sellavi.com/assets/logo.svg"></a>
  </div>
</div>

</div>`)
}

export default modalCheckout;