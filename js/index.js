$("document").ready(function () {

  $(".m-btn").click(function(){
    // $(".m-btn").toggleClass("on")
    $(".m-btn, .m-nav, .m-nav-wrap").toggleClass("on")
  })

  let typed = new Typed("#typed1",{
    stringsElement: "#typed",
    loop: true,
    typeSpeed: 150,
		backSpeed: 20,
		backDelay: 5000,
  })

  $("html, body").contextmenu(function(e){
    e.preventDefault();
    let x = e.pageX;
    let y = e.pageY;
    console.log("가로:"+x , "세로:"+y)
    $(".menu").css("left", x+"px").css("top", y+"px").show()
  })
  // 전체

  $("html, body").click(function(){
    $(".menu").hide()
  })


  
})//jq