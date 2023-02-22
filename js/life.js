$(document).ready(function () {
  AOS.init();

  const swiper = new Swiper(".desc",{
    loop: true,
    autoplay: true
  })
  


/* [up arrow icon] */
$(window).scroll(function(){
  let pos = $(this).scrollTop()

  if(pos > 100){
    $(".aside").addClass("on")
  } else {
    $(".aside").removeClass("on")
  }
})
$(".aside").click(function(){
  $("html, body").stop().animate({
    scrollTop:0
  }, 600)
})




});