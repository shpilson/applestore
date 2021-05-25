const checkoutSelector = document.querySelector('.checkout-checkout');

function modalCheckout() {
checkoutSelector.insertAdjacentHTML('afterend', 

`<div id="woofirstpurchase-popup-background" class="woofirstpurchase-popup-background-transparent-black" style="display: flex;opacity: 1;">
<div id="woofirstpurchase-popup-container-first" style="transform: scale(0.5); bottom: -5%;">
    <form id="woofirstpurchase-main-popup-form" method="post" action="">
        <div id="woofirstpurchase-popup-first-top"></div>
        <div id="woofirstpurchase-popup-first-top-text" class="woofirstpurchase-popup-disappear-group"> Sign up to get</div>
        <div id="woofirstpurchase-popup-first-amount" class="woofirstpurchase-popup-disappear-group"> 20%</div>
        <div id="woofirstpurchase-popup-first-bottom-text" class="woofirstpurchase-popup-disappear-group"> off your first order</div> 
        <input type="email" name="woofirstpurchaseemail" id="woofirstpurchase-popup-first-email-input" class="woofirstpurchase-popup-disappear-group" placeholder="Enter your mail here" required=""> 
        <button type="submit" id="woofirstpurchase-popup-first-button" class="woofirstpurchase-popup-disappear-group"> GET IT </button>
        <div id="woofirstpurchase-popup-first-nothanks-text" class="woofirstpurchase-popup-disappear-group">NO, THANKS</div>
    </form>
</div>
</div>`)
}

export default modalCheckout;