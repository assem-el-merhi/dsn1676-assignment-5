var $form = $('form');
var $add = $('#add');


$form.on('submit', function (e) {
    var $li = $('<li>');
    $li.addClass('new-input');
    $('body').append($li);
    e.preventDefault();
    //$circle.css('background-color', $theColor.val());

});


