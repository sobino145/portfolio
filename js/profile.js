$(window).ready(function(){
  draw(90, '.pie-chart1', '#F25F29');
  draw(90, '.pie-chart2', '#30BAD9');
  draw(70, '.pie-chart3','#131B26');
  draw(80, '.pie-chart4','#01C8FE');
  draw(70, '.pie-chart5','#FF7C01');
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
  draw(70, '.pie-chart3','#131B26');
  draw(80, '.pie-chart4','#01C8FE');
  draw(70, '.pie-chart5','#FF7C01');
}