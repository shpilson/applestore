const inputSelector = document.querySelector('.quantity.buttons_added');

function inputCustom() {
    inputSelector.insertAdjacentHTML('beforebegin', `    
<div class="quantity_new buttons_added">
    <i class="fas fa-check" style="display: none"></i>
                <input type="text" class="quantity_field form-control" name="quantity" placeholder="1" id="quantity">
</div>`)
}

export default inputCustom;

