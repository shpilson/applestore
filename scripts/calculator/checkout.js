function checkoutChange() {
    const product = JSON.parse(localStorage.getItem('product'));
    console.log(product);

    setTimeout(() => {
        const totalTableSum = document.querySelector('.total_table__sum');
        totalTableSum.textContent = product.summary + ".00₽";
      }, 1000)
    }


export default checkoutChange;