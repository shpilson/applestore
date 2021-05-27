import priceNumber from './script.js'; // Базовая цена (строка) -> Число

const inputSelector = document.querySelector('.buttons.d-flex.flex-wrap');
const summarySelector = document.querySelector('.product-availability');

document.querySelector('.header-cart').addEventListener('click', () => {
    console.log('click')
})

function inputCustom() {
    inputSelector.insertAdjacentHTML('afterbegin', `    
<div class="quantity_new">
<button class="btn"><i class="fa fa-minus"></i></button>
<input type="number" class="quantity_field form-control" name="quantity" placeholder="Количество кг" id="quantity">
<button class="btn"><i class="fa fa-plus"></i></button>
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
    }

    document.getElementById('test').innerHTML="Вы хотите купить: " + localStorage.getItem("quantity") + " кг";
    document.getElementById('test2').innerHTML="На сумму: " + localStorage.getItem("summary") + " руб";

    price.textContent = localStorage.getItem("summary") + ".00 ₽";
}

export default inputCustom;

