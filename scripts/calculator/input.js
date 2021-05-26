const inputSelector = document.querySelector('.btn.btn-theme.btn-cart.btn-icon-left.d-none');

function inputCustom() {
    inputSelector.insertAdjacentHTML('afterend', `    
<div class="quantity_new buttons_added">
    <i class="fas fa-check" style="display: none"></i>
        <input type="text" class="quantity_field form-control" name="quantity_new" value="Сколько кг?">
</div>`)
}

export default inputCustom;
