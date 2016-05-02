// ===================================================================
// config
// ===================================================================

var jp = {};
jp.co = {};
jp.co.img = {};
jp.co.img.val = {};
jp.co.img.func = {};

/*===========================================================
	jquery拡張
===========================================================*/

	jQuery.fn.extend({
	  w:0, 
	  h:0, 
	  adjust: function(){
	      w = $(this).innerWidth();
	      h = $(this).innerHeight();
	      $(this).css({'margin-left':'-' + (w / 2) + 'px','margin-top':'-' + (h / 2) + 'px'});
	  },
	  adjustW: function(){
	      w = $(this).innerWidth();
	      h = $(this).innerHeight();
	      $(this).css({'margin-left':'-' + (w / 2) + 'px'});
	  },
	  adjustH: function(){
	      w = $(this).innerWidth();
	      h = $(this).innerHeight();
	      $(this).css({'margin-top':'-' + (h / 2) + 'px'});
	  }
	});

