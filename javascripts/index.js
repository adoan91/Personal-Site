// stellar js parallax function
$(document).ready(function() {
  // only activate stellar js on NON-MOBILE
  if (window.is_mobile) {
    stellarActivated = false;
  } else {
    stellarActivated = true;
  }
});

// removes nav when nav btn is clicked
$(document).ready(function() {
  $(".navbar-collapse ul li").click(function() {
    $(".navbar-collapse").removeClass("in");
  });

});

// smooth scroll function from https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    // removes nav when nav btn is clicked
    $(".navbar-collapse").removeClass("in");

    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
View