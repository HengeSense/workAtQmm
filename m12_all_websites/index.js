(function(){
	
$(document).ready(function(){
	var divs = $('.aj-website-fenlei .aj-websites-wrap');
	divs.each(function(){
		var web = $( this ).find('.aj-website-one'),
			num = 19;
		while( num -- ){
			console.log(1);
			$( web[0] ).before( $(web[0]).clone() );
		}
	});
});	
	
})();