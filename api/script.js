let options = {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Accept': 'application/json',
        'x-token': '3800f6-340d3e-4ce1ec-c90506-bbff41',
    }
};

let res;

fetch("https://cors-anywhere.herokuapp.com/https://ru.sellavi.com/gateway/categories", options)
    .then(res => res.json())
    .then(data => res = data)
    .then(data => {
    	for(let i in res.response){
      	document.querySelector(".myItem").insertAdjacentHTML('beforeend', `<span>${res.response[i].full_name}</span>`)
      }
    })
    .catch(err => console.log(err.message));