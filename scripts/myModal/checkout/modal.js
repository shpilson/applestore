const checkoutSelector = document.querySelector('.checkout-checkout');

function modalCheckout() {
checkoutSelector.insertAdjacentHTML('afterend', 

`<div id="woofirstpurchase-popup-background" class="woofirstpurchase-popup-background-transparent-black" style="display: flex;opacity: 1;">
<div id="woofirstpurchase-popup-container-first" style="transform: scale(0.5); bottom: -5%;">
    <form id="woofirstpurchase-main-popup-form" method="post" action="">
        <div id="woofirstpurchase-popup-first-top" style="transform: translateY(0px) rotate(1800deg);"></div>
        <div id="woofirstpurchase-popup-first-top-text" class="woofirstpurchase-popup-disappear-group">Скидка на первый заказ</div>
        <div id="woofirstpurchase-popup-first-amount" class="woofirstpurchase-popup-disappear-group">10%</div>
        <div id="woofirstpurchase-popup-first-bottom-text" class="woofirstpurchase-popup-disappear-group">Ваш персональный купон</div> 
        <div id="coupon" class="woofirstpurchase-popup-disappear-group">LUCKYJUNE</div> 
        <button type="submit" id="woofirstpurchase-popup-first-button" class="woofirstpurchase-popup-disappear-group">Спасибо!</button>
        <div class="close" id='close'>&times;</span>
    </form>
</div>
</div>`)
}

export default modalCheckout;