"use strict"
$(document).ready(function () {
$('a[href^="#"]').click(function () {
let valHref = $(this).attr("href");
$('html,body').animate({
    scrollTop: $(valHref).offset().top - 200 + "px"
})
});

new WOW().init();

$('form').submit(function (event) {
if ($("#inputPassword3").val() == "" || $("#inputEmail3").val() == "" || $("#formGroupExampleInput2").val() == "") {
    event.preventDefault();
    alert("Введите данные");
} else {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "php/mail.php",
        data: $(this).serialize()
    }).done(function () {
        $(this).find("input").val("");
        alert("Успешно отправлено!");
        $("form").trigger("reset");
    });
    return false;
}

});
    
    
    
  
    


  $("#inputPassword3").mask("+7(999) 999-9999"); 
    

$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});








});
