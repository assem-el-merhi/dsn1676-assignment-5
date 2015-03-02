var $form = $('.form');
var $written = $('.written');
var $list = $('.list');

$form.on('submit', function(e) {
    e.preventDefault();
    //Creating the list
    	
    //by creating a button for the list this will allow mutiple buttons
    var $li = $('<li>').html($written.val());
    var $writtenDl = $('<button class="close">X</button>');
    	
    //adding button for event 
    $writtenDl.on('click', function () {
    $li.remove('li');
    
    });
    
   $list.on('click', 'li', function () {
    $().addClass('li');
    
   });
    //naming convention 
    $li.append($writtenDl);
    $list.prepend($li);
    $name.val('');
});

