function checkoutChange() {
    const product = JSON.parse(localStorage.getItem('product'));

    setTimeout(() => {
        // Меняем цену
        const totalTableSum = document.querySelector('.total_table__sum');
        totalTableSum.textContent = product.summary + ".00₽";

        const rightPrice = document.querySelector('.text-right');
        rightPrice.textContent = product.summary + ".00₽";

        const singlePrice = document.querySelector('.single-price div');
        singlePrice.textContent = product.summary + ".00₽";

        // Добавляем значение веса
        const itemWeight = document.querySelector(".product__description span");
        itemWeight.insertAdjacentHTML(
            'afterend', `<div id="newWeight"></div>`
        );

        document.getElementById('newWeight').innerHTML =
        'Вес: ' + product.val + ' кг';


      }, 1000)
    }


export default checkoutChange;