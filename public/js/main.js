/**
 * @version 0.0.1
 * @description login animation 
 * @author hongyang
 * 
 */
(function($){
	var $switch = $('.switch');
	
	//switch icon
	
	$switch.on('click','i.fa',function(e){
		var $this = $(this);
		$this.toggleClass('fa-pencil');
	});
	
})(jQuery);