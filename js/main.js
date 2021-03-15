$(document).ready(function(){
    
    //banner slider
    $('.banner-sliders').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        pauseOnFocus: false,
        dots: true,
    });
    
    //dj slider
    $('.dj-sliders').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        arrows: true,
        prevArrow: '<i class="fa fa-chevron-left slick-prev"></i>',
        nextArrow: '<i class="fa fa-chevron-right slick-next"></i>',
    });
    
    //event slider
    $('.event-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 1,
        arrows: true,
        prevArrow: '<i class="fa fa-chevron-left slick-prev"></i>',
        nextArrow: '<i class="fa fa-chevron-right slick-next"></i>',
    });
    
    //blog slider
    $('.blog-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        arrows: true,
        prevArrow: '<i class="fa fa-chevron-left slick-prev"></i>',
        nextArrow: '<i class="fa fa-chevron-right slick-next"></i>',
    });
    
    //testimonial slider
    $('.testimonial').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<i class="fa fa-chevron-left slick-prev"></i>',
        nextArrow: '<i class="fa fa-chevron-right slick-next"></i>',
    });
    
    //typed js code starts here
    var typed = new Typed('#typed1', {
        strings: ['template for night club'],
        typeSpeed: 100,
        smartBackspace: true,
        backSpeed: 20,
        backDelay: 3000,
        loop: true,
    });
    
    var typed = new Typed('#typed2', {
        strings: ['template for night club'],
        typeSpeed: 100,
        smartBackspace: true,
        backSpeed: 20,
        backDelay: 3000,
        loop: true,
    });
    
    var typed = new Typed('#typed3', {
        strings: ['template for night club'],
        typeSpeed: 100,
        smartBackspace: true,
        backSpeed: 20,
        backDelay: 3000,
        loop: true,
    });
    
    var typed = new Typed('#typed4', {
        strings: ['template for night club'],
        typeSpeed: 100,
        smartBackspace: true,
        backSpeed: 20,
        backDelay: 3000,
        loop: true,
    });
    
    var typed = new Typed('#typed5', {
        strings: ['template for night club'],
        typeSpeed: 100,
        smartBackspace: true,
        backSpeed: 20,
        backDelay: 3000,
        loop: true,
    });
    //typed js code ends here
    
    //countdown js code starts here
    let currentYear = new Date().getFullYear();
    let nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);
    
    $('.time .day').countdown(nextYear, function(event){
        let d = $(this).html(event.strftime('%D'));
    });

    $('.time .hour').countdown(nextYear, function(event){
        let d = $(this).html(event.strftime('%H'));
    });

    $('.time .min').countdown(nextYear, function(event){
        let d = $(this).html(event.strftime('%M'));
    });

    $('.time .sec').countdown(nextYear, function(event){
        let d = $(this).html(event.strftime('%S'));
    });
    //countdown js code ends here
    
    //wow js
    new WOW().init();
    
    
    //custom jQuery code starts here for functionalities
    let backToTop = $('#backToTop');
    let menu = $('.menu-bg');
    let html_body = $('html,body');
    
    $(window).on('scroll',function(){
        let scrolling = $(window).scrollTop();
        
        //sticky menu function
        if(scrolling > 150){
           menu.addClass('fixed-menu');
        }else{
            menu.removeClass('fixed-menu');
        }
        
        //back To Top hide/show function
        if(scrolling > 500){
            backToTop.fadeIn();
        }else{
            backToTop.fadeOut();
        }
    });
    
    //back To Top click function
    backToTop.on('click',function(){
        html_body.animate({
            scrollTop : 0
        },1000);
        
        //add active class in home button on menu
        $('.menu-bg .menu .menu-list ul li a').removeClass('active');
        $('.menu-bg .menu .menu-list ul li img').removeClass('active-img');
        $('.menu-bg .menu .menu-list ul li a.home').addClass('active');
        $('.menu-bg .menu .menu-list ul li img.home').addClass('active-img');
    });
    
    //animation on internal link up scroll js
    $('.menu-bg .menu .menu-list ul li a').on('click', function(){
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if(target.length){
                html_body.animate({
                    scrollTop: target.offset().top - 0
                },1000);
                return false;
            }
        }
        
    });
    
    //active menu item background color
    $('.menu-bg .menu .menu-list ul li a').on('click',function(){
        $('.menu-bg .menu .menu-list ul li a').removeClass('active');
        $('.menu-bg .menu .menu-list ul li img').removeClass('active-img');
        $(this).addClass('active');
        $(this).siblings().addClass('active-img');
    });
    
    
});