
$(function() {
    //함수실행
    sliderHFn();
		
	// bx슬라이더
	$("div[id*=bxBox-] .bxS").bxSlider({
		mode: 'fade',
		auto: true,
		autoControls: true,
		speed: 500,
		duration: 6000,
		prevText: '<img src="http://img.ocean2you.co.kr/renew/btn_prev3.png" alt="이전">',
		nextText: '<img src="http://img.ocean2you.co.kr/renew/btn_next3.png" alt="다음">',
	});
    
    //리사이즈
    $(window).resize(function() {
        sliderHFn();
    }).resize();
});

//슬라이드 이미지 대략적 비율의 높이값
function sliderHFn(){
    var wd = $('.cont-event').width();
    var ht = $('.bxBox .bxS li');
    
    ht.css({'height' : ((wd/2)+5)+'px'});
    $('.bxBox iframe').css({'height' : ((wd/2)+5)+'px'});
}