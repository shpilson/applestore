const itemPriceSelector = document.querySelector('.text-right');

function checkoutChange() {
    const product = JSON.parse(localStorage.getItem('product'));
    console.log(itemPriceSelector);

    const totalTableSum = document.querySelector('.total_table__sum');
    console.log(totalTableSum);
    }


export default checkoutChange;