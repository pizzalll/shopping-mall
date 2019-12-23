// $(document).ready(function(){
//     $('.slider').bxSlider({
//         mode: 'fade',
//         auto: true,
//         pager: true,
//         pause: 4000,
//     });
//   });

// $(document).ready(function(){
//     $('.bxslider').bxSlider({
//         auto: true,
//         pause: 6000,
//         minSlides: 1,
//         maxSlides: 3,
//         slideWidth: 300,
//         pager: false,
//         controls: false,
//         slideMargin: 150,
//         speed: 700,
//     });
// });

$('#main_banner').imagesLoaded(function(){
    $(document).ready(function(){
        $('.slider').bxSlider({
            mode: 'fade',
            auto: true,
            pager: true,
            pause: 4000,
        });
    });
});


$('#review').imagesLoaded(function(){
    $(document).ready(function(){
        $('.bxslider').bxSlider({
            auto: true,
            pause: 6000,
            minSlides: 1,
            maxSlides: 3,
            slideWidth: 300,
            pager: false,
            controls: false,
            slideMargin: 150,
            speed: 700,
        });
    });
});