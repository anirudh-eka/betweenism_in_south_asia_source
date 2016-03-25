$(function() {
    initColorPickerInfo();
    initColorPickerCanvas();
    console.log(PS)
});

var initColorPickerInfo = function(){
  updateColorPickerInfoContainer("welcome");

  $(".color-picker-info-container").on('click', "a", function(e){
    e.preventDefault();
    var partialName = $(this).attr('href').replace(/[#]/, "");  
    updateColorPickerInfoContainer(partialName);  
  });

  function updateColorPickerInfoContainer(partialName) {
    var content = $("#color-picker-"+partialName).html();
    $('.color-picker-info-container').html(content);
  }
}

var initColorPickerCanvas = function() {
  $('.color-picker-canvas-container').click(function(e) {
    var posX = e.pageX - $(this).offset().left
    var posY = e.pageY - $(this).offset().top;
    if(!pointIsOutsideOfCanvas(posX,posY)) {
      updateColorPickerPointer(posX, posY);
    }
    console.log({x: posX, y: posY});
    var currentPoint = PS.Main.findNearestPoint({x: posX, y: posY})([{x: 4, y: 5}, {x: 1, y: 2}, {x: 3, y: 6}]).value0
    console.log(currentPoint);
  });

  function pointIsOutsideOfCanvas(x,y) {
    var $canvas = $('.color-picker-canvas-container');
    return x > $canvas.width() || x < 0 || y > $canvas.height() || y < 0;
  }

  function updateColorPickerPointer(posX, posY) {
    $('.color-picker-canvas-container .sat-grad').html("<span class='color-picker-pointer'>&#9737</span>")
    $(".color-picker-pointer").css("top", posY - ($(".color-picker-pointer").height()/2));
    $(".color-picker-pointer").css("left", posX - ($(".color-picker-pointer").width()/2));
  }
}
