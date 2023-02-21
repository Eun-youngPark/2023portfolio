$(document).ready(function () {
  $(".container .menu ul li").eq(0).addClass("on")

  $(".container").imagesLoaded( function() {
    $(".container .list").isotope({
        itemSelector:".item"
    })
    // images have loaded
  });
  

  $(".container .menu ul li").click(function(){
      let i = $(this).index();
      $(".container .menu ul li").removeClass("on").eq(i).addClass("on")

      let selector = $(this).attr("data-filter");
      $(".container .list").isotope({
          filter: selector
      })
  })



// 모달창 _____________________________
const item_photo = [
  // "../이미지폴더이름 / 파일명.확장",
  "images/work_logo_process.png",
  "images/work_pack_process.png",
  "images/work_sub_process.png",
  "images/work_sub_process.png",
  "images/work_sub_process.png",
  "images/work_sub_process.png"
]

$(".item").click(function(e){
  e.preventDefault();

  let i = $(this).index();
  $(".window").fadeIn()
  $(".window-content").show();
  $(".window-content img").attr("src", item_photo[i])

  $("html, body").css("overflow","hidden")

})

// 모달창에서 X누르면 창 사라짐
$(".window-content i, .window").click(function(){
  $(".window").fadeOut()
  $(".window-content").scrollTop(0).hide();
  $("html, body").css("overflow","")
})

let close = parseInt($(".window-content i").css("top"));

$(".window-content").scroll(function(){
  let pos = $(".window-content").scrollTop();
  $(".window-content i").css("top", close+pos+"px")
  // 최초 닫기 버튼의 위치가 20px (탑값) 모달창이 스크롤되면 해당 값 +20을 더해주면 해당 위치에 고정되는 원리
})












}); //jq