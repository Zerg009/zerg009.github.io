$(function () {
  var mixer = mixitup('.directions__list');
  $('.directions__filter-btn').on('click', function (){
    $('.directions__filter-btn').removeClass('directions__filter-btn--active');
    $(this).addClass('directions__filter-btn--active ')
  })

  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: false,
  })

  $('.team__slider-prev').on('click', function (e){
    e.preventDefault();
    $('.team__slider').slick('slickPrev')
  })
  $('.team__slider-next').on('click', function (e){
    e.preventDefault();
    $('.team__slider').slick('slickNext')
  })

  $(".header__nav-list a, .header__top-btn, .footer__go-top").on("click", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 800)
  })
  $('.burger').on('click', function(e){
    e.preventDefault();
    $('.header__top').toggleClass('header__top--open')
  })
})