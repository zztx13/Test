// JavaScript Document
$(document).ready(function () {
	
   	
    scales('.hfx',750,100);
	$(window).resize(function(){
		scales('.hfx',750,100);
		
		if($('.banner').length > 0){
		    $(".banner_r .banner_i").width($("html").width()*0.8906);
	        $(".banner_r").width($("html").width()*0.9066*$(".banner_r .banner_i").length);
		}
		if($('.yy_area_b_r').length > 0){
		    $(".yy_area_b_r .yy_area_i").width($("html").width()*0.1333);
	        $(".yy_area_b_r").width($("html").width()*0.224*$(".yy_area_b_r .yy_area_i").length);
		}
		if($('.yun_area_b_r').length > 0){
		    $(".yun_area_b_r .yun_area_i").width($("html").width()*0.1333);
	        $(".yun_area_b_r").width($("html").width()*0.224*$(".yun_area_b_r .yun_area_i").length);
		}
		
	})
	
	
	$(".menu_bar .menu_i").bind("click",function(){
		$(".menu_bar .menu_i").removeClass("on");
		$(this).addClass("on");
	})
	
	

	
	
	
	 
	 $(".tab_bar a").bind("click",function(){
		

		$(".tab_bar a").removeClass("on");

		$(this).addClass("on");

		
	})
	
	
	
	$(".tjfz_but").bind("click",function(){
		
		$(".fz_list_bot").show();
		$(".zhazao").show();
		
	})
	
	$(".zhazao").bind("click",function(){
		
		$(".fz_list_bot").hide();
		$(".zhazao").hide();
		
	})
	
	
	$(".fz_list_i").bind("click",function(){
		
		$(".fz_list_bot").hide();
		$(".zhazao").hide();
		
	})
	
	$(".seach_input").focus(function(){
		$(".seach_bar_rr i").show();
	})
	
	
	$(".seach_bar_rr i").bind("click",function(){
		$(".seach_input").val("").focus();
	})
	
	
	$(".i_qd").bind("click",function(){
	
	    $(this).parent().remove();
	
	})
	
	 
});
    














