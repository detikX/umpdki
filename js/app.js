// alert(1);

$(window).scroll(function () {
  //zoom
  var top = $(window).scrollTop(),
    scale = top / 2000;
  $(".inner").css({
    transform: "scale(" + scale + "," + scale + ")",
    "-webkit-transform": "scale(" + scale + "," + scale + ")",
  });

  var scroll = $(window).scrollTop();
  // console.log(scroll);
  var header = $("header");
  return scroll > 20 ? header.addClass("stuck") : header.removeClass("stuck");
  // }
});

$(() => {
  $(window).on("load", function () {
    $(".preloader").fadeOut(10000);
    $(".preloader").remove();
  });
  new WOW().init();
  var mobile = $(".menu").addClass("mob");
  $(document).on("click", ".m-menu", () => {
    $(".menu").fadeIn("fast");
    // alert(1);
  });
  $(document).on("click", ".close-btn", () => {
    $(".menu").hide();
    // alert(1);
  });

  if ($(window).width() > 768) {
    // $(".m-menu").click(() => {
    // });
  }

  const tilt = $(".js-tilt").tilt();
  // tilt.on("change", callback); // parameters: event, transforms
  // tilt.on("tilt.mouseLeave", callback); // parameters: event
  // tilt.on("tilt.mouseEnter", callback); // parameters: event

  $(".js-tilt").tilt({
    max: 30,
    speed: 600,
    scale: 1,
    transition: true,
    // easing: "cubic-bezier(.03,.98,.52,.99)",
    perspective: 600,
    // glare: true,
  });
});

//count
/*$(function () {
  function isScrolledIntoView($elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();
    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  }

  function count($this) {
    var current = parseInt($this.html(), 10);
    if (
      isScrolledIntoView($this) &&
      !$this.data("isCounting") &&
      current < $this.data("count")
    ) {
      $this.html(++current);
      $this.data("isCounting", true);
      setTimeout(function () {
        $this.data("isCounting", false);
        count($this);
      }, 1);
    }
  }

  $(".count").each(function () {
    $(this).data("count", parseInt($(this).html(), 10));
    $(this).html("100000");
    $(this).data("isCounting", false);
  });

  function startCount() {
    $(".count").each(function () {
      count($(this));
    });
  }
  $(window).scroll(function () {
    startCount();
  });
});*/
//slick

$(".autoplay").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
