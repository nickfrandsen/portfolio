// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function() {

  $('.navigation').localScroll();

  $('#contact').appear(function() {
      $(".navigation h1").text("How to contact me").css("margin-left", "495px");
    },
    { one: false }
  );

  $('#work').appear(function() {
      $(".navigation h1").text("Some of my recent work").css("margin-left", "456px");
    },
    { one: false }
  );

  $('#about').appear(function() {
      $(".navigation h1").text("A little bit about me").css("margin-left", "490px");
    },
    { one: false }
  );

  $('#home').appear(function() {
      $(".navigation h1").text("Nicholas Frandsen").css("margin-left", "500px");
    },
    { one: false }
  );

  $('#contact form').submit(function(){
    $('#message_sent_note').html("Thanks for the message " + $("#contact #name").val() + ". I will get back to you soon.");
    $('#contact form').hide();
    $('#message_sent_note').show();
  });

});
