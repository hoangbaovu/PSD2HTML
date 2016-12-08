$(document).ready(function() {
    $('.menu-1 li').hover(function(){
    	$('.sub-menu').stop().fadeIn();
    },function(){
    	$('.sub-menu').stop().fadeOut();
    });
});