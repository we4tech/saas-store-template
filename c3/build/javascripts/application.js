(function() {
  var task, _i, _len, _ref;

  $(document.body).tooltip({
    selector: "*[rel=tooltip]"
  });

  (function($) {
    return $('[data-trigger]').each(function() {
      var el;
      el = $(this);
      return el.click(function(e) {
        var selector;
        selector = el.attr('data-trigger');
        return $(selector).trigger('click');
      });
    });
  })(jQuery);

  if (window.laterTasks != null) {
    _ref = window.laterTasks;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      task = _ref[_i];
      task();
    }
  }

}).call(this);
