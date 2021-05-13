$(function() {
    $(".btn").click(function() {
    $(".form-lecture").toggleClass("form-lecture-left");
    $(".form-student").toggleClass("form-student-left");
    $(".frame").toggleClass("frame-short");
    $(".student").toggleClass("lecture-active");
    $(".lecture").toggleClass("student-inactive");
    $(this).removeClass("idle").addClass("active");
    });
    });
    
    $(function() {
    $(".btn-signup").click(function() {
    $(".nav").toggleClass("nav-up");
    $(".form-student-left").toggleClass("form-student-down");
    $(".success").toggleClass("success-left");
    $(".frame").toggleClass("frame-short");
    });
    });
    

setTimeout(function() {
    $('.error').fadeOut('fast');
    }, 4000); 
   