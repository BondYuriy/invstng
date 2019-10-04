$(document).ready(function() {
  /* carousel */

  $(".feedback-carousel").owlCarousel({
    loop: true,
    margin: 100,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1200: {
        items: 3
      }
    }
  });

  $(".news-carousel").owlCarousel({
    loop: true,
    margin: 34,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1200: {
        items: 3
      }
    }
  });

  $(".blog-articles").owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1,
        nav: true,
        singleItem: true,
        mouseDrag: true,
        touchDrag: true
      },
      600: {
        items: 0,
        nav: false,
        loop: false,
        singleItem: false,
        mouseDrag: false,
        touchDrag: false
      }
    }
  });
});
