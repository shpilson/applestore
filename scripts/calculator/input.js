import priceNumber from './script.js'; // Базовая цена (строка) -> Число

const inputSelector = document.querySelector('.quantity.buttons_added');

function inputCustom() {
    inputSelector.insertAdjacentHTML('beforebegin', `    
<div class="quantity_new buttons_added">
    <i class="fas fa-check" style="display: none"></i>
                <input type="number" class="quantity_field form-control" name="quantity" placeholder="1" id="quantity">
</div>

<input id="butt" type="button" value="Кнопка"/>
<div id="str"></div>
`)
    butt.onclick = function() {
    const val = document.getElementById('quantity').value;
    document.getElementById('str').innerHTML="Вывод: " + val * priceNumber;
    }
}

export default inputCustom;

