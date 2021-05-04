let options = {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Accept': 'application/json',
        'x-token': '3800f6-340d3e-4ce1ec-c90506-bbff41',
    }
};

let res;

fetch("https://cors-anywhere.herokuapp.com/https://ru.sellavi.com/gateway/orders/100/0", options)
    .then(res => res.json())
    .then(data => res = data)
    .then(data => {
    	for(let i in res.response){
      	document.querySelector(".myItem").insertAdjacentHTML('beforeend', 
        `<table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">№ заказа</th>
            <th scope="col">Клиент</th>
            <th scope="col">Дата оформления</th>
            <th scope="col">Товаров в корзине</th>
            <th scope="col">Общая сумма</th>
            <th scope="col">Статус заказа</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>${res.response[i].order_id}</td>
            <td>${res.response[i].name}</td>
            <td>${res.response[i].date_added}</td>
            <td>${res.response[i].products}</td>
            <td>${res.response[i].total}</td>
            <td>${res.response[i].status}</td>
          </tr>
        </tbody>
      </table>`)
      }
    })
    .catch(err => console.log(err.message));