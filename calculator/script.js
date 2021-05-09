/**
 * Создаём объект с константами
 *
 * container: основной блок с дополнительными услугами
 * inputOptions: блок с дополнительными опциями
 * checkbox: чекбоксы дополнительных опций
 * optionsLabel: дополнительные опции без чекбокса с ценой
 * price: основная цена самого товара
 * regx: регулярные выражения
 * 
 */

const constants = {
    container: document.querySelector('.product-single #product.row .form-group.option-group'),
    inputOptions: document.querySelector('.product-single #product.row .form-group.option-group > label ~ div'),
    checkbox: document.querySelectorAll('.product-single #product.row .form-group.option-group > label ~ div > .checkbox'),
    optionsLabel: document.querySelectorAll('.product-single #product.row .form-group.option-group > label ~ div > .checkbox > label.custom-control-label'),
    price: document.querySelector('.product-single .product-price'),
    regx: {
      cutPrice: /\(([\d\. ]+)/,
      regexRepalce: /\(\+([\d\. ]+)₽\)/gi,
      getPrice: /(\d+ [\d+]+)|(\d+)/,
      getNameInput: /^[(\d+)|(\d+\.\d)]+\s[\wА-Яа-я]+/i,
    },
  };
  

  // Удаляем пробелы в optionsLabel: дополнительных опциях без чекбокса с ценой

const getInnerText = () => Array.from(constants.optionsLabel).map(el => el.textContent.trim());
  
  // (changeCheckboxChild.js)

const setListener = () => {
  const basedPrice = constants.price.textContent;
  const basedPriceCut = basedPrice.match(/[\d]/g);
  basedPriceCut.splice(-2, 4).join('')
  constants.container.addEventListener('click', (e) => {
    const price = +e.target
      .closest('.checkbox')
      .querySelector('.input-option_price')
      .textContent.split(/[^\d]/g)
      .join('');

    const cutBasedPrice = basedPriceCut.includes(' ') ? basedPriceCut.replace(/\s/g, '') : basedPriceCut
    const sum = price + +cutBasedPrice.join('');
    const sumArr = sum.toString();
    let newPrice = sumArr.split('');

    // Пробелы в цене
    if (sumArr.length == 4) {
      newPrice.splice(1, 0, ' ').join('');
    } else if (sumArr.length == 5) {
      newPrice.splice(2, 0, ' ');
    } else if (sumArr.length == 6) {
      newPrice.splice(3, 0, ' ');
    }

    if (price !== +basedPriceCut.join('')) {
      constants.price.textContent = newPrice.join('') + '.00 ₽';
    } else {
      constants.price.textContent = basedPrice;
    }
  });
};

const changeCheckboxChild = () => {
  const innerTexts = getInnerText();
  Array.from(constants.optionsLabel).map((el, i) => {
    const input = innerTexts[i].trim().match(constants.regx.getNameInput);
    const plusOrMinus = innerTexts[i].match(/\+|\-/);
    const text =
      innerTexts[i].match(constants.regx.regexRepalce) &&
      innerTexts[i].match(constants.regx.regexRepalce)[0];

    const price = text && text.match(constants.regx.getPrice);
    const mainPrice = constants.price.textContent.match(constants.regx.getPrice);
    el.textContent = '';
    el.insertAdjacentHTML(
      'beforeend',
      `
        <div class="input-option_name">${input && input[0]}</div>
        <div class="input-option_price">${plusOrMinus ? plusOrMinus[0] : ''}${
        price ? price[0] : mainPrice[0]
      } ₽</div>
    `,
    );
  });
};

// Checkbox.js

const activateCheckbox = () => {
    if (constants.container && constants.checkbox) {
      changeCheckboxChild()
      setListener()
    }
  };