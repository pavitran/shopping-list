$(document).ready(function () {
	$( "#js-shopping-list-form" ).submit(function( event ) {
		    $("ul").append(
		      "<li>" + '<span class="shopping-item">' + $( "#shopping-list-entry" ).val() +"</span>"+
        '<div class="shopping-item-controls">'+
          '<button class="shopping-item-toggle">'+
            '<span class="button-label">check</span>'+
          "</button>"+
          '<button class="shopping-item-delete">'+
            '<span class="button-label">delete</span>'+
          "</button>"+
        "</div>"+
      "</li>"
		    );
	  	event.preventDefault();
	});
	$('ul').on('click', '.shopping-item-delete', function(event) {
	  this.closest( "li" ).remove();
	});
	$('ul').on('click', '.shopping-item-toggle', function(event) {
		//console.log(this);
		var c = $(this).parent().siblings();
		if (c.attr('class') != "shopping-item__checked") {
			c.toggleClass("shopping-item__checked");
		} else {
			c.removeClass("shopping-item__checked");
		}
	});
});