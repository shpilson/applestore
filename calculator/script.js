/**
 *
 * АЛГОРИТМ КАЛЬКУЛЯЦИИ
 * 
 * 1) Создаём объект с константами
 *
 * 2) В (addictedOptions) находится цена в текстовом виде. Необходимо вернуть переменную только с цифрами,
 * в числовом формате.
 * 
 * 3) В (priceOfItem) основная цена в текстовом виде. Удаляем пробелы. 
 * Переводим в цифры. Сохраняем в новой переменной.
 * 
 * 4) Добавить к базовой цене (цифры) товара опцию (цифры), на которой активен чекбокс
 * 
 * 5) Вернуть базовую цену в текстовый формат.
 * 5.1) Отобразить новую базовую цену
 */

/**
 * 1 – Создаём объект с константами
 *
 * optionGroup: основной блок с дополнительными услугами
 * additionalOptions: блок с дополнительными опциями
 * checkboxes: чекбоксы дополнительных опций
 * addictedOptions: дополнительные опции без чекбокса с ценой
 * priceOfItem: основная цена самого товара
 * 
 */

const constants = {
    optionGroup: document.querySelector('.product-single #product.row .form-group.option-group'),
    additionalOptions: document.querySelector('.product-single #product.row .form-group.option-group > label ~ div'),
    checkboxes: document.querySelectorAll('.product-single #product.row .form-group.option-group > label ~ div > .checkbox'),
    addictedOptions: document.querySelectorAll('.product-single #product.row .form-group.option-group > label ~ div > .checkbox > label.custom-control-label'),
    priceOfItem: document.querySelector('.product-single .product-price'),
  };

/**
 *
 * 2) В (addictedOptions) удаляем пробелы между символами.
 * 2.1) В (addictedOptions) находится цена в текстовом виде. Необходимо вернуть переменную только с цифрами,
 * в числовом формате.
 * 
 */




// Выполняем 2 шаг. В (addictedOptions) находится цена в текстовом виде. 
// Необходимо вернуть переменную только с цифрами, в числовом формате.

// NodeList дополнительных опций -> Массив -> Получаем текст внутри доп. опций
// можно так -> const listOfOptions = () => Array.from(constants.addictedOptions).map(el => el.textContent.trim());

const listOfOptions = function () {
    Array.from(constants.addictedOptions)
    .map(el => el.textContent.trim());  
} 