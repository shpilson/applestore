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
  
        
      
    const openCartWrapper = () => {
        const dropdownSelector = document.querySelector('.dropdown');
              dropdownSelector.classList.add('show');
  
        const dropdownSelector2 = document.querySelector('.dropdown-menu');
        dropdownSelector2.classList.add('show');
    }

    const setProductParam = () => {
        const item = JSON.parse(localStorage.getItem("product"))
  
        const newpriceSelector = document.querySelector('.item-price.mt-3');
        newpriceSelector.textContent = item.summary + '.00 ₽';
      
        const quantitySelector = document.querySelector('p.item-qty.mt-3');
        quantitySelector.textContent = 'Вес: ' + item.val + ' кг';
    
        const newSummaryPriceSelector = document.querySelector('.row.vouchers div .media:nth-child(1) .item-price');
        newSummaryPriceSelector.textContent = item.summary + '.00 ₽';
    
        const newTotalPriceSelector = document.querySelector('.row.vouchers div .media:nth-child(2) .item-price');
        newTotalPriceSelector.textContent = item.summary + '.00 ₽';
      }
  
      // Set info product
      const calcNewValue = (param) => {
        document.getElementById('test').innerHTML =
          'Вы хотите купить: ' + param.val + ' кг';
          
        document.getElementById('test2').innerHTML =
          'На сумму: ' + param.summary + ' руб';
    
        const price = document.querySelector('.product-price');
        price.textContent = param.summary + '.00 ₽';
    }
    
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
  
    if (localStorage.getItem('quantity')) {
        setProductParam();

    }
  }
  
  export default inputCustom;
  