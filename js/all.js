{
  //工具列
  $(".toolbtn").on("click", function() {
    $(".toolbar")
      .stop()
      .slideToggle();
  });
  //切換日夜
  $(".switch").on("click", function() {
    $(this).toggleClass("night");
    $('body').toggleClass('dark')
    $('.header').toggleClass('header_dark')
    $('.toolbar').toggleClass('toolbar_dark')
    $('.pic_view').toggleClass('pic_view_dark')
    $('.next').toggleClass('next_dark')
    $('.prev').toggleClass('prev_dark')
    $('.sm_prev,.sm_next').toggleClass('sm')
  });

  var now = 1;
  var length = $(".pic").length;
  var $pi_w = $(".pic_view");
  var maxScrollLeft = $pi_w[0].scrollWidth - $pi_w[0].clientWidth;

  $(".nowpage").html(`<img src="./img/storyboard-${now}.png">`);

  function pageHandler() {
    if ($(this).is(".next")) {
      now >= length ? (now = length) : (now += 1);
      if (now == length) {
        alert("最後一頁囉");
        //$(".sm_next").css({ color: "red" });
      }
    } else if ($(this).is(".prev")) {
      now <= 1 ? (now = 1) : (now -= 1);
    } else if ($(this).is(".pic")) {
      var target = $(this).index();
      now = target + 1;
    } else if ($(this).is(".sm_next")) {
      now = length;
    } else if ($(this).is(".sm_prev")) {
      now = 1;
    }
    $(".nowpage").html(`<img src="./img/storyboard-${now}.png">`);
    $(".pic>div")
      .removeClass("now")
      .eq(now - 1)
      .addClass("now");

    $(".pic_view").animate(
      { scrollLeft: Math.ceil(maxScrollLeft / length) * (now - 1) },
      100
    );
  }

  $(".next,.sm_next,.prev,.sm_prev,.pic").on("click", pageHandler);


  //日夜切換
}
