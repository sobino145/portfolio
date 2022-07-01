/* 프로필 사진 클릭 */
$(document).ready(function(){
  
  $("#img1").show();
  $("#img2").hide();

  $("#img1").click(function(){
      $("#img1").hide();
      $("#img2").show();
      $(".picture p").hide();
  });

  $("#img2").click(function(){
      $("#img1").show();
      $("#img2").hide();
      $(".picture p").show();
  });



    //취미영역 오버시 오른쪽영역 이미지 바뀜
    $(".pp_ED ul li").mouseenter(function(){
      let profile = $(this).index();
      $(".profile_video ul li").stop().fadeOut();
      $(".profile_video ul li").eq(profile).stop().fadeIn();
    });
  

});

/* //////////스킬 사용부분 */
$(window).ready(function(){
  draw(90, '.pie-chart1', '#F25F29');
  draw(90, '.pie-chart2', '#30BAD9');
  draw(75, '.pie-chart3','#131B26');
  draw(85, '.pie-chart4','#01C8FE');
  draw(75, '.pie-chart5','#FF7C01');
});

function draw(max, classname, colorname){
  var i=1;
  var func1 = setInterval(function(){
    if(i<max){
      color1(i,classname,colorname);
      i++;
    } else{
      clearInterval(func1);
    }
  },10);
}

function color1(i, classname,colorname){
  $(classname).css({
      "background":"conic-gradient("+colorname+" 0% "+i+"%, #ffffff "+i+"% 100%)"
  });
}


function replay(){
  draw(90, '.pie-chart1', '#F25F29');
  draw(90, '.pie-chart2', '#30BAD9');
  draw(75, '.pie-chart3','#131B26');
  draw(85, '.pie-chart4','#01C8FE');
  draw(75, '.pie-chart5','#FF7C01');
}


