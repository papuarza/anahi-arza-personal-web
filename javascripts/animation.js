$( document ).ready(function() {
  $(".design-wrapper").css("display","none");
  $(".about-me-info").css("display","none");
  $(".current-job-info").css("display","none");
  $(".work-experience-info").css("display","none");
  $(".education-info").css("display","none");
  $(".certification-membership-info").css("display","none");
  $("#first-country-personal-info").css("display","none");
  $("#second-country-personal-info").css("display","none");
  $("#third-country-personal-info").css("display","none");
  $(".nav-bar").css("display","none");
  $("#linkedin-info").css("display","none");
  $("#gmail-info").css("display","none");
  $("#download-info").css("display","none");
  $(".personal-photo").css("display","none");
  $(".about-me-title").css("display","none");
  $(".about-me-text").css("display","none");

  document.addEventListener('scroll', function (event) {
    if($("body").scrollTop() > 100) {
      $(".nav-bar").css("display","inherit");
      $(".design-wrapper").css("display","inherit");
      $(".design-wrapper").addClass("animated bounceInRight");
      setTimeout(function () {
        $("#first-country-personal-info").css("display","inherit");
        $("#second-country-personal-info").css("display","inherit");
        $("#third-country-personal-info").css("display","inherit");
        $("#linkedin-info").css("display","inline-block");
        $("#gmail-info").css("display","inline-block");
        $("#download-info").css("display","inherit");
        $(".personal-photo").css("display","inline-block");
        $(".personal-photo").addClass("animated bounceIn");
        $("#first-country-personal-info").addClass("animated bounceIn");
        $("#second-country-personal-info").addClass("animated bounceIn");
        $("#third-country-personal-info").addClass("animated bounceIn");
        $("#linkedin-info").addClass("animated bounceIn");
        $("#gmail-info").addClass("animated bounceIn");
        $("#download-info").addClass("animated bounceIn");
      }, 400);
    }

    if($("body").scrollTop() > 500) {
      $(".about-me-info").css("display","inherit");
      $(".about-me-info").addClass("animated zoomInDown");
      setTimeout(function () {
        $(".about-me-title").css("display","inherit");
        $(".about-me-title").addClass("animated bounceInRight");
        $(".about-me-text").css("display","inherit");
        $(".about-me-text").addClass("animated fadeInLeft");
      }, 600);
    }

    if($("body").scrollTop() > 1500) {
      $(".current-job-info").css("display","inherit");
      $(".current-job-info").addClass("animated bounceIn");
    }

    if($("body").scrollTop() > 1800) {
      setTimeout(function () {
        $(".work-experience-info").css("display","inherit");
        $(".work-experience-info").addClass("animated zoomInDown");
      }, 500);
    }

    if($("body").scrollTop() > 3000) {
      setTimeout(function () {
        $(".education-info").css("display","inherit");
        $(".education-info").addClass("animated bounceInRight");
      }, 500);
    }

    if($("body").scrollTop() > 3800) {
      setTimeout(function () {
        $(".certification-membership-info").css("display","inherit");
        $(".certification-membership-info").addClass("animated bounceIn");
      }, 500);
    }

});

});
