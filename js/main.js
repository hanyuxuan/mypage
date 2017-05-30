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
});