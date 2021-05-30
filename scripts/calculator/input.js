import setProductParam from './setProductParam.js'; // подгружаем информацию в попап-корзины

function inputCustom() {
    const inputSelector = document.querySelector('.buttons.d-flex.flex-wrap');
    inputSelector.insertAdjacentHTML(
      'afterbegin',
      `    
          <div class="quantity_new">
              <input type="number" class="quantity_field form-control" name="quantity" placeholder="0.1" step="0.1" id="quantity">
          </div>
              <input class="btn btn-theme btn-cart btn-icon-left" id="butt" type="button" value="Взвесить"/>`
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
        document.getElementById('test').innerHTML =
          'Вы хотите купить: ' + param.val + ' кг';
          
        document.getElementById('test2').innerHTML =
          'На сумму: ' + param.summary.toFixed(0) + ' руб';
    
        const price = document.querySelector('.product-price');
        price.textContent = param.summary.toFixed(0) + '.00 ₽';
    }
    
    // Создаем продукт в localStorage
    const createNewProduct = () => {
        const val = document.getElementById('quantity').value;
        const product = {
            summary: val * priceNumber,
            val,
            productTitle: document.querySelector('.product-title').textContent
        }

      localStorage.setItem('product', JSON.stringify(product));
        
      openCartWrapper();
      calcNewValue(product);
      setProductParam();
    }

    butt.onclick = function () {
        createNewProduct()
    };
  
    if (localStorage.getItem('product')) {
        setProductParam();
    }

    createNewProduct();
  }
  
  export default inputCustom;
  

  // [DONE] setNewParam сделать отдельным от продукта модулем и использовать на всех страницах кроме /checkout
  // С тебя калькуляция в попап корзине (прибавлять новое, не обнуляя старое)
  // На /checkout в строку продукта в правой колонке, к строке Яблоки на развес добавить на новую строку Вес: N кг 
  
  // В корзине всегда будет массив, ты должен получить все элементы в виде массива и к 
  // этим элементам применять ранее напианный код