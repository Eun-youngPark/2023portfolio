$("document").ready(function () {
  AOS.init();

  const swiper = new Swiper(".desc",{
    loop: true,
    autoplay: true
  })

  function skillbar(id, per){
    let bar = new ProgressBar.Line(id,{
      strokeWidth : 4,
      color: "#d2c0aa",
      trailWidth: 1,
      trailColor: "rgba(211, 193, 171, 0.42)",
  })
  bar.animate(per)

  }

  
// 1= 100% / 0.75 = 75%
let a = false;
$(window).scroll(function (){
  let pos = $(this).scrollTop()
  // console.log(pos)
  if(pos > 1100 && a == false){
    skillbar(".ai", 0.9)
    skillbar(".ps", 0.9)
    skillbar(".figma", 0.7)
    skillbar(".html", 0.6)
    skillbar(".css", 0.6)
    skillbar(".js", 0.5)
    a = true;
  }
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





}) //jq