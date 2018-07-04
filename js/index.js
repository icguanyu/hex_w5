{
  var ad_index_top = $("#ad_index_top .adbox img");
  var ad_index_center = $("#ad_index_center .adbox img");
  var ad_index_bottom = $("#ad_index_bottom .adbox img");
  var top_now = 0;
  var center_now = 0;
  var center_bottom = 0;
  var time = 3000

  ad_index_top.hide().eq(0).show();
  ad_index_center.hide().eq(0).show();
  ad_index_bottom.hide().eq(0).show();

  var adSlide = setInterval(function() {
    top_now >= ad_index_top.length - 1 ? (top_now = 0) : (top_now++);
    adslide(ad_index_top, top_now);
    center_now >= ad_index_center.length - 1 ? (center_now = 0) : (center_now++)
    adslide(ad_index_center, center_now);
    center_bottom >= ad_index_bottom.length - 1 ? (center_bottom = 0) : (center_bottom++)
    adslide(ad_index_bottom, center_bottom);
  }, time);
  
  function adslide(element, i) {
    if (element.length <= 1) return false;
    $(element).hide().eq(i).show();
  }

  //關閉廣告
  $('.close').on('click',function(){
    $(this).parent().remove()
    var adlength = $('.adbox').length
    if(adlength == 0){
      clearInterval(adSlide)
    }
  })

  
  //切換chapterbox
  $('.chaperbox ul').hide().eq(0).show()
  $('.chaper>ul>li').on('click',function(){
    var nowchaper = $(this).index()
    $(this).addClass('on').siblings().removeClass('on')
    $('.chaperbox ul').hide().eq(nowchaper).show()
  })
}
