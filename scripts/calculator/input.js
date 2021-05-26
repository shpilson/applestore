const inputSelector = document.querySelector('.quantity.buttons_added');

function inputCustom() {
    inputSelector.insertAdjacentHTML('beforebegin', `    
<div class="quantity_new buttons_added">
    <i class="fas fa-check" style="display: none"></i>
                <input type="number" step ="0.1" class="quantity_field form-control" name="quantity" value="1">
</div>`)
}

export default inputCustom;
