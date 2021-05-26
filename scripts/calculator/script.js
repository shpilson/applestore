const priceSelector = document.querySelector('.product-price');

let priceContent = priceSelector.textContent;
let priceSplit = priceContent.split('.');
let priceCut = priceSplit[0];
let priceJoin = priceCut.split(' ').join('');
const priceNumber = Number(priceJoin);

export default priceNumber;
