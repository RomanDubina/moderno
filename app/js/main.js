$(function(){

    $('.icon-th-list').on('click', function(){
        $('.product-page__content .product__item').addClass('list');
        $(this).addClass('active');
        $('.icon-th-large').removeClass('active');
    });
    $('.icon-th-large').on('click', function(){
        $('.product-page__content .product__item').removeClass('list');
        $(this).addClass('active');
        $('.icon-th-list').removeClass('active');
    });
    $('.rate-star').rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
      });


      $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: '$'
        // grid: true
    });

    

    let mixer = mixitup('.products__inner-box');


    
    $('.product-slider__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4
    });

    
});