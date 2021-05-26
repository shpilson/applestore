const inputSelector = document.querySelector('.btn.btn-theme.btn-cart.btn-icon-left.d-none');

function inputCustom() {
    inputSelector.insertAdjacentHTML('afterend', `    
<div class="quantity_new buttons_added">
    <i class="fas fa-check" style="display: none"></i>
            <i data-action="minus" class="fas fa-minus quantity_key"></i>
                <input type="number" class="quantity_field form-control" name="quantity" step="0.1" value="1">
            <i data-action="plus" class="fas fa-plus quantity_key"></i>
</div>`)
}

export default inputCustom;
