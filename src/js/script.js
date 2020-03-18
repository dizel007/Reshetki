// var name = "Ivan";
// let number = 7;
// const pi =3.14;


// number = 12222;

// string 
// boolean
// null
// undefined
// let obj = {
//     name ='apple',
//     color = 'green',
//     weight = 200
//  }

//symbol

// alert (1234);
// console.log(number);
// let answer = confirm ("Are you 18?");
// console.log(answer);

// let answer = prompt ("Are you 18?", "ererwer");
// console.log(answer);

// console.log(4+5);
// console.log(4 - 'food');
// console.log(4 + 'food');


// let isChecked = true,
//     isClose = false;
// // && - И
//     console.log(isChecked && isClose);

//     // || - ИЛИ
//     console.log(isChecked || isClose);


// if (2*4 == 1*1) {
//     console.log('TRUE')
//     } else {
//     console.log('LAY')
//     }

// let answer = confirm ("Are you 18?");

// if (answer) {
//     console.log('Go to Us')
// } else {
//     console.log('Go home small pizduke')
// }

// const num = 50;

// if (num<49) {
//     console.log("lose 49")
// } else if (num > 100) {
//     console.log("Biiiig")
// } else {
//     console.log("REalyyyyyyy")
// }


// for (let i = 1; i < 8; i++) {
//     console.log(i)        ;
//     }
// }

// function logging(a, b) {
//      console.log(a+b)
// }

// logging(3,5);
// logging(5,6);

//  Скрипт слайдера slick slider
$(document).ready(function(){
        $('.carousel__inner').slick({
            //dots: true, //кружочки внизу
            infinite: true,
            speed: 1200,
            //adaptiveHeight: true, // подстаиваются по высоте
            // autoplay: true,    // автопролистыфвание
            // autoplaySpeed: 2000,
            // fade: true,         // появление слайда
            // cssEase: 'linear'
            // arrows: true  // кнопки переключения
            prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
            slidesToShow: 1,
            responsive: [
                {
                  breakpoint: 1024, // от 0 до 1024 пикселей
                  settings: {
                    dots: false,
                    arrows: false
                  }
                }
              ]
          });

// срипт JQuery  по которому работают ТАБы
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });


// скрипт для наших item чтобы переворачивались они
     function togglesSlide(item) {
           $(item).each(function(i) {
             $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                 $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
             });
           });
      }

  togglesSlide('.catalog-item__link');
  togglesSlide('.catalog-item__back');


// модальные окна
$('[data-modal=consultation]').on('click', function(){  // при нажатии на кнопку с атрибутом data-modal=consultation
    $('.overlay, #consultation').fadeIn('slow'); // показать класс overlay и 'элемент с ID#consultation

});

$('.modal__close').on('click', function(){ //при нажатии на крестик все модальные элементы скрываются

  $('.overlay, #consultation, #order, #thanks').fadeOut('fast');

});
// При нажатии на слой OVERLAY  закрываются все модальные окна
$('.overlay').on('click', function() {
  $('.overlay, #consultation, #order, #thanks').fadeOut('fast');
});


// открывает модальное окно для заказа товара но не изменяются в форме название самого товара
// $('.button_mini').on('click', function(){
//   $('.overlay, #order').fadeIn('slow');

// });

$('.button_mini').each(function(i){
  $(this).on('click', function() {
 // подставляет в карточку техем из .catalog-item__subtitle
    $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
    $('.overlay, #order').fadeIn('slow');


  });



});


//валидация форм

// используем валидатор Jquery

function valideForms(form){
  $(form).validate({
    rules : {
     name: {
       required: true,
       minlength: 2
     },
      phone: "required",
      email: {
         required: true,
         email: true
             },
    },
    messages: {
     name: {
       required: "Введите свое имя",
       minlength: jQuery.validator.format("Введите {0} и более сомволов")
     },
     phone: "Введите свой номер телефона",
     email: {
       required: "Введите свой email",
       email: "неправильно введен адрес почты"
     }
   }
 });
}

valideForms('#consultation-form');
valideForms('#consultation form');
valideForms('#order form');


//// Ввод телефона по правилам
$('input[name=phone').mask("+7 (999) 999-99-99");



//отправка сообщения на почту
$('form').submit(function(e){
  e.preventDefault(); //отменяем стандартное поведение браузера
  $.ajax({
    type: "POST", // так как отдаем данные для передачи
    url: "mailer/smart.php",
    data: $(this).serialize() // данные для отправки на сервер // ajax запрос закончен

  }).done(function(){ // обработка ответа от сервера 
    $(this).find("input").val(""); // находим все инпуты и записываем в них пустые строки 
      $('#consultation, #order').fadeOut(); // закрытие модельных окол
      $('.overlay, #thanks ').fadeIn('slow');


    $('form').trigger('reset'); // все формы должны очиститься
  });
  return false;

});

//// пробуем свернуть окно по нажатию кнопки //////////////////////////////////////
$('form').submit(function(e){
  e.preventDefault(); //отменяем стандартное поведение браузера
  
  return false;

});







/// скрипт кнопки "вернуться вверх" отслеживает количество пролистанных вниз пикселей

$(window).scroll(function(){
  if($(this).scrollTop()> 1200) {
      $('.pageup').fadeIn();
  }
  else {
    $('.pageup').fadeOut();
  }


});

/// плавная прокрутка экрана вверх
//$("a[href^='#']").click(function(){ //для всех ссылок
$("a[href='#up, #catalog']").click(function(){ //для ссылки up 
  var _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});

// скрипт для библиотеки animation.css плавное появление
  new WOW().init();

});

// -- Tiny Slider 
// const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     slideBy: 'page',
//     autoplay: false,
//     controls: false,
//     //nav: false
//   });

//   document.querySelector('.prev').addEventListener('click', function () {
//     slider.goTo('prev');
//   });
  
//   document.querySelector('.next').addEventListener('click', function () {
//     slider.goTo('next');
//   });