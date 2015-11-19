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