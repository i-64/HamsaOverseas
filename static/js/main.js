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