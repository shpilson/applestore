let priceSelector = document.querySelector('.product-price');

let priceContent = priceSelector.textContent;
let priceSplit = priceContent.split('.');
let priceCut = priceSplit[0];
let priceCut = priceCut.split(' ').join('');
const priceNumber = Number(priceCut);

export default priceNumber;
