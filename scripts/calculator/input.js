import priceNumber from './script.js'; // Базовая цена (строка) -> Число

const inputSelector = document.querySelector('.quantity.buttons_added');
const summarySelector = document.querySelector('.product-availability');

document.querySelector('.header-cart').addEventListener('click', () => {
    console.log('click')
})

function inputCustom() {
    inputSelector.insertAdjacentHTML('beforebegin', `    
<div class="quantity_new buttons_added">
    <i class="fas fa-check" style="display: none"></i>
                <input type="number" class="quantity_field form-control" name="quantity" placeholder="1" id="quantity">
</div>

<button class="btn btn-theme btn-cart btn-icon-left" id="button-cart" data-loading-text="Загрузка...">
<i class="far fa-shopping-cart"></i>Купить</button>

<input id="butt" type="button" value="Купить"/>

<div id="test"></div>
<div id="test2"></div>
`)
    
    summarySelector.insertAdjacentHTML('afterend', `
    <div class="product-availability">
        <div id="test"></div>
        <div id="test2"></div>
    </div>`)



    butt.onclick = function() {
    const val = document.getElementById('quantity').value;
    const summary = val * priceNumber;

    localStorage.setItem("quantity", val);
    localStorage.setItem("summary", summary);

    document.getElementById('test').innerHTML="Вы хотите купить: " + localStorage.getItem("quantity") + " кг";
    document.getElementById('test2').innerHTML="На сумму: " + localStorage.getItem("summary") + " руб";
    }

}

export default inputCustom;

