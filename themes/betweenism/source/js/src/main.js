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
  $('.color-picker-canvas-container').mousedown(function(e) {
    handleCanvasDrag(e);
    $(this).mousemove(function(e){
      handleCanvasDrag(e);
    });
  });

  $('.color-picker-canvas-container').mouseup(function(e) {
    $(this).off("mousemove");
  });

  function handleCanvasDrag(e) {
    var $canvas = $(e.currentTarget);
    var posX = e.pageX - $canvas.offset().left
    var posY = e.pageY - $canvas.offset().top;
    if(!pointIsOutsideOfCanvas(posX,posY)) {
      updatePointerIcon(posX, posY);
    } else {
      $canvas.off("mousemove");
    }
    console.log({x: posX, y: posY});
    var currentPoint = PS.Main.findNearestPoint({x: posX, y: posY})([{x: 4, y: 5}, {x: 1, y: 2}, {x: 3, y: 6}]).value0
    console.log(currentPoint);
  }
  
  function pointIsOutsideOfCanvas(x,y) {
    var $canvas = $('.color-picker-canvas-container');
    return x > $canvas.width() || x < 0 || y > $canvas.height() || y < 0;
  }

  function updatePointerIcon(posX, posY) {
    $('.color-picker-canvas-container .sat-grad').html("<span class='color-picker-pointer'>&#9737</span>")
    $(".color-picker-pointer").css("top", posY - ($(".color-picker-pointer").height()/2));
    $(".color-picker-pointer").css("left", posX - ($(".color-picker-pointer").width()/2));
  }
}
