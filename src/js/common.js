$(function() {
    //tab
	tabFn();

});

//tab Function
function tabFn() {
    $(".tab-list > .tab").on("click", function() { //tab-list > .tab
		var idx = $(this).index();
        //console.log('on');
        
		$(this).addClass("on").siblings().removeClass("on");
        
		$('.tab-cont-list').find(".common").eq(idx).addClass("on").siblings().removeClass("on"); //tab-cont-list > .common 
		$('.tab-cont-list').find(".common").eq(idx).show().siblings().hide();
    });
}