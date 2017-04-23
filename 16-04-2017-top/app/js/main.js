$( document ).ready(function() {
    $('.bxslider').bxSlider({
        mode: 'fade',
    });
    
    $(".list-item__link").click( function ( e ){
        $( this ).parent().find( ".list-item__content" ).slideToggle();
    })
});