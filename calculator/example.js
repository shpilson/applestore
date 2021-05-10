import {constants, getInnerText, setListener, changeCheckboxChild, activateCheckbox, changeTypeInput} from './calculator/justforme.js';

// Калькулятор 

// Создаём константы (constants.js)

const constants = {
    container: document.querySelector('.product-single #product.row .form-group.option-group'),
    inputOptions: document.querySelector('.product-single #product.row .form-group.option-group > label ~ div'),
    options: document.querySelectorAll('.product-single #product.row .form-group.option-group > label ~ div > .checkbox'),
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
  
export { constants };

  // getInnerText.js

const getInnerText = () => Array.from(constants.optionsLabel).map(el => el.textContent.trim());

export { getInnerText };

  // (changeCheckboxChild.js)

const setListener = () => {
  const basedPrice = constants.price.textContent; // Цена товара = цена товара (текст)

  const basedPriceCut = basedPrice.match(/[\d]/g); // Цена товара (обрезана) = оставляем числа

  basedPriceCut.splice(-2, 4).join('') // Цена товара (обрезана) - удаляем 4 элемента со 2 элемента (с конца) / Соединяем символы в строке

  constants.container.addEventListener('click', (e) => { // Слушатель по клику на основной блок с дополнительными услугами
    const price = +e.target // основная цена самого товара = клику по элементу в блоке с дополнительными услугами
      .closest('.checkbox') // около поля "чекбокс"
      .querySelector('.input-option_price')
      .textContent.split(/[^\d]/g) // разделяем массив. разделитель - символы
      .join(''); // Соединяем символы в строке


    const cutBasedPrice = basedPriceCut.includes(' ') ? basedPriceCut.replace(/\s/g, '') : basedPriceCut
    // cutBasedPrice = если есть пробелы в цене товара, то убираем их

    const sum = price + +cutBasedPrice.join(''); // сумма = действия + соединенные цифры основной цены товара
    const sumArr = sum.toString(); // сумму переводим в строку
    let newPrice = sumArr.split(''); // новая цена = разделяем строчный массив, разделитель - без символа

    if (sumArr.length == 4) { // убираем пробелы в новой цене
      newPrice.splice(1, 0, ' ').join(''); // пробел в "ничто"
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

export { changeCheckboxChild, setListener };

// Checkbox.js


const activateCheckbox = () => {
    if (constants.container && constants.checkbox) {
      changeCheckboxChild()
      setListener()
    }
  };

  export { activateCheckbox };
