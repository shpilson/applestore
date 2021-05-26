let priceSelector = document.querySelector('.product-price');

let priceContent = priceSelector.textContent;
let priceSplit = priceContent.split('.');
let priceCut = priceSplit[0];
let priceSplit = priceCut.split(' ').join('');
const priceNumber = Number(priceSplit);

export default priceNumber;
