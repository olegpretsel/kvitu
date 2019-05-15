$(".navbar-nav a").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});

$('.one_product').on('click', function(){
   var gallery_src = $(this).children('img').attr('src');
   $('.pop-up_fon').addClass('active');
   $('.pop-up').addClass('active');
   $('.pop-up img').attr('src', gallery_src);
});
$('.pop-up_fon').on('click', function(){
   $('.pop-up_fon').removeClass('active');
   $('.pop-up').removeClass('active');
});




