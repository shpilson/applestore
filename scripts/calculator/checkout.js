import inputCustom from './input.js'; // подгружаем основной скрипт

function checkoutChange() {
    createNewProduct();
    const product = JSON.parse(localStorage.getItem('product'));
    const itemPriceSelector = document.querySelector('.single-price div');
    itemPriceSelector.textContent = "Цена: " + product.summary;
}

export default checkoutChange;