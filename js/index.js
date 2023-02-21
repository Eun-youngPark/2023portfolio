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


})//jq