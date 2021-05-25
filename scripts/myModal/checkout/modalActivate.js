$(document).ready(function ()  
{
// Применяем класс закрытия по клику
  $(".woofirstpurchase-popup-first-button").on("click", function () 
	{
		// Выбираем окно по элементу и закрываем после нажатия на "крестик"
		$("#woofirstpurchase-popup-background").css("display", "none")
	});
  
});

// Проверка сессии пользователя, первый ли он раз на странице. Если не в первый раз за сессию - блокируем показ всплывающего окна

const repeatModal = function() {
    if(sessionStorage.getItem('#modalCheckout') !== 'true'){
    $('#modalCheckout').css('display','block');

sessionStorage.setItem('#modalCheckout','true');
	}
}

export default repeatModal; 