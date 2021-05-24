const myModal1 = document.querySelector(".footer")

function myModal() {
myModal1.insertAdjacentHTML('afterend', `<div id="modal" class="modal">

<!-- Modal content -->
<div class="modal-content1">
  <div class="modal-header1">
    <span class="close" id='close'>&times;</span>
    <h4>Добро пожаловать на сайт!</h4>
  </div>
  <div class="modal-body1">
    <h6>Этот шаблон создан с целью демонстрации возможностей платформы.</h6>
  </div>
  <div class="modal-footer1">
    <a href="https://www.sellavi.com/"><img src="https://www.sellavi.com/assets/logo.svg"></a>
  </div>
</div>

</div>`)
}

export default myModal;

