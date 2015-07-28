setTimeout(function(){
	var val = $( '#aj-moni-ajax' ).val(),
		div = document.querySelectorAll( '.JMyAjax' )[1];
		
	$( div ).html( val );
},3000);