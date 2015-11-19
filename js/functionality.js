// Delete blinker and delete row

$('.del-button').hover(function() {
	$(this).text('Delete');
}, function() {
	$(this).text('X');
});

$('.del-button').on('click', function(){
	$(this).closest('tr').fadeOut('slow', function() {
		$(this).remove();
	});;
});

// Checkbox strikethrough and removal

$('.check').on('click', function(){
  $(this).closest('td').next('td').css('text-decoration', 'line-through');
  $(this).remove();
});