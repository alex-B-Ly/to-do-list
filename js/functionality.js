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
  $(this).closest('td').next('td').css({
    textDecoration: 'line-through',
    color: '#B2ABB6'
  });
  $(this).remove();
});