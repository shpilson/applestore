/**
 * Создаём объект с константами
 *
 * optionGroup: основной блок с дополнительными услугами
 * additionalOptions: блок с дополнительными опциями
 * checkboxes: чекбоксы дополнительных опций
 * optionsWithPrice: дополнительные опции без чекбокса с ценой
 * priceOfItem: основная цена самого товара
 * regx: регулярные выражения
 * 
 */

const constants = {
    optionGroup: document.querySelector('.product-single #product.row .form-group.option-group'),
    additionalOptions: document.querySelector('.product-single #product.row .form-group.option-group > label ~ div'),
    checkboxes: document.querySelectorAll('.product-single #product.row .form-group.option-group > label ~ div > .checkbox'),
    optionsWithPrice: document.querySelectorAll('.product-single #product.row .form-group.option-group > label ~ div > .checkbox > label.custom-control-label'),
    priceOfItem: document.querySelector('.product-single .product-price'),
    regx: {
      cutPrice: /\(([\d\. ]+)/,
      regexRepalce: /\(\+([\d\. ]+)₽\)/gi,
      getPrice: /(\d+ [\d+]+)|(\d+)/,
      getNameInput: /^[(\d+)|(\d+\.\d)]+\s[\wА-Яа-я]+/i,
    },
  };

  