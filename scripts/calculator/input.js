import setProductParam from './setProductParam.js'; // подгружаем информацию в попап-корзины
function inputCustom() {
    const inputSelector = document.querySelector('.buttons.d-flex.flex-wrap');
    inputSelector.insertAdjacentHTML(
        'afterbegin',
        `<div class="quantity_new">
              <input type="number" class="quantity_field form-control" name="quantity" placeholder="0.1" step="0.1" id="quantity">
          </div>`
    );

    const summarySelector = document.querySelector('.product-availability');
    summarySelector.insertAdjacentHTML(
        'afterend',
        `
          <div class="product-availability">
              <div id="test"></div>
              <div id="test2"></div>
          </div>`
    );

    const priceSelector = document.querySelector('.product-price');
    let priceContent = priceSelector.textContent;
    let priceSplit = priceContent.split('.');
    let priceCut = priceSplit[0];
    let priceJoin = priceCut.split(' ').join('');
    const priceNumber = Number(priceJoin);

    // Открываем содержимое поп-ап корзины
    const openCartWrapper = () => {
        const dropdownSelector = document.querySelector('.dropdown');
        dropdownSelector.classList.add('show');

        const dropdownSelector2 = document.querySelector('.dropdown-menu');
        dropdownSelector2.classList.add('show');
    }

    // Выводим для пользователя подсчеты на странице продукта
    const calcNewValue = (param) => {
        if (param) {
            document.getElementById('test').innerHTML =
                'У Вас в корзине уже: ' + param.val + ' кг';

            document.getElementById('test2').innerHTML =
                'На сумму: ' + param.summary + ' руб';

            const price = document.querySelector('.product-price');
            price.textContent = priceContent + ' / кг';
        } else {
            console.log('Весовой товар неопределён')
        }
    }

    const hasProdValue = (new_val) => {
        const product = JSON.parse(localStorage.getItem('product'));
        const input = +(+new_val).toFixed(2);
        if (product !== null) {
            const sumValue = input + +product.val;
            return +sumValue.toFixed(2);
        }
        else {
            return input;
        }
    }
    const products = [];

    const addNewItem = () => {
        const product = JSON.parse(localStorage.getItem('product'));
        if (products) {
            console.log("Хранилище не пустое")
            console.log(product)

            const firstItem = document.querySelector(".products_row .col-12");
            product.forEach(el => {
                console.log(el)
            firstItem.insertAdjacentHTML(
                'beforeend', `
            <div class="media products-wrapper position-relative">
                <div class="d-flex w-100">
                    <div class="product_thumb">
                        <a class="" href="https://store107721.sellavi.com/#">
                        <img src="https://cdn.sellavi.com/image/upload/w_50,h_50,c_pad/v1622390675/ru/clients/107721/6ce38d64ba228460397fb0fd5e9a7c6aa5bd9c35.webp" alt="Яблоки на снегу" title="Яблоки на снегу" class="media-object item-image img-fluid">
                        </a>
                    </div>
                    <div class="product_details pr-2 pl-2">
                        <h4 class="media-heading item-title">
                        <a href="https://store107721.sellavi.com/#">${el.productTitle}</a></h4>
                            <ul class="item-desc mt-1"></ul>
                                <p class="item-price mt-3">${el.summary}.00 ₽</p>
                                <p class="item-qty mt-3">Вес: ${el.val} кг</p>
                        <div class="remove-button-wrapper buttons-wrapper position-absolute left-0" data-product-id="166064">
                            <a onclick="cart.remove('50389', '166064');" class="remove_from_cart d-block">
                                <i data-toggle="tooltip" title="Удалить" data-placement="left" class="fal fa-trash-alt"></i>
                            </a>
                        </div>

</div>
                </div>
            </div>
                `
            );
        })
            // setProductParam();
        } else {
            console.log("В хранилище было пусто, ничего не делаем")
        }
    }
    const removeButton = () => {
        // const remButton = document.querySelector('.remove-button-wrapper');
        // if (localStorage.getItem('product') !== null) {
        //     remButton.onclick = function () {
        //         localStorage.removeItem('product');
        //         document.getElementById('test').style.display = 'none';
        //         document.getElementById('test2').style.display = 'none';
        //     }
        // }
    }
    // Получаем данные из LocalStorage
    function getCartData() {
        return JSON.parse(localStorage.getItem('product'));
    }
    // Записываем данные в LocalStorage
    function setCartData(o) {
        localStorage.setItem('product', JSON.stringify(o));
    }      
    // Создаем массив с товарами
    // const addToListOfProducts = (item) => {
    //     const allProducts = [getCartData()];
    //     allProducts.push(item);
    //     console.log(allProducts);
    // }

    // Создаем продукт в localStorage
    const createNewProduct = () => {
        
      const val = document.getElementById('quantity').value;
      const product = {
          summary: priceNumber,
          val: val,
          productTitle: document.querySelector('.product-title').textContent
      }
      products.push(product);

    //   hasProdValue(val);
        // setProductParam();
        setCartData(products)
      /* localStorage.setItem('product', JSON.stringify(product)); */
      openCartWrapper();
      addNewItem();
      calcNewValue(product);
      removeButton();
    }
    const buyButton = document.querySelector('.buttons .btn-cart');
    buyButton.onclick = function () {
      setTimeout(() => {
        createNewProduct()
        // addToListOfProducts();
      }, 1000)
    };

    if (JSON.parse(localStorage.getItem('product'))) {
        // calcNewValue();
        // setProductParam();
        // addToListOfProducts();
        // removeButton();
        addNewItem();
    }
  }
  
  export default inputCustom;
