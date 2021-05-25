// Запуск скрипта после полной загрузки страницы
$(document).ready(function ()  
{
// Применяем класс закрытия по клику
  $(".close").on("click", function () 
	{
		// Выбираем окно по элементу и закрываем после нажатия на "крестик"
		$("#modal").css("display", "none")
	});

	$(document).mouseup(function (e) {
        var container = $("#modal");
        if (container.has(e.target).length === 0){
            container.hide();
        }
    });
  
});

// Проверка сессии пользователя, первый ли он раз на странице
// Если не в первый раз за сессию - блокируем показ всплывающего окна

const repeatMainModal = function() {
	if(sessionStorage.getItem('#modal') !== 'true'){
    $('#modal').css('display','block');

sessionStorage.setItem('#modal','true');
	}
}

export default repeatMainModal; 