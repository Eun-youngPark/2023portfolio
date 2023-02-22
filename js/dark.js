$(document).ready(function () {
  $("html").attr("data-dark", false);

  const dark_mode = localStorage.getItem("dark_mode");
  if (dark_mode == "moon") {
    $("html").attr("data-dark", "true");
    $(".header .header-wrap .nav .etc ul li:nth-child(2) img").attr("src", "images/darkmode.png")
  } else {
    $("html").attr("data-dark", "false");
    $(".header .header-wrap .nav .etc ul li:nth-child(2) img").attr("src", "images/lightmode.png")
  }

  $(".header .etc ul li").eq(1).click(function(e){
    e.preventDefault();

    if($("html").attr("data-dark") == "true"){
      $("html").attr("data-dark", "false");
      $(".header .header-wrap .nav .etc ul li:nth-child(2) img").attr("src", "images/lightmode.png")
      localStorage.removeItem("dark_mode")
    }else{
      $("html").attr("data-dark", "true");
      $(".header .header-wrap .nav .etc ul li:nth-child(2) img").attr("src", "images/darkmode.png")
      localStorage.setItem("dark_mode", "moon")
    }
  })










}); //jq