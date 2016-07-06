$(".xqlist").hide();
var color;
$(".ullist").on("click","li",function(){
	$(this).next().toggle().siblings(".xqlist").hide();

	color=$(this).data("color");
	//console.log(color)
	if($(this).find(".icon").attr("class")=="icon icon-angle-down"){
		$("li .icon").attr("class","icon icon-angle-down");
		$(this).find(".icon").attr("class","icon icon-angle-up");
		$(this).css({
			"color":color
		}).siblings("li").css({
			"color":"#000"
		})
	}else{
		$(this).find(".icon").attr("class","icon icon-angle-down");
		$(this).css({
			"color":"#000"
		})
	}	
});

//搜索  清除和存储历史记录
 $(".sea").keyup(function(){
 	var txt=$(".sea").val(),
 	 	htm=$(".sea").next().text();
 	if(txt == false){
		$(".sea").next().text("取消")
	}else{
		$(".sea").next().text("搜索")
	}
});

 //分享在朋友圈、微博等等
 $(".share").on("click",function(){
 	if($(".enjoy").css("display")=="none"){
 		$(".enjoy").fadeIn(1000,function(){
 		$(".enjoy").show();
 		})}
 	else{
 		$(".enjoy").fadeOut(1000,function(){
 		$(".enjoy").hide();
 		})
 	}	
 })




