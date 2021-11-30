$(function(){

     $('.banner-main').slick({

          slideToShow:1,
          slideToScroll:1,
          autoplay:true,
          autoplaySpeed:3000,
          speed:1500,
          arrows:true,
          prevArrow:'.left',
          nextArrow:'.right',
     });
     $('.mobile-slider').slick({

          slidesToShow:4,
          slidesToScroll:1,
          autoplay:true,
          autoplaySpeed:3000,
          speed:500,
          arrows:true,
          prevArrow:'.left1',
          nextArrow:'.right1',
     });
     $('.testimonial-slider').slick({

          slidesToShow:2,
          slidesToScroll:1,
          autoplay:true,
          autoplaySpeed:3000,
          speed:1500,
          arrows:true,
          prevArrow:'.left2',
          nextArrow:'.right2',
     });


     new WOW().init();    

     var mixer = mixitup('.product-mixit');

$('.back-to-top').click(function(){
     $('html,body').animate({scrollTop:0}, 800);
});

$(window).scroll(function(){

     var scrolling=$(this).scrollTop();
     if(scrolling >100){
          $('.back-to-top').fadeIn();
     }
     if(scrolling > 120){
          $('#navbar').addClass('fixed-nav');
     }
     else{
          $('.back-to-top').fadeOut();
          $('#navbar').removeClass('fixed-nav');
     }

});


});