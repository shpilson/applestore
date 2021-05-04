let options = {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Accept': 'application/json',
        'x-token': '3800f6-340d3e-4ce1ec-c90506-bbff41',
    }
};

let res;

fetch("https://cors-anywhere.herokuapp.com/corsdemo/https://ru.sellavi.com/gateway/orders/100/0", options)
    .then(res => res.json())
    .then(data => res = data)
    .then(data => {
    	for(let i in res.response){
      	document.querySelector(".myItem").insertAdjacentHTML('beforeend', `Номер заказа: <span>${res.response[i].order_id}</span></br>
 Статус заказа: <span>${res.response[i].status}</span></br>
 Клиент: <span>${res.response[i].name}</span> </br>
 Дата оформления заказа: <span>${res.response[i].date_added}</span> </br>
 Товаров в корзине: <span>${res.response[i].products}</span></br>
 Общая сумма: <span>${res.response[i].total}</span></br>`)
      }
    })
    .catch(err => console.log(err.message));