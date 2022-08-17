let slideIndex = 1; // Устанавливаем индекс изображения в слайд-шоу равным 1

showSlides(slideIndex); // Вызываем основную функцию "показать слайды" и передаем в 1


function nextSlide() {
    showSlides(slideIndex += 1); // Функция увеличивает индекс на 1 и показывает следующй слайд
}
function previousSlide() {
    showSlides(slideIndex -= 1);  // Функция уменьшяет индекс на 1, показывает предыдущий слайд
}

function mainSlide(n) {
    showSlides(slideIndex = n);  // Основная функция - принимает числовой аргумент для отображения номера слайда и присваивает это число переменной 'n'
}

function showSlides(n) {

    let slides = document.getElementsByClassName("item");


    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {              
        slideIndex = slides.length    // Если число, переданное в основную функцию, меньше чем количество слайдов, тогда установим индекс слайда равным количеству слайдов.
    }

    for (let slide of slides) {
        slide.style.display = "none"; // Значение "нет" для скрытия слайдов
    }
    
    slides[slideIndex - 1].style.display = "block"; // Установка для стиля отображения слайда перед (-1) значения "блокировать" дедает видимым
}

