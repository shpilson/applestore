import pages from '../config/conditions.js'; // Константы
import advantage from './advantages/advantage.js'; // Блок преимуществ 
import catalogue from './catalogue/catalogue.js'; // Категория товаров
import apple_map from './apple_map/apple_map.js'; // Карта контактов (над футером, на главной)

// import myModalActivate from './myModal/main/myModalActivate.js'; // Активация модального окна (на главной)
import myModal from './myModal/main/myModal.js'; // Модальное окно (на главной)


import myModalProduct from './myModal/myModalProduct.js'; // Модальное окно (на странице товара)

if (pages.main) {
    advantage();
    catalogue();
    apple_map();
 //   myModalActivate();
    myModal();
  }

  if (pages.product) {
    myModalProduct();
  }