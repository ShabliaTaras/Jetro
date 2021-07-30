$(function(){
  $('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.slider__nav',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/arrow-right.svg" alt=""></button>'
    
  });
  $('.slider__nav').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    asNavFor: '.slider__inner',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 958,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 911,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 618,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 466,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });
  $('.header__menu-btn').on('click', function (){
    $('.header__menu ul').slideToggle();
  });

});

