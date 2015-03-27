$(document).ready(function () {
  $('#nav').headroom();

  String.prototype.testNavWidth = function(font) {
    var f = font || '20px arial',
        o = $('<a>' + this + '</a>')
              .css({'position': 'absolute', 'float': 'left', 'white-space': 'nowrap', 'visibility': 'hidden', 'font': f})
              .appendTo($('#nav ul li').first()),
        w = o.width()+3;

    o.remove();

    return w;
  }

  function animateTextSwap(element, newText) {
    element.stop().velocity({opacity: 0}, 100, 'linear', function () {
      element.velocity({width: newText.testNavWidth()}, 100, 'linear', function () {
        element.html(newText).velocity({opacity: 1}, 100, 'linear');
      });
    });
  }

  function animatePieceIn(element, onComplete) {
    element.stop().css({display: 'block'});
    element.stop().velocity({opacity: 1}, 200, 'linear', function () {
      onComplete && onComplete();
    });
  }

  function animatePieceOut(element, onComplete) {
    element.stop().velocity({opacity: 0}, 200, 'linear', function () {
      element.stop().css({display: 'none'});
      onComplete && onComplete();
    });
  }

  function animatePieceSwap(inElement, outElement) {
    animatePieceOut(outElement, function () {
      animatePieceIn(inElement);
    });
  }

  $('#nav li a').on('click', function () {
    element = $(this);
    oldElement = $('.nav-current');

    if (!element.hasClass('nav-current')) {
      element.addClass('nav-current');
      $('html').velocity('scroll', 'fast', function () {
        animateTextSwap(element, element.attr('nav-current'));

        if(oldElement.length > 0){
          oldElement.removeClass('nav-current');
          animateTextSwap(oldElement, oldElement.attr('nav-notcurrent'));
        }

        animatePieceSwap($('#mainpage-' + element.attr('nav-current')), $('.mainpage-current'));
        $('.mainpage-current').removeClass('mainpage-current');
        $('#mainpage-' + element.attr('nav-current')).addClass('mainpage-current');
      });
    }
  });
});