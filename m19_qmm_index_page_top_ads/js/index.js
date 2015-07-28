$(function(){
  
  var btns= $('.box-nav-site .tit li');
  btns.each(function(){
    
    $(this).on( 'mouseenter', function(){
      $( btns ).removeClass( 'cur' );
      $( this ).addClass( 'cur' );
    });
    
  });
  $('#J_nav_site').on( 'mouseenter', '.tit li', function(e){
    window.xx = this;
    var data_id = $( this ).attr('data-id'),
        moreDivs = $( this ).parents('#J_nav_site').find('.aj-tit-more .aj-one');
    moreDivs.each(function(){
      if( $(this).attr('aj-from-data-id') && $(this).attr('aj-from-data-id') === data_id ){
        $( this ).fadeIn();
      }else{
        $( this ).hide();
      }
    });
  });
  $('#J_nav_site').on( 'click', '.aj-tit-more .aj-one li', function(){
    $( this ).parents('.aj-one').find('li').removeClass('aj-select');
    $( this ).addClass('aj-select');
  });
  
});