


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:false,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:2,
            nav:false,
            loop:true
        }
    }
})

 $(document).on('click', 'a[href^="#"]', function(event) {
       event.preventDefault();
var menuHeight = $('#main-nav').height();
       $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - menuHeight
        }, 500);
  });
    
    
    setTimeout(function(){
   
        $('h1').addClass('animated fadeInDown');
    },1000);
    
    setTimeout(function(){
        $('.jumbotron').find('h2').addClass('animated fadeInLeft');
    },1700);
    
      setTimeout(function(){
        $('.jumbotron').find('a.btn').addClass('animated fadeInUp');
    },2600);
    
    

    
    

    
    $('#btn-first').click(function(){
        $("html, body").animate({ scrollTop: $('.how-work').height() }, 2000);
    })
})

