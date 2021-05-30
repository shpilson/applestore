function setProductParam() {
    const item = JSON.parse(localStorage.getItem("product"))

    const newpriceSelector = document.querySelector('.item-price.mt-3');
    console.log(newpriceSelector);

    if (newpriceSelector){
    newpriceSelector.textContent = item.summary.toFixed(0) + '.00 ₽';
  
    const quantitySelector = document.querySelector('p.item-qty.mt-3');
    quantitySelector.textContent = 'Вес: ' + item.val + ' кг';

    const newSummaryPriceSelector = document.querySelector('.row.vouchers div .media:nth-child(1) .item-price');
    newSummaryPriceSelector.textContent = item.summary.toFixed(0) + '.00 ₽';

    const newTotalPriceSelector = document.querySelector('.row.vouchers div .media:nth-child(2) .item-price');
    newTotalPriceSelector.textContent = item.summary.toFixed(0) + '.00 ₽';
    }
    }

export default setProductParam;