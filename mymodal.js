let myModal = document.querySelector(".custom_section")

  myModal.insertAdjacentHTML('afterbegin', `<div id="modal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span class="close" id='close'>&times;</span>
      <h2>Добро пожаловать на сайт!</h2>
    </div>
    <div class="modal-body">
      <p>Этот шаблон создан с целью демострации возможностей платформы.</p>
      <p>Хотите такой же сайт? Присоединяйтесь!</p>
    </div>
    <div class="modal-footer">
      <h3><a href="https://www.sellavi.com/">www.sellavi.com</a></h3>
    </div>
  </div>

</div>

<script src="https://shpilson.github.io/applestore/mymodal.js"></script>`)


// Запуск скрипта после полной загрузки страницы
$(document).ready(function ()  
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
