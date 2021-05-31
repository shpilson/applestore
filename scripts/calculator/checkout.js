function checkoutChange() {
    const product = JSON.parse(localStorage.getItem('product'));

    setTimeout(() => {
        const totalTableSum = document.querySelector('.total_table__sum');
        totalTableSum.textContent = product.summary + ".00₽";

        const rightPrice = document.querySelector('.text-right');
        rightPrice.textContent = product.summary + ".00₽";

        const singlePrice = document.querySelector('.single-price div');
        singlePrice.textContent = product.summary + ".00₽";

      }, 1000)
    }


export default checkoutChange;