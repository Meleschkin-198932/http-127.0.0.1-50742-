/*alert('Привет, мир!');
alert('Привет, ещё раз');
alert('Привет, ещё раз 2');*/

/*console.log('Привет, мир!');
$('body').css('background-color', 'red');
$('.header').css('background-color', 'green');
$('.footer').css('background-color', 'yellow');*/

$('.js-click-modal-show').click(function(){
//$('.main-image .button, .question-box .button2, a[href="#question"]').click(function(){
    //fadeIn() по-умолчанию добавляет элементу - display:block
    //но в нашем случае, из-за этого ломается вёрстка
    //поэтому, строчкой ниже, мы сначала объявляем, что этот элемент это flex-контейнер
    let modalBackdrop = $('.modal-backdrop');
    //теперь modalBackdrop == $('.modal-backdrop')
    modalBackdrop.css('display', 'flex');
    //и сразу же его скрываем, теперь jquery "знает", что это не блочный тег, а flex-контейнер
    modalBackdrop.hide();
    //и теперь при показе он уже добавит не display:block, а display:flex 
    modalBackdrop.fadeIn();
    //jQuery позволяет производить манипуляции с одним элементом в одну строку, так называемый side-chain
    //modalBackdrop.css('display', 'flex').hide().fadeIn();

});
$('.question-box .modal .cross').click(function(){
    //$('.modal-backdrop').css('display', 'none');
    $('.modal-backdrop').fadeOut();
});

//Две функции - одна срабатывает, когда наводим мышь
//вторая - когда мышь уходит из зоны элемента
$('.services > div').hover(function(){
    //$(this) - указывает на конкретный элемент, на который навели (this без кавычек!)
    //find() - ищет элемент по переданному селектору, но в пределах $(this)
    $(this).find('p').slideDown(); //плавно показывает элемент раскрывая его от верха к низу
    $(this).find('.short-line').animate({
        width: '68px',
        height: '7px'
    }, 500);
}, function(){
    $(this).find('p').slideUp();
    $(this).find('.short-line').animate({
        width: '60px',
        height: '3px'
    }, 500);
});

$('.faq > div .question').click(function(){
    //parent() - указывает на родителя элемента $(this)
    //slideToggle() - если элемент скрыт, работает как slideDown, иначе - как slideUp
    $(this).parent().find('.answer').slideToggle(500); 
});
$('.footer .center-block').click(function(){
    $(this).toggleClass('animate');
});

$('.arrow-up a').click(function(event){
    //event.preventDefault();
    $('html, body').animate({
        scrollTop: 300
    }, 1000)
    return false;
});

// $('.menu a[href="#travels"]').click(function(event){
//     $('html, body').animate({
//         scrollTop: $('#travels').offset().top - 81
//     }, 1000)
//     return false;
// });

$('.js-click-slide-to').click(function(event){
    let target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top - 81
    }, 1000)
    return false;
});
//у кого кнопка была в div:
// $('_ваш_селектор_').click(function(){
//     $('form').submit();
// })

//обработчик формы
$('form').submit(function(){
    let requiredTags = $(this).find('.required');
    requiredTags.each(function(){
        if($(this).val() == '') {
            $(this).next('.error-text').show();
            //$(this).css('border-color', '#ff0000');
        } else {
            //$(this).css('border-color', '#ffc913');
            $(this).next('.error-text').hide();
        }
    });
    // let nameTag = $(this).find('[name="fio"]');
    // let emailTag = $(this).find('[name="email"]');
    // let phoneTag = $(this).find('[name="phone"]');

    // if(nameTag.val() == ''){
    //     nameTag.css('border-color', '#ff0000');
    // } else {
    //     nameTag.css('border-color', '#ffc913');
    // }

    // if(emailTag.val() == ''){
    //     emailTag.css('border-color', '#ff0000');
    // } else {
    //     emailTag.css('border-color', '#ffc913');
    // }

    // if(phoneTag.val() == ''){
    //     phoneTag.css('border-color', '#ff0000');
    // } else {
    //     phoneTag.css('border-color', '#ffc913');
    // }
    // if( nameTag.val() == '' || emailTag.val() == '' || phoneTag.val() == ''){    
    //     emailTag.css('border-color', '#ff0000');
    //     phoneTag.css('border-color', '#ff0000');
    //     //alert('Поля не могут быть пустыми!');
    // } else {    
    //     emailTag.css('border-color', '#ffc913');
    //     phoneTag.css('border-color', '#ffc913');
    //     //alert('Мы бы могли отправить форму, если бы знали куда');
    // }
    return false;
});

$('.main-image .slider').click(function(){
    //1.получить номер видимой картинки с display:block
    //2.скрыть её display: none
    //3.показать следующую за ней картинку
    // let currentIndex = 0;
    // let newIndex = 0;
    //$(this) - указывает на slider
    // $(this).find('div').each(function(index){
    //     //$(this) - теперь указывает на конкретный слайд
    //     //проверяем, видимый ли элемент
    //     if($(this).is(':visible')) {
    //         $(this).hide();
    //         currentIndex = index;
    //         newIndex = currentIndex + 1;
    //     }
    // });
    // //$(this) - снова указывает на slider, т.к., мы вышли из цикла
    // if(newIndex >= $(this).find('div').length) {
    //     newIndex = 0;
    // }
    // $(this).find('div').eq(newIndex).show();

    //второй вариант после новых требований
    let activeEl = $(this).find('.active');
    let nextPosition = activeEl.index() + 1;
    activeEl.removeClass('active'); //////removeClass-убираем класс/////
    if(nextPosition >= $(this).find('div').length) {
        nextPosition = 0;
    }
    $(this).find('div').eq(nextPosition).addClass('active');  ///addClass-добавляем класс////
});

// setTimeout - выполняет какой-то переданный код или функцию один раз
// setInterval - выполняет какой-то переданный код или функцию постоянно с указанным временным интервалом

$(document).ready(function(){
    setInterval(function(){
        $('.main-image .slider').click();
    }, 3000);
});

$('.slider-navigation .right').click(function () {
    let activeEl = $('.slider').find('.active');
    let nextPosition = activeEl.index() + 1;
    activeEl.removeClass('active'); //////removeClass-убираем класс/////
    if(nextPosition >= $('.slider').find('div').length) {
        nextPosition = 0;
    }
    $('.slider').find('div').eq(nextPosition).addClass('active')
});

$('.slider-navigation .left').click(function () {
    let activeEl = $('.slider').find('.active');
    let nextPosition = activeEl.index() - 1;
    activeEl.removeClass('active'); //////removeClass-убираем класс/////
    if(nextPosition >= $('.slider').find('div').length) {
        nextPosition = 0;
    }
    $('.slider').find('div').eq(nextPosition).addClass('active')
});