var markMap=[];
var percMap=[];

$( document ).ready(function() {
  $('.result').addClass('hidden');
  let i = 0;
  while(i<3){
    $('.row-inputs').clone().appendTo('#data');
    i+=1;
  }
});

$('body').on('click', '#calc', function(){
  $('.form-control.mark').each(function(){
    var mark= $(this).val();
    if(mark>0){
      console.log(mark);
      markMap.push(mark);
    }
  });

    $('.form-control.pc').each(function(){
      var perc=$(this).val();
      if(perc>0){
        console.log(perc);
        percMap.push(perc);
      }
  });
  var markLength= markMap.length;
  var percLenght = percMap.length;

  if (markLength != percLenght){
    console.log('please enter percentage')
    markMap=[];
    percMap=[];
  }
  else{
    var i=1;
    var mark;
    var firstMark = ((percMap[0]/100)*markMap[0]);

    if(percLenght && markLength==1){
      console.log(firstMark,'total')
      markMap=[]; // empty mark array
      percMap=[]; // empty percentage array

      document.getElementById('res').innerHTML = firstMark; //show result on HTML

    }
    else{
    while(i<markLength){
      if (i==1){
        marks = firstMark + ((percMap[i]/100)*markMap[i]); // calculate first and second marks only once
      }
      else{
        marks = marks + ((percMap[i]/100)*markMap[i]); // continue calculations until loop is done
      }
      i++
    }
      console.log(marks,'total')
      markMap=[]; // empty mark array
      percMap=[]; // empty percentage array

      document.getElementById('res').innerHTML = marks; //show result on HTML
    }
      if($('.result').hasClass('hidden')){
        $('.result').removeClass('hidden').addClass('visible');
      }
  }
});

$('body').on('click','#add', function (){
  $('#data').append('<div class="col-xs-3"><input type="text" class="form-control mark" name="mark" placeholder="0 - 100"></div><div class="col-xs-3"><input type="text" class="form-control pc" name="pc" placeholder="%"></div><div class="col-xs-6"><input type="text" class="form-control tag" name="ref" placeholder=""></div></div>');
});
