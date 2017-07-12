//Initial Fade In
$(document).ready(function(){
		setTimeout(function(){
		  $('.frontPhoto').addClass("animated fadeIn").css('visibility', 'visible');
		}, 500);
		setTimeout(function(){
		  $('.frontTitle').addClass("animated fadeIn").css('visibility', 'visible');
		}, 1500);
		setTimeout(function(){
		  $('.frontSubtitle').addClass("animated fadeIn").css('visibility', 'visible');
		}, 1800);  
});	

//Background Animations
var mq = window.matchMedia( "only screen and (min-width: 768px)" );
console.log(mq.matches);
if(mq.matches){
  var $target = $('.wrapper');
  inView('#section').on('enter', function(el){
    var bgImg = $(el).attr('bg-image');
    if (typeof bgImg !== typeof undefined && bgImg !== false) {
      $target.css("background-image", "url(" + bgImg + ")");
    } else {
      $target.css("background-image", "url(images/empty.jpg)");
    }
  });
  inView('#caption').on('enter', function(el){
    $(el).css("color", "#FFFFFF");
  });
  inView('#caption').on('exit', function(el){
    $(el).css("color", "#222");
  });
}


//Click Scroll
$('.contents a').click(function(){  
  //Animate
  $('html, body').stop().animate({
      scrollTop: $( $(this).attr('href') ).offset().top 
  }, 800);
});
$('#backtotop').click(function(){  
  //Animate
  $('body,html').animate({
    scrollTop: 0 ,
    }, scroll_top_duration
  );
});


//Scroll To Top
// browser window scroll (in pixels) after which the "back to top" link is shown
var offset = 1200,
  //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  offset_opacity = 2100,
  //duration of the top scrolling animation (in ms)
  scroll_top_duration = 700,
  //grab the "back to top" link
  $back_to_top = $('.cd-top');

//hide or show the "back to top" link
$(window).scroll(function(){
  ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
  if( $(this).scrollTop() > offset_opacity ) { 
    $back_to_top.addClass('cd-fade-out');
  }
});

//smooth scroll to top
$back_to_top.on('click', function(event){
  event.preventDefault();
  $('body,html').animate({
    scrollTop: 0 ,
    }, scroll_top_duration
  );
});
