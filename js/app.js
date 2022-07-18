// alert(1);

// $(window).scroll(function () {
//   //zoom
//   var top = $(window).scrollTop(),
//     scale = top / 2000;
//   $(".inner").css({
//     transform: "scale(" + scale + "," + scale + ")",
//     "-webkit-transform": "scale(" + scale + "," + scale + ")",
//   });

//   var scroll = $(window).scrollTop();
//   // console.log(scroll);
//   var header = $("header");
//   return scroll > 20 ? header.addClass("stuck") : header.removeClass("stuck");
//   // }
// });

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
    // easing: "cubic-bezie$(.03,.98,.52,.99)",
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
$(window)
  .scroll(function () {
    let o = $(window),
      i = $("body"),
      t = $(".section");
    s = o.scrollTop() + o.height() / 3;
    // console.log("o.scrollTop()", o.scrollTop());
    // console.log("o.height", o.height());
    t.each(function () {
      // console.log("top", $(this).position().top <= s);
      // console.log("s", s);
      $(this).position().top <= s &&
        $(this).position().top + $(this).height() > s &&
        i.removeClass(
          $(".section").removeClass("active"),
          $(this).addClass("active")
        );
    });
  })
  .scroll();

if (screen.width > 768) {
  var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

  function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    translate = "translate(" + y + "px, " + x + "px) scale(0.9)";
    translatea = "translate(" + y + "px, " + x + "px) scale(0.9)";

    $(".cover__cloud").css({
      "-webit-transform": translatea,
      "-moz-transform": translatea,
      transform: translatea,
    });

    window.requestAnimationFrame(moveBackground);
  }

  $(window).on("mousemove click", function (e) {
    var lMouseX = Math.max(
      -100,
      Math.min(100, $(window).width() / 2 - e.clientX)
    );
    var lMouseY = Math.max(
      -100,
      Math.min(100, $(window).height() / 2 - e.clientY)
    );
    lFollowX = (5 * lMouseY) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (40 * lMouseX) / 100;
  });

  moveBackground();

  // sr.reveal(".align-left .credit__team", {
  //   delay: 300,
  //   origin: "right",
  // });
  // sr.reveal(".align-left .credit__member", {
  //   delay: 450,
  //   origin: "right",
  // });

  // sr.reveal(".align-right .credit__team", {
  //   delay: 300,
  //   origin: "left",
  // });
  // sr.reveal(".align-right .credit__member", {
  //   delay: 450,
  //   origin: "left",
  // });
}

// setTimeout(() => {
//   document.getElementById("audio").addEventListener("play", myFunction);
// }, 1000);

// function myFunction() {
//   console.log(1);
// }
var x = document.getElementById("myAudio");
function playAudio() {
  // alert(1);
  $("#myAudio").get(0).play();
}

function pauseAudio() {
  // alert(1);
  $("#myAudio").get(0).pause();
}

// setTimeout(() => {
//   playAudio();
// }, 100);

const pauseVar = "fa-pause-circle";
const playVar = "fa-play-circle";

const btns = document.querySelectorAll(".all");

function onChange(event) {
  const buttonElement = event.currentTarget;

  const isPlayButton = buttonElement.classList.contains(playVar);

  if (isPlayButton) {
    buttonElement.classList.remove(playVar);
    buttonElement.classList.add(pauseVar);
    $(".teks").removeClass("animate__infinite");
    $("#myAudio").get(0).play();
  } else {
    buttonElement.classList.remove(pauseVar);
    buttonElement.classList.add(playVar);
    $(".teks").addClass("animate__infinite");
    $("#myAudio").get(0).pause();
  }

  // You can also use .toggle function on classList as mentioned by the person in other answer
}

// query selector all returns a list of nodes, therefore we need to iterate over it and attach an event listener to each button seperatly
btns.forEach((btn) => {
  btn.addEventListener("click", onChange);
});
window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("play-button");
var sticky = header.offsetTop + 640;

function myFunction() {
  console.log("window.pageYOffset", window.pageYOffset);
  console.log("sticky", sticky);
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
