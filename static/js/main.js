$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".topButton").addClass("buttonDisplay");
    } else {
      $(".topButton").removeClass("buttonDisplay");
    }

    /* if ($(this).scrollTop() > 250) {
        $(".navbar").addClass("solid");
        $(".navbar").css("background-color: #000;");
      } else {
        $(".navbar").removeClass("solid");
      }
       */
  });
});

function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});

let contactform = document.getElementById("contactForm");
contactform.addEventListener("submit", function (event) {
  event.preventDefault();
  let data = {};
  data.name = contactform["name"].value;
  data.email = contactform["email"].value;
  data.mobile = contactform["mobile"].value;
  data.message = contactform["message"].value;

  $.ajax("http://127.0.0.1:8000/contact/feedback/", {
    type: "POST",
    data: data,
    success: function (data,textStatus,jqXHR) {
      console.log(data);
      console.log(textStatus);
      console.log(jqXHR);
      
    },
    error: function (jqXHR,textStatus,errorThrown) {
      console.log(errorThrown);
    },
  });
});
