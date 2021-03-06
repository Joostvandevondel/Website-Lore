jQuery(document).ready(function() {
  // initialize the tooltips
  $('[data-toggle="tooltip"]').tooltip({ trigger: 'click hover' });

  // intialize the carousel
  $('#carouselHacked').carousel();

  //this code is for the gmap
  var map = new GMaps({
    el: '#map',
    lat: 50.930944,
    lng: 4.020107
  });
  //this code is for smooth scroll and nav selector
  $(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $('a').each(function () {
        $(this).removeClass('active');
      });
      $(this).addClass('active');

      var target = this.hash,
      menu = target;
      $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top-50
      }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
      });
    });
  });

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.navbar-default .navbar-nav>li>a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('.navbar-default .navbar-nav>li>a').removeClass("active");
      currLink.addClass("active");
    }
    else{
      currLink.removeClass("active");
    }
  });
}

//this code is for animation nav
  jQuery(window).scroll(function() {
    var windowScrollPosTop = jQuery(window).scrollTop();
    if(windowScrollPosTop >= 150) {
      jQuery(".header").css({"background": "#B193DD",});
      jQuery(".top-header p.logo").css({"font-size": "2.7rem"});
      jQuery(".navbar-default").css({"margin-top": "-15px",});
    }
    else{
      jQuery(".header").css({"background": "transparent",});
      jQuery(".top-header p.logo").css({"font-size": "5rem"});
      jQuery(".navbar-default").css({"margin-top": "12px", "margin-bottom": "0"});
    }
  });
});
