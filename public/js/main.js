/**
 * @version 0.0.1
 * @description login animation 
 * @author hongyang
 * 
 */
(function($){
	var $switch = $('.switch');
	var $container = $('.container');
	//switch icon
	
	$switch.on('click','i.fa,.shake',function(e){
		var $this = $(this);
		$this.toggleClass('fa-pencil');
		animateInOut();
	});
	
	function animateInOut(){
		$container.find('.form-horizontal').each(function(i,n){
			var $n = $(n);
//			$n.toggleClass('hidden');
			$n.animate({height: 'toggle', opacity: 'toggle'},"slow",function(){
				$n.toggleClass('hidden');
			});
		});		
	}
		
})(jQuery);