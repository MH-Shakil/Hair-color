/******* right-sidebar *******/
 $(document).ready(function() {
    $("[data-trigger]").on("click", function(e) {
        var offcanvas_id = $(this).attr('data-trigger');
        $(offcanvas_id).toggleClass("show");
       
        $("#section-body").addClass("section-body-content-resp");
      
     

        // single-product-page
        if (window.matchMedia('(min-width: 992px)').matches) {
            $(".top-resp-main-menu").css({"width": "80%"});
            $(".color-category").css({"font-size": "11px"});
        }
        else{
            $(".top-resp-main-menu").css({"width": "100%"});
            $(".color-category").css({"font-size": "12px"});
        }

    

        // Home Page
        if (window.matchMedia('(max-width: 1400px)').matches) {
            $(".story-area-left").removeClass("col-md-3");
            $(".story-area-left").addClass("col-md-4");
            $(".story-area-right").removeClass("col-md-9");
            $(".story-area-right").addClass("col-md-8");
            $(".zoomContainer").css({"display": "none"});
        }

        // Single Artist Page
        if (window.matchMedia('(max-width: 1050px)').matches) {
            $(".artist-header").css({"font-size": "23px"});
        }
        
        // product-page
        if (window.matchMedia('(max-width: 1400px)').matches) {
            $(".load-more-content1").removeClass("col-lg-3");
            $(".load-more-content1").addClass("col-lg-4");
            
            
        }
        else{
            $(".load-more-content1").removeClass("col-lg-4");
            $(".load-more-content1").addClass("col-lg-3");
        }

        if (window.matchMedia('(max-width: 1020px)').matches) {
            $(".load-more-content1").removeClass("col-lg-3");
            $(".load-more-content1").addClass("col-lg-6");
            
        }
        else{
            $(".load-more-content1").removeClass("col-lg-6");
            $(".load-more-content1").addClass("col-lg-3");
        }

        if (window.matchMedia('(max-width: 1200px)').matches) {
            $(".product-filter-side").removeClass("col-xl-2");
            $(".product-details-side").removeClass("col-xl-10");    
        }
        else{
            $(".product-filter-side").addClass("col-xl-2");
            $(".product-details-side").addClass("col-xl-10");
        }


      
    });
    $(window).resize(function(e){
        if (window.matchMedia('(max-width: 992px)').matches) {
        
            $("#section-body").removeClass("section-body-content-resp");
            $(".mobile-offcanvas, .mobile-offcanvas1").removeClass("show");
           
        }else{
            
            $("#section-body").addClass("section-body-content");
        }
    })


    $(".btn-close, .btn-close1").click(function(e) {
        $(".mobile-offcanvas, .mobile-offcanvas1").removeClass("show");
        $("#section-body").removeClass("section-body-content-resp");
        $("#section-body").addClass("section-body-content");
        $(".top-resp-main-menu").css({"width": "100%"});
        $(".color-category").css({"font-size": "12px"});
        $(".load-more-content1").removeClass("col-lg-4");
        $(".load-more-content1").addClass("col-lg-3");
        $(".product-filter-side").addClass("col-xl-2");
        $(".product-details-side").addClass("col-xl-10");
        if (window.matchMedia('(max-width: 1020px)').matches) {
            $(".load-more-content1").removeClass("col-lg-6");
            $(".load-more-content1").addClass("col-lg-3");
            
        }
        // Home
        $(".story-area-left").removeClass("col-md-4");
        $(".story-area-left").addClass("col-md-3");
        $(".story-area-right").removeClass("col-md-8");
        $(".story-area-right").addClass("col-md-9");
        // Single-Artist
        $(".artist-header").css({"font-size": "1.75rem"});
        if (window.matchMedia('(max-width: 1400px)').matches) {
            $(".zoomContainer").css({"display": "block"});
        }
 
    });
   
    

});

// Product-quantity
$('.value-minus ').on('click', function() {
    var quantity = $(this).parent().find('.value'),
        newVal = parseInt(quantity.text(), 10) + 1;
    quantity.text(newVal);
});

$('.value-plus').on('click', function() {
    var quantity = $(this).parent().find('.value'),
        newVal = parseInt(quantity.text(), 10) - 1;
    if (newVal >= 1) quantity.text(newVal);
});


// Tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })



  // pre-loader 
  $(window).on('load',function() {
    $("#ta-color-loading").fadeOut("2000");
});


(function($){
    'use strict';

    $('#mobile-menu').meanmenu({
        meanScreenWidth: "576",
        meanMenuContainer: '.mobile-menu'
        
    });

    // sticky active 
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 200) {
         $(".ta-sticky").removeClass("scroll-header");
         $(".ta-menubar-logo").attr("hidden", true); 
        }else{
         $(".ta-sticky").addClass("scroll-header");
         $(".ta-menubar-logo").attr("hidden", false);
        }
       });



    // video slider active
    var videoSliderActive = $('.ta-video-slider-active');
    videoSliderActive.owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        dots:false,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


    // story slider active
    var storySliderActive = $('.ta-story-active');
    storySliderActive.owlCarousel({
        loop:true,
        autoplay:true,
        margin:10,
        nav:true,
        navContainerClass:['ta-story-nav'],
        navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
        center:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:3
            },
           1200:{
            items:3
            },
        }
    });

    // client slider active
    var clientSliderActive = $('.ta-client-active');
    clientSliderActive.owlCarousel({
    autoplayTimeout:3000,
    responsiveClass:true,
    autoplay:true,
    loop:true,
    margin: 10,
    nav:false,
    dots:false,
    responsive:{

            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3,
            },
            992:{
                items:4,
            },
            1200:{
                items:5
                },
        }
    });

     // Load More Artist
  $(document).ready(function(){
    $(".load-more-content").slice(0, 3).show();
    $(".loadMore-btn").on("click", function(e){
      e.preventDefault();
      $(".load-more-content:hidden").slice(0, 6).slideDown();
      if($(".load-more-content:hidden").length == 0) {
        $(".loadMore-btn").text("No Content").addClass("noContent");
      }
    });
    
  })
//   load more Product
  $(document).ready(function(){
    $(".load-more-content1").slice(0, 8).show();
    $(".loadMore-btn1").on("click", function(e){
      e.preventDefault();
      $(".load-more-content1:hidden").slice(0, 4).slideDown();
      if($(".load-more-content1:hidden").length == 0) {
        $(".loadMore-btn1").text("No Content").addClass("noContent");
      }
    });
    
  })

  //   load more Categoty
  $(document).ready(function(){
    $(".load-more-content2").slice(0, 12).show();
    $(".loadMore-btn2").on("click", function(e){
      e.preventDefault();
      $(".load-more-content2:hidden").slice(0, 6).slideDown();
      if($(".load-more-content2:hidden").length == 0) {
        $(".loadMore-btn2").text("No Content").addClass("noContent");
      }
    });
    
  })



  //product Page range
$(function() {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 10000,
        values: [0, 5000],
        slide: function(event, ui) {
            $("#amount").val("৳ " + ui.values[0] + "  - ৳ " + ui.values[1]);
        }
    });
    $("#amount").val("৳ " + $("#slider-range").slider("values", 0) +
        " - ৳ " + $("#slider-range").slider("values", 1));
});

    //Scroll Top
    $(window).scroll(    
        function () {
         if ($(window).scrollTop() > 100) {
              $('.page_top').fadeIn(300);
         } else {
              $('.page_top').fadeOut(300);
         }
      });
    $(function(){
      $( '.page_top' ).click(
        function()
        {
          $( 'html,body' ).animate( {scrollTop:0} , 'slow' ) ;
        }
      ) ;
    })

    

    // product menu button  active
    var productMenuButton = $('.ta-product-button-active');
    productMenuButton.owlCarousel({
    nav:true,
    autoplayTimeout:5000,
    responsiveClass:true,
    // autoplay:true,
    loop:true,
    dots:false,
    margin: 0,
    navContainerClass:['ta-product-button-nav'],
    navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
    autoWidth:true,
    responsive:{
            0:{
                items:2,
            },
            600:{
                items:1,
            },
            1000:{
                items:10,
                
            }
        }
    });


 

    $('.ta-product-menu ul li button').on('click',function(event){
        $('.ta-product-menu ul li button').removeClass('active').addClass('inactive');
         $(this).removeClass('inactive').addClass('active');
         event.preventDefault();
        });

  
    
     // rating active
     $(function () {

        // ---------------------------- page.load() -------------------------
        var artaraxRatingStar = $.artaraxRatingStar({
            onClickCallBack: onRatingStar
        });

        function onRatingStar(rate, id) {
            alert("data-val(rate)=" + rate + " data-id(ProductId)=" + id);
        }

    }); 

})(jQuery);


// Elevate Zoom
$("#zoom_03").elevateZoom({
	gallery:'gallery_01',
    zoomType: "inner",  
    cursor: "crosshair"
    
});
$(window).resize(function(e){
    $('.zoomContainer').remove();
    $("#zoom_03").elevateZoom({
        zoomType: "inner",
        cursor: "crosshair",
        responsive: "true"
    });
    window.location.reload(true); 
});






