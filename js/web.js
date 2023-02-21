$("document").ready(function () {
    $(".nav ul li").eq(0).addClass("on")
    let i = 0
        $(".fullpage").fullpage({
            navigation: true,
            navigationTooltips:["WEB_KTO", "WEB_NIVEA","WEB_SUBWAY","APP_VL","APP_METRO"],
            // 네비게이션 이름
            anchors:["WEB_KTO", "WEB_NIVEA","WEB_SUBWAY","APP_VL","APP_METRO"],
            // 네비 메뉴의 이름
            onLeave: function(origin, destination, direction){
                // 해당 구역을 떠나고 새로운 구역으로 이동하는 도중에 실행
                /*
                origin - 활성화된 구역
                destination - 목적지 구역
                direction - 마우스 휠 방향
                index - 해당 구역의 번호
                */
            },
            afterLoad:function(origin, destination){
                // 새로운 구역으로 완전히 도착 이후 실행
                // $(".nav ul li").removeClass("on").eq(destination-1).addClass("on")
            },
            // slidesNavigation: true
        })


}) //jq