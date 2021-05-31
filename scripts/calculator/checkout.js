function checkoutChange() {
    const product = JSON.parse(localStorage.getItem('product'));
    console.log(product);
    const totalTableSum = document.querySelector('.total_table__sum');
    console.log(totalTableSum);
    }


export default checkoutChange;