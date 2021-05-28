import priceNumber from './script.js'; // Базовая цена (строка) -> Число

const inputSelector = document.querySelector('.buttons.d-flex.flex-wrap');
const summarySelector = document.querySelector('.product-availability');

function inputCustom() {
    inputSelector.insertAdjacentHTML('afterbegin', `    
<div class="quantity_new">
<input type="number" class="quantity_field form-control" name="quantity" placeholder="0.1" step="0.1" id="quantity">
</div>

<input class="btn btn-theme btn-cart btn-icon-left" id="butt" type="button" value="Взвесить"/>`)

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

    const price = document.querySelector(".product-price");
    price.textContent = localStorage.getItem("summary") + ".00 ₽";


    const dropdownSelector = document.querySelector('.dropdown');
    dropdownSelector.classList.add('show');
    
    const dropdownSelector2 = document.querySelector('.dropdown-menu');
    dropdownSelector2.classList.add('show');

    const newpriceSelector = document.querySelector(".item-price.mt-3");
    newpriceSelector.textContent = localStorage.getItem("summary") + ".00 ₽";

    const quantitySelector = document.querySelector("p.item-qty.mt-3");
    quantitySelector.textContent = "Вес: " + localStorage.getItem("quantity") + " кг";
    
    }


    const price = document.querySelector(".product-price");
    document.getElementById('test').innerHTML="Вы хотите купить: " + localStorage.getItem("quantity") + " кг";
    document.getElementById('test2').innerHTML="На сумму: " + localStorage.getItem("summary") + " руб";

    price.textContent = localStorage.getItem("summary") + ".00 ₽";
}

export default inputCustom;

