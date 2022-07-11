"use strict"
$(document).ready(function(){
      $('a[href^="#"]').click(function(){
      let valHref =$(this).attr("href");
      $('html,body').animate({scrollTop: $(valHref).offset().top - 200 + "px"})
  });
    
new WOW().init();

    $('form').submit(function(event){
        if($("#inputPassword3").val() == "" ||$("#inputEmail3").val()=="" ||$("#formGroupExampleInput2").val()=="" ){
            event.preventDefault();
            alert("Введите данные");
        }
    });

});
