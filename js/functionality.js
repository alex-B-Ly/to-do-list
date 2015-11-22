// Add row

$('#add-button').click(function() {
  var newRow = $(".to-do-list tbody");
  var tr = $('<tr></tr>');
  var checkTd = $('<td class="col-md-1 col-lg-1 text-center"><input class="check" type="checkbox"></td>');
  var itemTd = $('<td class="col-md-10 col-lg-10 item-description"></td>');
  var delTd = $('<td class="col-md-1 col-lg-1 text-right del-button-td"><button class="btn btn-default del-button">X</button></td>');

  
  if($('.inputter').val()===''){
    // TODO Replace alert function with a message
    alert('empty');
    return;
  }else{
    itemTd.text($('.inputter').val());

    tr.append(checkTd);
    tr.append(itemTd);
    tr.append(delTd);
    newRow.append(tr.hide().fadeIn(750));
  }

  delHover();

  $('.inputter').val('');
});

// Delete blinker and delete row

function delHover(){
  $('.del-button').hover(function() {
  	$(this).text('Delete');
  }, function() {
  	$(this).text('X');
  });
}

delHover();

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