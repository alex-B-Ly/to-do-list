// Add row

$('#add-button').click(function() {
  var newRow = "<tr></tr>";
  var td = "<td></td>";

  $('table.to-do-list').prepend(newRow);

  
});

// Delete blinker and delete row

$('.del-button').hover(function() {
	$(this).text('Delete');
}, function() {
	$(this).text('X');
});

$(document).on('click', '.del-button', function(){
	$(this).closest('tr').fadeOut('slow', function() {
		$(this).remove();
	});;
});

// Checkbox strikethrough and removal

$(document).on('click', '.check', function(){
  $(this).closest('td').next('td').css({
    textDecoration: 'line-through',
    color: '#B2ABB6'
  });
  $(this).remove();
});