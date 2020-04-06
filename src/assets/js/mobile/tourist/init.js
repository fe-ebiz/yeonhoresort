$(function() {
    //함수실행
    tourHeightFn();
    
    
    //리사이즈
    $(window).resize(function() {
        tourHeightFn();
    }).resize();
});

//리스트 박스 높이값 동일하게
function tourHeightFn() {
    var tourLi, tourLiLen;
    var maxH = 0;
    var tourCont = $('.cont-tourist .tist-cont');
    var tourAreaLen = tourCont.find('.area').length;
    
    tourCont.find('.area .list li dd').css({'height' : 'auto'});
    //console.log(tourAreaLen)
    
    for( var i = 0 ; i < tourAreaLen ; i++ ){
        tourLi = tourCont.find('.area:eq('+i+') .list');
        tourLiLen = tourLi.find('li').length;
        
        for( var j = 0 ; j < tourLiLen ; j++ ){
            var liH = tourLi.find('li:eq('+j+') dd').height();
            if( maxH < liH ) maxH = liH
            
        }
        tourLi.find('li dd').css({'height' : maxH+'px'});
        
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   /* var maxLiH = 0;
    var tourLi = $('.tour-list > li[class^="nth-"]').length-2;
    var tourConLi = $('.tour-con-list > li[class^="li-"]');
    var tourConLiLen = $('.tour-con-list > li:last-child').attr('class').substring(3);
    //var tourConH = $('.tour-con-list').height();

    for( var i = 0 ; i < tourLi ; i++ ){
        for( var j = 0 ; j < tourConLiLen ; j++ ){
            if( i == 0 ){
                tourConLi.find('.txt-box').css({'height' : 'auto'});
                //console.log(tourConLi.find('.txt-box').height())
            }else{
                if( maxLiH <=  $('.tour-list > li.nth-'+ i +' .tour-con-list li.li-'+ (j+1) +' .txt-box').innerHeight() ){
                    maxLiH = $('.tour-list > li.nth-'+ i +' .tour-con-list li.li-'+ (j+1) +' .txt-box').innerHeight()
                }
                //console.log(i, (j+1), maxLiH);
            }
        }
    }
    tourConLi.find('.txt-box').css({'height' : maxLiH + 'px'});
    //$('.bx-viewport').css({'height' : 'auto'});
    //console.log(maxLiH)

    maxLiH = 0;*/
}