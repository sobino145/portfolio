$(document).ready(function(){
  /*웹페이지 열었을 때*/
  $("#img1").show();
  $("#img2").hide();

  /*img1을 클릭했을 때 img2를 보여줌*/
  $("#img1").click(function(){
      $("#img1").hide();
      $("#img2").show();
      $(".picture p").hide();
  });

  /*img2를 클릭했을 때 img1을 보여줌*/
  $("#img2").click(function(){
      $("#img1").show();
      $("#img2").hide();
      $(".picture p").show();
  });
});


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