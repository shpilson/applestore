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

// hasProdValue - проверяет существование веса в локале
// если есть в локале val, то суммируй с текущим значением полученным из инпута
 /* v - значение из ипута */
 
    const hasProdValue = (v) => {
        if (+v !== null) {
      const product = JSON.parse(localStorage.getItem('product'));
      const input = +(+v).toFixed(2);
      const sum = input + +product.val;
      return +sum.toFixed(2);

    } else {
        return +v;
    }

      // if () {  
      //   return v + 
      //   // v — заничение полученное из инпута
      //   // v2 - значение в локале

      //   // func -> v + v2
      // }
    }
    

/*
    1) Проверить есть ли значение в localStorage
    2) Суммировать значения и записать в localStorage
    3) Обновить значения во враппере корзины
*/

    // Создаем продукт в localStorage
    const createNewProduct = () => {
      const val = document.getElementById('quantity').value;
      const product = {
          summary: (hasProdValue(val) * priceNumber).toFixed(0),
          val: hasProdValue(val), // val = number
          productTitle: document.querySelector('.product-title').textContent
      }

      hasProdValue(val);

      localStorage.setItem('product', JSON.stringify(product));
      
      openCartWrapper();
      setProductParam();
      calcNewValue(product);
    }
    

    if (localStorage.getItem('product')) {
        const buyButton = document.querySelector('.buttons .btn-cart');
        buyButton.onclick = function () {
          setTimeout(() => {
            createNewProduct()
          }, 1000)
        };
        calcNewValue(JSON.parse(localStorage.getItem('product')));
        setProductParam();
    }

    const removeProduct = () => {
        if (localStorage.getItem('product')) {
        const removeButton = document.querySelector('.remove-button-wrapper');
        removeButton.onclick = function () {
            localStorage.clear;
            }
        } else {
            console.log('В корзине ничего нет')
        }
    }

  }
  
  export default inputCustom;
  

  // [DONE] setNewParam сделать отдельным от продукта модулем и использовать на всех страницах кроме /checkout
  // [DONE ]С тебя калькуляция в попап корзине (прибавлять новое, не обнуляя старое)

  // На /checkout в строку продукта в правой колонке, к строке Яблоки на развес добавить на новую строку Вес: N кг 
  
  // В корзине всегда будет массив, ты должен получить все элементы в виде массива и к 
  // этим элементам применять ранее напианный код