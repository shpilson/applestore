import inputCustom from './input.js'; // подгружаем основной скрипт

function checkoutChange() {
    const product = JSON.parse(localStorage.getItem('product'));
    const itemPriceSelector = document.querySelector('.text-right');
    const newPrice = itemPriceSelector.textContent;
    newPrice = "Цена: " + product.summary;
}

export default checkoutChange;