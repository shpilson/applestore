import inputCustom from './input.js'; // подгружаем основной скрипт

function checkoutChange() {
    const product = JSON.parse(localStorage.getItem('product'));
    const itemPriceSelector = document.querySelector('.text-right');
    const newPrice = itemPriceSelector.textContent;
    console.log(newPrice);
}

export default checkoutChange;