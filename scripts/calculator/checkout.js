import inputCustom from './input.js'; // подгружаем основной скрипт

function checkoutChange() {
    const product = JSON.parse(localStorage.getItem('product'));
    const itemPriceSelector = document.querySelector('.text-right');
    console.log(itemPriceSelector);

    const totalTableSum = document.querySelector('.total_table__sum');
    console.log(totalTableSum);
}

export default checkoutChange;