// ===================================================================
// トランプの表示
// ===================================================================

$(function(){

  var $start = $('.scene__start'),
      $game = $('.scene__game'),
      $end = $('.scene__end'),

      W = $(window).width(),
      H = $(window).height(),
      cardLen = 50,

      cnt = 0;

  function addDom() {

    var html = '';

    for (var i = 1; i <= cardLen; i++) {

      html += '<li class="card"><img src="common/img/img'+ i +'.jpg" height="122" width="80" alt=""></li>'

    };

    $game.find('ul').append(html);

  }

  function update() {

    W = $(window).width();
    H = $(window).height();

  }

  function setSize() {

    var $cardList = $('.cardList'),
        $card = $cardList.find('img'),

        w = Math.floor(W / 10),
        h = Math.floor(H / 5),

        restW,
        restH

    $card.css({
      width: w,
      height: h
    });

    restW = W - (w * 10);
    restH = H - (h * 5);

    for (var i = 9; i < cardLen; i+=10) {
    	$card.eq(i).css('width', '+=' + restW);
    };

    for (var i = 40; i < cardLen; i++) {
    	$card.eq(i).css('height', '+=' + restH);
    };

  }

  function resizeHandler() {

    update();
    setSize();

  }


  function setEvents() {

    // ready
    addDom();


    // // click
    $(window).on('load', function(){

      setSize();

      $(window).trigger('resize');

      jp.co.img.func.hover.Init();
      jp.co.img.func.hover.rotateX();


    });

    // resize
    $(window).on('resize', function(){

      resizeHandler();

    });

    // start画面の表示
    // $('html').trigger('click');


  }

  setEvents();


});

