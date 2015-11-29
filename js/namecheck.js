(function($){

    $.fn.extend({

        addTemporaryClass: function(className, duration) {
            var elements = this;
            setTimeout(function() {
                elements.removeClass(className);
            }, duration);

            return this.each(function() {
                $(this).addClass(className);
            });
        }
    });

})(jQuery);

var student = 0;

var ui_colors = {
  other: '#DA6044',
  checked: 	'#00E568'
}

$('.slide').hammer().on('drag', function(event) {
  var offset, zero;
	event.gesture.preventDefault();

  // Calculate where left=0 in relation to the parent
  offset = $('.slider-list').offset();
  zero = offset.left;

  $(this).offset({ left: zero + event.gesture.deltaX });

  if( event.gesture.deltaX < 0 ) {
	  $(this).parent().css('background', ui_colors.checked);

  }
  if ( event.gesture.deltaX < -300) {
      $("confirmed").addTemporaryClass("appear", 1000);
            console.log("fucking confirmed!");
  }

  if ( event.gesture.deltaX > 0) {
	  $(this).parent().css('background', ui_colors.other);
	}

});

$('.slide').hammer().on('release', function(event) {
  $(this).animate({ left: 0 }, 100, function () {
	  $(this).parent().css('background', '#fff');
  });
});
