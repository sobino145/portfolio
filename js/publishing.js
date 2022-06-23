$(document).ready(function () {

  //화살표 깜빡깜빡___________________________________
  function guide1() {
    $(".w_slide_btn>i").toggleClass("active");
  }
  auto1 = setInterval(guide1, 500);


  //태블릿 화면(오버시 화면 올라가게)_________________
  $(".w_tab_slide ul li:nth-child(n)").mouseenter(function () {
    $(this).css("background-position", "0 100%");
  });
  $(".w_tab_slide ul li:nth-child(n)").mouseleave(function () {
    $(this).css("background-position", "0 0");
  });


  //웹디자인 슬라이드__________________________________
  $(".w_list li").click(function () {

    clearInterval(auto1); //화살표 깜빡거림 멈추게

    $(".w_list li").removeClass("btn_active"); //기존 숫자 
    $(this).addClass("btn_active"); //클릭한 숫자

    val = $(this).index();
    $(".w_bg ul").animate({
      "left": -700 * val + "px"
    }); //왼쪽 배경이미지 슬라이드
    $(".w_txt_slide ul").animate({
      "left": -340 * val + "px"
    }); //왼쪽 설명텍스트 슬라이드
    $(".w_tab_slide ul").animate({
      "left": -794 * val + "px"
    }); //오른쪽 태블릿이미지 슬라이드

  });


  //DETAIL 버튼 클릭시 모달창 띄우기_______________________
  $(".w_txt_slide>ul>li>span").click(function () {

    w_pop = $(this).parent().index();
    $(".w_page span:nth-child(1)").text(w_pop + 1); //디테일 버튼의  
    $("html").css({
      overflowY: "hidden"
    }); //클릭한 숫자
    $(".w_pop>li").eq(w_pop).show(); //왼쪽 배경이미지 슬라이드
    $("#w_popup").stop().fadeIn(); //왼쪽 설명텍스트 슬라이드

    /*오른쪽 상단 버튼-다음보기*/
    $(".w_btn .w_right_btn").click(function () {

      $("#w_popup").scrollTop(0); /*스크롤 상단으로 올리기*/

      if (w_pop < 2) {
        $(".w_pop>li").eq(w_pop).stop(true, true).fadeOut();
        w_pop++;

        $(".w_page span:nth-child(1)").text(w_pop + 1); /*페이지 번호*/
        $(".w_pop>li").eq(w_pop).stop(true, true).fadeIn();
      }

    });



    /*오른쪽 상단 버튼-이전보기*/
    $(".w_btn .w_left_btn").click(function () {

      $("#w_popup").scrollTop(0); /*스크롤 상단으로 올리기*/

      if (w_pop > 0) {
        $(".w_pop>li").eq(w_pop).stop(true, true).fadeOut();
        w_pop--;

        $(".w_page span:nth-child(1)").text(w_pop + 1); /*페이지번호*/
        $(".w_pop>li").eq(w_pop).stop(true, true).fadeIn();
      }

    });


    /*오른쪽 상단 버튼-닫기*/
    $(".w_btn_close, .w_back").click(function () {
      $("html").css({
        overflowY: "scroll"
      });
      $("#w_popup").stop(true, true).fadeOut();
      $(".w_pop>li").stop(true, true).hide();
    });


  });

  //모바일 영역 슬라이드 플러그인
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});


});