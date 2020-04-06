$(function() {
    //함수실행
	tabFn();

});

//tab Function
function tabFn() {
    $(".tab-list > .tab").on("click", function() { 
		var idx = $(this).index();
        
		$(this).addClass("on").siblings().removeClass("on");
        
		$('.tab-cont-list').find(".common").eq(idx).addClass("on").siblings().removeClass("on");
		$('.tab-cont-list').find(".common").eq(idx).show().siblings().hide();
    });
}