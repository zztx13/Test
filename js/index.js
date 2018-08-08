// JavaScript Document
$(document).ready(function () {
	
   	
    scales('.hfx',750,100);
	$(window).resize(function(){
		scales('.hfx',750,100);
	})
	
	
	
	
	$(".zhazao").bind("click",function(){
		
		$(".tankuang").hide();
		$(".zhazao").hide();
		$(".diqu").hide();
		$(".hangye").hide();
		$(".loading").hide();
		
	})
	
	
	
	
	
	
	 
});
    














