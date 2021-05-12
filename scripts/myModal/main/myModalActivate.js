// Запуск скрипта после полной загрузки страницы
function myModalActivate() {
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
}

export default myModalActivate;