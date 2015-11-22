// Add row

$('#add-button').click(function() {
  var newRow = $(".to-do-list tbody");
  var tr = $('<tr></tr>');
  var checkTd = $('<td class="col-md-1 col-lg-1 text-center"><input class="check" type="checkbox"></td>');
  var itemTd = $('<td class="col-md-10 col-lg-10 item-description"></td>');
  var delTd = $('<td class="col-md-1 col-lg-1 text-right del-button-td"><button class="btn btn-default del-button">X</button></td>');

  
  if($('.inputter').val()===''){
    if($('#so-empty')){
      $('#so-empty').remove();
    }
    var msg = $('<div id="so-empty"></div>');
    msg.addClass('empty-message').text('Please enter something.');
    $('.inputter').after(msg);

    return;
  }else{
    if($('#so-empty')){
      $('#so-empty').remove();
    }

    itemTd.text($('.inputter').val());

    tr.append(checkTd);
    tr.append(itemTd);
    tr.append(delTd);
    newRow.append(tr.hide().fadeIn(750));
  }

  $('.inputter').val('');
});

// Remove row

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