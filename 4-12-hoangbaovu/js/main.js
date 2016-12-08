// $(document).ready(function() {
//     $('.menu-1 li').hover(function(){
//     	$('.sub-menu').stop().fadeIn();
//     },function(){
//     	$('.sub-menu').stop().fadeOut();
//     });
// });

$(document).ready(function() {
    $('.menu-1 li').hover(function(){
    	$(this).children('.sub-menu').stop().fadeIn();
    },function(){
    	$(this).children('.sub-menu').stop().fadeOut();
    });
});