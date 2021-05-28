import pages from '../config/conditions.js'; // Константы
import advantage from './advantages/advantage.js'; // Блок преимуществ 
import catalogue from './catalogue/catalogue.js'; // Категория товаров
import apple_map from './apple_map/apple_map.js'; // Карта контактов (над футером, на главной)

// Всплывающие окна
import myModal from './myModal/main/myModal.js'; // Модальное окно (на главной)
import repeatMainModal from './myModal/main/myModalActivate.js'; //  Активирация окна на главной странице

// import myModalProduct from './myModal/product/myModalProduct.js'; // Модальное окно (на странице товара)

import modalCheckout from './myModal/checkout/modal.js'; // Модальное окно (корзина)
import repeatModal from './myModal/checkout/modalActivate.js'; // Активирация окна на странице корзины

 import priceNumber from './calculator/script.js'; // Базовая цена (строка) -> Число
 import inputCustom from './calculator/input.js'; // Поле для ввода кг

if (pages.main) {
    advantage();
    catalogue();
    apple_map();
 //   myModalActivate();
    myModal();
    repeatMainModal();
  }

  if (pages.product) {
  //  myModalProduct();
    priceNumber;
    inputCustom();
  }

  if (pages.checkout) {
    modalCheckout();
    repeatModal();  
    priceNumber;
    inputCustom();
  }