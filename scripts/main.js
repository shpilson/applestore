import pages from '../config/conditions.js'; // Константы
import advantage from './advantages/advantage.js'; // Блок преимуществ 
import catalogue from './catalogue/catalogue.js'; // Категория товаров
import apple_map from './apple_map/apple_map.js'; // Карта контактов (над футером, на главной)

import myModal from './myModal/myModal.js'; // Модальное окно (на главной)
import myModal from './myModal/myModalProduct.js'; // Модальное окно (на странице товара)

if (pages.main) {
    advantage();
    catalogue();
    apple_map();
    myModal();
  }

  if (pages.product) {
    myModalProduct();
  }