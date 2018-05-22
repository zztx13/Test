/**
 * Created by FSUser on 2017/8/15.
 */

$(function () {

    console.log($("html").width()*0.9066);
	$(".banner_r .banner_i").width($("html").width()*0.8906);
	$(".banner_r").width($("html").width()*0.9066*$(".banner_r .banner_i").length);
    
	
	
	
	var lth = $('.banner_r .banner_i').length;
	var defaultZ = 10;
	var str = '';
	for (var i = 1; i <= lth; i++) {
		str += '<a id="adbot_' + (i) + '" href="###"></a>';
	}
	var $controlA = $(".fwrd_bodybot").append($('<div class="control">' + str + '</div>').css('zIndex', defaultZ + 10000)).find('.control a');
	
	
	$("#adbot_1:eq(0)").addClass("on");
	
    $(".fwrd_bodybot").css("width",14*lth).css("marginLeft",-7*lth);
    
	
	
	function autoClick(){
		var the_leg = $(".control a").length;
		var the_ind = parseInt($(".control a.on").attr("id").substr(6, 2));
		
		if(the_ind == the_leg){
			$(".control #adbot_1").click();
		}else{
			$(".control #adbot_"+(the_ind+1)).click();
		}
	}
	
	
	
	
	$(".control a").bind("click", function () {
		$(".banner_r").stop(true, true);

		/*alert(pxml);*/
		var themj = $(this).attr("id");
		/*	   alert($(this).attr("id").indexOf("_"));*/
		var adboti = parseInt($(this).attr("id").substr(6, 2));
		console.log(adboti)
		//window.getComputedStyle(".banner_i");
		$(".banner_r").stop(true, true).animate({ marginLeft: -($("html").width()*0.9066*(adboti-1)) + "px" }, 1000);


		$(".control a").removeClass("on")
		$(this).addClass("on")


	});
	
	
	
	
	
	
	$(".banner_r").on("touchstart", function(e) {
		//e.preventDefault();
		startX = e.originalEvent.changedTouches[0].pageX,
		startY = e.originalEvent.changedTouches[0].pageY;
	});
	
	
	$(".banner_r").on("touchend", function(e) {

	});
	
	
	$(".banner_r").on("touchmove", function(e) {
        

		/*var w = x<0?x*-1:x;     //x轴的滑动值
		var h = y<0?y*-1:y;     //y轴的滑动值
		if(w>h){                //如果是在x轴中滑动
		   e.preventDefault();
		}*/
		

		e.preventDefault();
		moveEndX = e.originalEvent.changedTouches[0].pageX,
		moveEndY = e.originalEvent.changedTouches[0].pageY,
		X = moveEndX - startX,
		Y = moveEndY - startY;
		if ( X > 0 ) {
			//console.log($(".control a.on").index());
			var the_ind = $(".control a.on").index();
			
			if(the_ind != 0){
				if($(".banner_r").is(":animated")){}else{
					$(".control a").eq(the_ind-1).click();
					//console.log("左:"+the_ind);
				}
			}
		}
		else if ( X < 0 ) {
			//console.log(2);
			var the_ind = $(".control a.on").index();
			
			if(the_ind != (lth-1)){
				if($(".banner_r").is(":animated")){}else{
					$(".control a").eq(the_ind+1).click();
					//console.log("右:"+the_ind);
				}
			}
			
		}	
		
			
            
    });
	
	
	
	
	
	
	
	
	$(".yy_area_b_r .yy_area_i").width($("html").width()*0.1333);
	$(".yy_area_b_r").width($("html").width()*0.224*$(".yy_area_b_r .yy_area_i").length);
    
	$(".yun_area_b_r .yun_area_i").width($("html").width()*0.1333);
	$(".yun_area_b_r").width($("html").width()*0.224*$(".yun_area_b_r .yun_area_i").length);
	
	
	/*var lth_xin = $('.yy_area_b_r .yy_area_i').length;	
	$(".yy_area_b_r").on("touchstart", function(e) {
		//e.preventDefault();
		startX = e.originalEvent.changedTouches[0].pageX,
		startY = e.originalEvent.changedTouches[0].pageY;
	});
	
	
	$(".yy_area_b_r").on("touchend", function(e) {

	});
	
	
	$(".yy_area_b_r").on("touchmove", function(e) {
        
        e.preventDefault();
		moveEndX = e.originalEvent.changedTouches[0].pageX,
		moveEndY = e.originalEvent.changedTouches[0].pageY,
		X = moveEndX - startX,
		Y = moveEndY - startY;
		
		var the_p = $(".yy_area_i.on").index()
		var the_left = parseInt($(".yy_area_b_r").css("marginLeft"));
		
		console.log("i"+the_p);
		if ( X > 0 ) {
			
			console.log("右");
			if( the_p != 0){
				if($(".yy_area_b_r").is(":animated")){}else{
					$(".yy_area_b_r .yy_area_i").removeClass("on");
					$(".yy_area_b_r").stop(true, true).animate({ marginLeft: (the_left+$("html").width()*0.224) + "px" }, 700);
					$(".yy_area_b_r .yy_area_i").eq(the_p-1).addClass("on");
				}
			}
		}
		else if ( X < 0 ) {
			
			if( the_p != $(".yy_area_b_r .yy_area_i").length-4){
				if($(".yy_area_b_r").is(":animated")){}else{
					console.log("左");
					console.log(the_p);
					$(".yy_area_b_r .yy_area_i").removeClass("on");
					$(".yy_area_b_r").stop(true, true).animate({ marginLeft: (the_left-$("html").width()*0.224) + "px" }, 700);
					$(".yy_area_b_r .yy_area_i").eq(the_p+1).addClass("on");
				}
			}
			
		}	
		
			
            
    });
	
	
	
	
	
	
	
	
	
	
	
    
	
	
	
	var lth_yun = $('.yun_area_b_r .yun_area_i').length;	
	$(".yun_area_b_r").on("touchstart", function(e) {
		//e.preventDefault();
		startX = e.originalEvent.changedTouches[0].pageX,
		startY = e.originalEvent.changedTouches[0].pageY;
	});
	
	
	$(".yun_area_b_r").on("touchend", function(e) {

	});
	
	
	$(".yun_area_b_r").on("touchmove", function(e) {
        
        e.preventDefault();
		moveEndX = e.originalEvent.changedTouches[0].pageX,
		moveEndY = e.originalEvent.changedTouches[0].pageY,
		X = moveEndX - startX,
		Y = moveEndY - startY;
		
		var the_pp = $(".yun_area_i.on").index()
		var the_pleft = parseInt($(".yun_area_b_r").css("marginLeft"));
		
		console.log("i"+the_pp);
		if ( X > 0 ) {
			
			console.log("右");
			if( the_pp != 0){
				if($(".yun_area_b_r").is(":animated")){}else{
					$(".yun_area_b_r .yun_area_i").removeClass("on");
					$(".yun_area_b_r").stop(true, true).animate({ marginLeft: (the_pleft+$("html").width()*0.224) + "px" }, 700);
					$(".yun_area_b_r .yun_area_i").eq(the_pp-1).addClass("on");
				}
			}
		}
		else if ( X < 0 ) {
			
			if( the_pp != $(".yun_area_b_r .yun_area_i").length-4){
				if($(".yun_area_b_r").is(":animated")){}else{
					console.log("左");
					console.log(the_pp);
					$(".yun_area_b_r .yun_area_i").removeClass("on");
					$(".yun_area_b_r").stop(true, true).animate({ marginLeft: (the_pleft-$("html").width()*0.224) + "px" }, 700);
					$(".yun_area_b_r .yun_area_i").eq(the_pp+1).addClass("on");
				}
			}
			
		}	
		
			
            
    });*/
	
	
	
	
	
	
	
 

})