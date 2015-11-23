$(document).ready(function() {

  $(".initial-hide").hide();


  $("#review1Show").click(function() {
      $("#review1 .toggle-show-hide").toggle(500);
      $("#review1Show").hide();
      $("#review1Hide").show();
      $('html, body').animate({
        scrollTop: $("#review1").offset().top
    }, 500);
  });

  $("#review1Hide").click(function() {
      $("#review1 .toggle-show-hide").toggle(500);
      $("#review1Show").show();
      $("#review1Hide").hide();
      $('html, body').animate({
        scrollTop: $("#review1").offset().top
    }, 500);
  });

  $("#review2Show").click(function() {
      $("#review2 .toggle-show-hide").toggle(500);
      $("#review2Show").hide();
      $("#review2Hide").show();
      $('html, body').animate({
        scrollTop: $("#review2").offset().top
    }, 500);
  });

  $("#review2Hide").click(function() {
      $("#review2 .toggle-show-hide").toggle(500);
      $("#review2Show").show();
      $("#review2Hide").hide();
      $('html, body').animate({
        scrollTop: $("#review2").offset().top
    }, 500);
  });

  $("#review3Show").click(function() {
      $("#review3 .toggle-show-hide").toggle(500);
      $("#review3Show").hide();
      $("#review3Hide").show();
      $('html, body').animate({
        scrollTop: $("#review3").offset().top
    }, 500);
  });

  $("#review3Hide").click(function() {
      $("#review3 .toggle-show-hide").toggle(500);
      $("#review3Show").show();
      $("#review3Hide").hide();
      $('html, body').animate({
        scrollTop: $("#review3").offset().top
    }, 500);
  });

  $("#review4Show").click(function() {
      $("#review4 .toggle-show-hide").toggle(500);
      $("#review4Show").hide();
      $("#review4Hide").show();
      $('html, body').animate({
        scrollTop: $("#review4").offset().top
    }, 500);
  });

  $("#review4Hide").click(function() {
      $("#review4 .toggle-show-hide").toggle(500);
      $("#review4Show").show();
      $("#review4Hide").hide();
      $('html, body').animate({
        scrollTop: $("#review4").offset().top
    }, 500);
  });

  $("#review5Show").click(function() {
      $("#review5 .toggle-show-hide").toggle(500);
      $("#review5Show").hide();
      $("#review5Hide").show();
      $('html, body').animate({
        scrollTop: $("#review5").offset().top
    }, 500);
  });

  $("#review5Hide").click(function() {
      $("#review5 .toggle-show-hide").toggle(500);
      $("#review5Show").show();
      $("#review5Hide").hide();
      $('html, body').animate({
        scrollTop: $("#review5").offset().top
    }, 500);
  });

});
