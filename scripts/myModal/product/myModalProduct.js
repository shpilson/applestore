const myModal1 = document.querySelector(".footer")

function myModalProduct() {
myModal1.insertAdjacentHTML('afterend', `<div id="modal" class="modal">

<!-- Modal content -->
<div class="modal-content">
  <div class="modal-header">
    <span class="close" id='close'>&times;</span>
    <h4>Добро пожаловать на сайт!</h4>
  </div>
  <div class="modal-body">
    <h6>Вы находитесь на странице с товарами.</h6>
  </div>
  <div class="modal-footer">
    <a href="https://www.sellavi.com/"><img src="https://www.sellavi.com/assets/logo.svg"></a>
  </div>
</div>

</div>`)
}

export default myModalProduct;

