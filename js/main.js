
$(document).ready(function(){
  setTimeout(() => {
    $('.logo').hide();
  }, 2500);

  $("#header-toggle").click(function(){
      $(".nav").addClass("show");
      $(this).addClass("bx-x");
  });
  $(".click_hide, .nav__list li").click(function(){
    $(".nav").removeClass("show");
    $("#header-toggle").removeClass("bx-x");
  });
  
  $('#show').click(function(){
  var show = $('.customer #show').attr("class");
  if(show == "bx bx-chevron-down"){
  $('.customer_show').css("display","flex");
    $(this).removeClass("bx-chevron-down");
    $(this).addClass("bx-chevron-up");
  }
  else{
    $('.customer_show').css("display","none");
    $(this).addClass("bx-chevron-down");
    $(this).removeClass("bx-chevron-up");
  }
  });

  
  $('#night').click(function(){
    var night = $('#night').attr("class");
    if(night == "bx bx-moon"){
      $(this).removeClass(" bx-moon");
      $(this).addClass("bx-sun").addClass("n_sun");
      $('header,.main_nav').addClass("n_header");
      $('.nav__list li a , .d_link').addClass("n_header_li");
      $('.d_link').addClass("n_link");
      $('.h1_works').addClass("n_h1_works");
      $('body,.about,.customer').addClass("n_body");
      $(".main_form button").addClass("n_button");
      $(".nav__item a").hover(function(){
        $(this).addClass("n_link");
      },
      function(){
        $(this).removeClass("n_link");
      }
    
    );
      
    }
    else{
      $(this).addClass("bx-moon");
      $(this).removeClass("bx-sun").removeClass("n_sun");
      $('header,.main_nav').removeClass("n_header");
      $('.nav__list li a , .d_link').removeClass("n_header_li");
      $('.d_link').removeClass("n_link");
      $('.h1_works').removeClass("n_h1_works");
      $('body ,.about,.customer').removeClass("n_body");
      $(".main_form button").removeClass("n_button");
      
    }
  });
  
  
});


