$(function() {
	$('#linkWeChat').click(function() {
		$('#qq').css("display", "none");
		$('#wechat').css("display", "block");
		goBreak();
	});
	$('#linkQQ').click(function() {
		$('#wechat').css("display", "none");
		$('#qq').css("display", "block");
		goBreak();
	});

	function goBreak() {
		$('#social-mask').css("display", "block");
		$('#social-mask').click(function() {
			$(this).css("display", "none");
		});
		$('#break').click(function() {
			$('#social-mask').css("display", "none");
		});
	}

	$('#gallery li').mouseover(function() {
		var self = $(this);
		$('.work-mask').css("display", "none");
		$('.work-mask').eq(self.index()).css("display", "block");
	});
	$('#gallery li').mouseout(function() {
		$('.work-mask').css("display", "none");
	});
	var works = ['images/work1.PNG', 'images/work2.PNG', 'images/work3.PNG', 'images/work4.PNG', 'images/work5.PNG', 'images/work6.PNG', ];
	
	/*滚动处理*/
	var navOffsetTop = $("#nav").offset().top;
	var leader = 0;
	var target = 0;
	var timer = null;
	
	window.onscroll = function(){
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
		leader = scrollTop;
		if(scrollTop >= navOffsetTop){
			$("#top").css("display","block");
			$("#nav").css({
				"position": "fixed",
				"left": 0,
				"top": 0,
				"z-index": 1
			});
		}else{
			$("#top").css("display","none");
			$("#nav").css({
				"position": "static",
				"z-index": 0
			});
		}
		whenNavAddclass(leader);
	};
	
	function whenNavAddclass(leader){
		$("#nav > a").each(function(){
			$(this).removeClass("active");
		})
		if(leader<=moveArr[1]-100){
			$("#nav > a").eq(0).addClass("active");
		}else if(leader>moveArr[1]-100 && leader<=moveArr[2]-100){
			$("#nav > a").eq(1).addClass("active");
		}else if(leader>moveArr[2]-100 && leader<=moveArr[3]-100){
			$("#nav > a").eq(2).addClass("active");
		}else if(leader>moveArr[3]-100 && leader<=moveArr[4]-100){
			$("#nav > a").eq(3).addClass("active");
		}else{
			$("#nav > a").eq(4).addClass("active");
		}
	}
	
	$("#top").bind("click",function(){
		clearInterval(timer);
		target = 0;
		slowMove();
	});
	function slowMove(){
		timer = setInterval(function(){
			leader = leader + (target-leader)/10;
			window.scrollTo(0,leader);
			if(leader == target){
				clearInterval(timer);
			}
		},30)
	}
	var navHeight = $("#nav").height();
	var moveArr = [$("#home").offset().top,$("#about").offset().top-navHeight,$("#skills").offset().top-navHeight,$("#gallery").offset().top-navHeight,2886];
	$("#nav > a").bind("click",function(){
		clearInterval(timer);
		
		target = moveArr[$(this).index()];
		timer = setInterval(function(){
			leader = leader + (target-leader)/10;
			window.scrollTo(0,leader);
			if(Math.abs(leader - target)<=2){
				clearInterval(timer);
			}
		},30)
	});
	
});