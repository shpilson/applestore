const myModal1 = document.querySelector(".footer")

function myModal() {
myModal1.insertAdjacentHTML('afterend', `<div id="modal" class="modal">

<!-- Modal content -->
<div class="modal-content">
  <div class="modal-header">
    <span class="close" id='close'>&times;</span>
    <h4>Добро пожаловать на сайт!</h4>
  </div>
  <div class="modal-body">
    <h6>Этот шаблон создан с целью демонстрации возможностей платформы.</h6>
  </div>
  <div class="modal-footer">
    <a href="https://www.sellavi.com/"><img src="https://www.sellavi.com/assets/logo.svg"></a>
  </div>
</div>

</div>`)
}


// Запуск скрипта после полной загрузки страницы
$(document).ready(function MyModal()  
{
// Применяем класс закрытия по клику
  $(".close").on("click", function () 
	{
		// Выбираем окно по элементу и закрываем после нажатия на "крестик"
		$("#modal").css("display", "none")
	});
  
});

// Проверка сессии пользователя, первый ли он раз на странице
// Если не в первый раз за сессию - блокируем показ всплывающего окна

if(sessionStorage.getItem('#modal') !== 'true'){
    $('#modal').css('display','block');
// Если сессия первая - true, показываем всплывающее окно
// Для повторного показа окна, потребуется открыть новую вкладку и зайти на страницу повторно
sessionStorage.setItem('#modal','true');
	}


export default myModal;

