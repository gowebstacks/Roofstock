$(document).ready(function ($) {





    // var mySwiper = new Swiper('#reviews', {
    //     speed: 500,
    //     spaceBetween: 30,
    //     slidesPerView: 3,
    //     centeredSlides: true,
    //     initialSlide: 1,
    //     loop: true
    // });
    //
    // if ($(window).width() < 991) {
    //     $('#header .btn-green').appendTo('.slicknav_nav li:last-child');
    // }
    //
    // var mySwiper2 = new Swiper('#logos-bar', {
    //     speed: 800,
    //     loop: true,
    //     slidesPerView: 4,
    //     autoplay: true,
    //     delay: 3500
    // });
    //
    //
    // $('.btn').click(function(e){
    //      var offsetTop =$(href).offset().top;
    //     $('html, body').stop().animate({
    //         scrollTop: offsetTop
    //     }, 1000);
    //     return false
    //
    // });

    $('#tgl-btn').click(function () {
        $(this).toggleClass('slicknav_open');
        $('#header').toggleClass('slick-open');
        $('.header-nav').slideToggle();
    });


    var swiper = new Swiper('#teachers', {
        // pagination: {
        //     el: '.swiper-pagination',
        // },
        slidesPerView: 1,
        spaceBetween: 30,
        initialSlide: 1,
        on: {
            slideChange: function () {
                $('.embed-responsive-item').trigger('pause');
            },
        },
    });

    if ($('.set').length) {

        $(".set > a").on("click", function () {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(this).parent().removeClass("active");

                $(this).siblings(".content").slideUp(300);
                $(".set > a i")
                    .removeClass("fa-minus")
                    .addClass("fa-plus");
            } else {
                $(".set > a i")
                    .removeClass("fa-minus")
                    .addClass("fa-plus");
                $(this)
                    .find("i")
                    .removeClass("fa-plus")
                    .addClass("fa-minus");

                $(".set > a").removeClass("active");
                $(this).addClass("active");
                $(".content").slideUp(300);
                $('.set').removeClass("active");
                $(this)
                    .siblings(".content")
                    .slideDown(300);
                $(this).parent().addClass("active");
            }
            return false;
        })
    }
});

