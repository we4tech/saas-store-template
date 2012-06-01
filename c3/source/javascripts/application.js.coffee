# Enable tooltip
$(document.body).tooltip
  selector: "*[rel=tooltip]"


(($) ->
  $('[data-trigger]').each(->
    el = $(this)
    el.click((e) ->
      selector = el.attr('data-trigger')
      $(selector).trigger('click')
    )
  )
)(jQuery)

# Execute later tasks
if window.laterTasks?
  task() for task in window.laterTasks