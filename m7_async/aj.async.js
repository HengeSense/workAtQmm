(function(){
var timer = setInterval(function(){
	if( window.jQuery ){
		$(document).ready(function(){
			yy.start();
		});
		clearInterval(timer);
	}
},1000/12);

var yy = {};

//var div = "<span class='aj-delay-js' aj-src='index.js'></span>";
yy.start = function(){
	yy.loadJS2();
}

yy.loadJS  = function(){
	var js = document.querySelectorAll('.aj-delay-js');
	for( var i = 0; i<js.length; i++ ){
		(function( src ){
			$.getScript( src );
		})( js[i].getAttribute('aj-src') )
	}
}

yy.loadJS2 = function(){
	var js = document.querySelectorAll('.aj-delay-js');
	for( var i = 0; i<js.length; i++ ){
		(function( src ){
			var script = document.createElement( 'script' );
			script.setAttribute( 'src', src );
			document.body.appendChild( script );
			
		})( js[i].getAttribute('aj-src') )
	}
}

})()