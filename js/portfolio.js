$(document).ready(function(){
  
  /*///////////////// 메뉴 버튼 슬라이드  */
  $("nav ul li a").click(function(e){
    $.scrollTo(this.hash || 0, 500); 
    //해시(#p1,p2...)가 있는 위치, 즉 클릭한 링크의 해시값이 있는 섹션으로 스크롤한다.
    e.preventDefault(); //링크의 원래 기능을 끔
});


  ///////////////타이핑 작동
  window.instance = new TypeIt("#typing1", {
    speed: 100
  })
  .type("")
  .pause(500)
  .delete(4)
  .pause(500)
  .type("ring.")
  .pause(500)
  .delete()
  .pause(500)
  .options({
    speed: 25
  })
  .type("")
  .go();

new TypeIt("#typing2", {
  speed: 100,
  strings: "귀한 시간 내주셔서 감사합니다.",
  waitUntilVisible: true,
  loop: true
}).go();

  /*////////////////// 현재 날짜 표기 */
    
    var objDate = new Date();

    var year = objDate.getFullYear();

    var month = objDate.getMonth(); 

    var date = objDate.getDate();  

    var day = objDate.getDay();  
    var aryDay = ["일", "월", "화", "수", "목", "금", "토"];  
    
    // 년,월,일,요일 출력
    var fulldate=year +"년" + (month+1) + "월" + date + "일" + aryDay[day] + "요일" ;

    $(".cont_date").text(fulldate);


    /* 각 버튼별 부드럽게 끌어 올리기  */
    $("header h1 a").click(function (e) {
      $.scrollTo(this.hash || 0, 500);
      e.preventDefault(); 
    });



  //디자인 영역

  //디자인 가르기 탭

  $(".panel>li:not(:first)").hide();
  //첫번째를 제외한 나머지 내용 숨기기 

  $(".tab>li").click(function(){
    $(".tab>li").removeClass("selected");//기존선택된 selected 클래스 삭제
    $(this).addClass("selected");//새로 선택된 selected 클래스 생성
    $(".panel>li").hide();//기존의 보여진 내용 숨기기
    $($(this).find("a").attr("href")).show();//새로 선택된 내룔 href 연결된 내용 보여주기 
  });


  //////////////////////////////그래픽 디자인//////////////////////////////////////////////////////////////////
  //리스트 이미지 클릭 할 때 
  $(".graphic_list>li").click(function(){
    
    g_pop=$(this).index();

    $(".g_page span:nth-child(1)").text(g_pop+1);//오른쪽 상단페이지 넘버
    $("html").css({overflowY:"hidden"});//기존html 스크롤 숨기기
    $(".pop>li").eq(g_pop).show();//g_pop index에 해당하는 팝업보이기
    $("#popup").stop(true,true).fadeIn();//검정배경

  });


  //오른쪽 상단 버튼 - 다음보기
  $(".right_btn").click(function(){
    
    if (g_pop<9) {
      
      $(".pop>li").eq(g_pop).stop(true,true).fadeOut();//기존것 사라짐
      g_pop++;

      $(".g_page span:nth-child(1)").text(g_pop+1);
      $(".pop>li").eq(g_pop).stop(true,true).fadeIn();
      $("#popup").scrollTop(0);

    }

  });


  //오른쪽 상단버튼 - 이전보기
  $(".left_btn").click(function(){
    
    if (g_pop>0) {
      
      $(".pop>li").eq(g_pop).stop(true,true).fadeOut();//기존것 사라짐
      g_pop--;

      $(".g_page span:nth-child(1)").text(g_pop+1);
      $(".pop>li").eq(g_pop).stop(true,true).fadeIn();
      $("#popup").scrollTop(0);
      

    }

  });
  
  //오른쪽 상단 버튼 - 닫기
  $(".btn_close").click(function(){
    
    $("html").css({overflowY:"scroll"});
    $("#popup").stop(true,true).fadeOut();
    $(".pop>li").stop(true,true).hide();
    
  });

  //////////////////////////////UI/UX 디자인////////////////////////////////////////
  //리스트 이미지 클릭 할 때 
  $(".graphic_list2>li").click(function(){
    
    g_pop2=$(this).index();

    $(".g_page2 span:nth-child(1)").text(g_pop2+1);//오른쪽 상단페이지 넘버
    $("html").css({overflowY:"hidden"});//기존html 스크롤 숨기기
    $(".pop2>li").eq(g_pop2).show();//g_pop index에 해당하는 팝업보이기
    $("#popup2").stop(true,true).fadeIn();//검정배경

  });



  //오른쪽 상단 버튼 - 다음보기
  $(".right_btn2").click(function(){
    
    if (g_pop2<7) {
      
      $(".pop2>li").eq(g_pop2).stop(true,true).fadeOut();//기존것 사라짐
      g_pop2++;

      $(".g_page2 span:nth-child(1)").text(g_pop2+1);
      $(".pop2>li").eq(g_pop2).stop(true,true).fadeIn();
      $("#popup2").scrollTop(0);

    }

  });


  //오른쪽 상단버튼 - 이전보기
  $(".left_btn2").click(function(){
    
    if (g_pop2>0) {
      
      $(".pop2>li").eq(g_pop2).stop(true,true).fadeOut();//기존것 사라짐
      g_pop2--;

      $(".g_page2 span:nth-child(1)").text(g_pop2+1);
      $(".pop2>li").eq(g_pop2).stop(true,true).fadeIn();
      $("#popup2").scrollTop(0);

    }

  });
  
  //오른쪽 상단 버튼 - 닫기
  $(".btn_close").click(function(){
    
    $("html").css({overflowY:"scroll"});
    $("#popup2").stop(true,true).fadeOut();
    $(".pop2>li").stop(true,true).hide();
    
  });





  //모바일 버튼
  $(".btns3 button").click(function(){
    $(this).next().show(); 
    $("html").css({overflowY:"hidden"});
    return false;
  });

  $(".close").click(function(){
    $(".pop3").hide(); 
    $("html").css({"overflow-y":"scroll"});
  });

  /*검정 배경 클릭시 닫기*/
  $(".pop3").click(function(){
    $("html").css({"overflow-y":"scroll"});
    $(".pop3").hide();
    return false;
  });

/*//////// 기획영역 */
/* 바깥 틀 갤러리  */
let goldidx=0; //기존 이미지 
let gidx=0; //선택되는 이미지 

  function galleryImg(gidx){//gidx는 선택되는 이미지
    
    if (goldidx!=gidx){//기존의 이미지와 선택된 이미지가 다를때..
      
      $(".thumbs li").eq(goldidx).css({"opacity":0.3});//기존썸네일 흐리게
      $(".thumbs li").eq(gidx).css({"opacity":1});//선택된 썸네일 선명하게
      $(".largeImg li").eq(goldidx).stop().fadeOut(300);//기존이미지 사라짐
      $(".largeImg li").eq(gidx).stop().fadeIn(300);//선택된 이미지 나타남 
      $(".imgText li").eq(goldidx).stop(true,true).fadeOut(300);//기존 텍스트 사라짐
      $(".imgText li").eq(gidx).stop(true,true).fadeIn(300);//선택된 텍스트 나타남 

    }
    goldidx=gidx;//선택된 이미지는 기존 이미지로 저장 

  }

  //섬네일 클릭할 시.......
  $(".thumbs li").click(function(){
    gidx=$(this).index();
    galleryImg(gidx);
    $(".largeImg li").scrollTop(0);
  });

    //이전버튼 클릭시.....
    $(".Plan_left_btn").click(function(){
      gidx--;
      if(gidx<0){ //선택한 이미지가 0일때 다시 맨뒤부터 다시 시작
        gidx=6;
      }
      galleryImg(gidx);
      $(".largeImg li").scrollTop(0);
    });
  
  
    //다음버튼 클릭시.....
    $(".Plan_right_btn").click(function(){
      gidx++;
      if(gidx>6){ //선택한 이미지가 마지막일때 다시 맨처음부터 다시 시작
        gidx=0;
      }
      galleryImg(gidx);
      $(".largeImg li").scrollTop(0);
    });


//기획 웹 목업 연결
$(".btn_space button").click(function(){//각 메뉴를 클릭했을때
  $(this).next().show(); //다음 형제인 .pop을 보이게함
  $("html").css({overflowY:"hidden"});//body스크롤없앰
  return false;
});

$(".close9").click(function(){//close눌렀을때
  $(".pop9").hide(); //.pop을 안보이게함
  $("html").css({"overflow-y":"scroll"});//body스크롤생김   
});

/*검정 배경 클릭시 닫기*/
$(".pop9").click(function(){
  $("html").css({"overflow-y":"scroll"});
  $(".pop9").hide();
  return false;
});







});