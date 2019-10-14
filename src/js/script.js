$(document).ready(function() {
  /* carousel */

  $(".feedback-carousel").owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    responsive: {
      0: {
        items: 1,
        margin: 10
      },
      768: {
        items: 2
      },
      992: {
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
        items: 1,
        margin: 15
      },
      768: {
        items: 2
      },
      992: {
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
      768: {
        items: 2,
        nav: true,
        singleItem: true,
        mouseDrag: true,
        touchDrag: true
      },
      992: {
        items: 0,
        nav: false,
        loop: false,
        singleItem: false,
        mouseDrag: false,
        touchDrag: false
      }
    }
  });

  /* */

  $(".footer-btn-toggle").click(function() {
    $(this)
      .prev(".footer-toggle-box")
      .toggleClass("show");
  });

  $(".broker-btn-show").click(function() {
    $(this).addClass("hidden");
    $(".article-box").addClass("show");
  });
});
