let options = {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Accept': 'application/json',
        'x-token': 'a82f98-1fbf36-3027e0-4d7022-394230',
    }
};

let res;

fetch("https://cors-anywhere.herokuapp.com/corsdemo/https://ru.sellavi.com/gateway/orders/100/0", options)
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