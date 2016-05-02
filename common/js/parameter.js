// ===================================================================
// パラメータ調整
// ===================================================================

$(function(){

  var $input = $('#input'),
      $select = $('#select'),
      $range = $('#perspective'),

      val_input = 'default',
      val_select = 'default',
      val_range = 0,

      Timer,
      FPS = 1000/30;

  var $card = $('.card'),
      $img = $card.find('img');

  // 値を反映
  function setVal() {

  	var step = 1;
  	var start = 50;
  	var min = 0;
  	var max = 100;

  	$range.attr({
  		step: step,
  		value: start,
  		min: min,
  		max: max
  	});

  }

  function watch_inputHandler(e) {
    if (e == undefined) return;

    var target = e.target;
    val_input = target.value;
    
  }

  function watch_selectHandler(e) {
    if (e == undefined) return;

    jp.co.img.func.hover.reset();

    switch (e.target.value) {
      case '1':  
        jp.co.img.func.hover.rotateX();
        break;
      case '2': 
       jp.co.img.func.hover.rotateY();
       break; // right
      case '3':  
        jp.co.img.func.hover.rotateXY();
        break; // bottom
      case '4':  
        jp.co.img.func.hover.skewX();
        break; // bottom
      case '5':  
        jp.co.img.func.hover.skewY();
        break; // bottom
      case '6':  
        jp.co.img.func.hover.ScaleSkew();
        break; // bottom
      case '7':  
        jp.co.img.func.hover.translate();
        break; // bottom
      default:
        break;
    }
  

  }

  function setStyle_perspective() {

  	var val = $range.val();

  	$img.css({
  	  'transform': 'perspective(' + val + 'px)'
  	});

  	// $card.css({
  	//   'perspective': val + 'px'
  	// });

  	console.log(val);
  	// console.log($img);

  	// $img.css({
  	//   'display': 'none'
  	// });

  }


  function watch_rangeHandler() {

    // console.log($range.val());

  }

  function startUpdate() {
    Timer = setInterval(updateHandler,FPS);
  }

  function updateHandler() {

    watch_rangeHandler();
    setStyle_perspective();

  }

  function stopUpdate() {
    clearInterval(Timer);
  }

  function setEvents() {

  	  // ready
  	  setVal();

      $input.on("keyup", watch_inputHandler); 
      $select.on("change", watch_selectHandler); 
      $range.on("change", watch_rangeHandler); 
      $range.on("change", setStyle_perspective); 
      // startUpdate();

  }

  setEvents();

})
