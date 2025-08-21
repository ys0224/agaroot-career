// JavaScript Document
$(function () {
  // ハンバーガー
  $(".bl_burger").on("click", function () {
    $(this).toggleClass("is_active");
    $(".bl_head_linkList").toggleClass("is_active");
    $(".bl_gloNav_inner").toggleClass("open");
  });
  $(".bl_gloNav_inner li, .bl_gloNav_btn").on("click", function () {
    if ($(".bl_burger, .bl_head_linkList").hasClass("is_active")) {
      $(".bl_burger, .bl_head_linkList").removeClass("is_active");
      $(".bl_gloNav_inner").removeClass("open");
    }
  });

  // ページトップボタン
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $(".bl_pagetop span").addClass("fade");
      $(".bl_pagetop span").addClass("in");
    } else {
      $(".bl_pagetop span").removeClass("in");
    }
  });
  $(window).on("resize orientationchange", function () {
    $(".bl_pagetop span").removeClass("fade");
  });
  var eventName02;
  if ((navigator.userAgent.indexOf("iPhone") > 0 && navigator.userAgent.indexOf("iPad") === -1) || navigator.userAgent.indexOf("iPod") > 0 || navigator.userAgent.indexOf("Android") > 0) {
    eventName02 = "scroll orientationchange load";
  } else {
    eventName02 = "scroll resize load";
  }
  $(window).on(eventName02, function () {
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    var CopyHeight = $(".bl_foot_copyright").innerHeight();
    if (window.matchMedia("(min-width:1401px)").matches) {
      if (scrollHeight - scrollPosition <= CopyHeight) {
        $(".bl_pagetop span").css({
          position: "absolute",
          bottom: "14px",
        });
      } else {
        $(".bl_pagetop span").css({
          position: "fixed",
          bottom: "30px",
        });
      }
    } else if (window.matchMedia("(max-width:750px)").matches) {
      if (scrollHeight - scrollPosition <= CopyHeight) {
        $(".bl_pagetop span").css({
          position: "absolute",
          bottom: "29px",
        });
      } else {
        $(".bl_pagetop span").css({
          position: "fixed",
          bottom: "220px",
        });
      }
    } else if (window.matchMedia("(max-width:1400px)").matches) {
      if (scrollHeight - scrollPosition <= CopyHeight) {
        $(".bl_pagetop span").css({
          position: "absolute",
          bottom: "14px",
        });
      } else {
        $(".bl_pagetop span").css({
          position: "fixed",
          bottom: "30px",
        });
      }
    }
  });
  $(".bl_pagetop").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });

  // アンカーリンクスムーススクロール
  var headerHeight = $(".ly_head").outerHeight();
  var urlHash = location.hash;
  if (urlHash) {
    //ページ外
    $("body,html").stop().scrollTop(0);
    setTimeout(function () {
      var target = $(urlHash);
      var position = target.offset().top - headerHeight;
      $("body,html").stop().scrollTop(position);
    }, 100);
  }
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href);
    var position = target.offset().top;
    $("body,html").animate({ scrollTop: position - headerHeight }, 1000, "swing");
  });
});

// ヘッダー切り替え
$(function () {
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $(".ly_head").addClass("is_sticky");
    } else {
      $(".ly_head").removeClass("is_sticky");
    }
  });
});

// 画面下部追従バナー分の余白を空ける
function updateMarginBottom() {
  const footerBanner = document.querySelector('.bl_foot_btmBnr');
  const footer = document.querySelector('.ly_foot');
  const mediaQuery = window.matchMedia("(max-width: 750px)");

  if (footerBanner && footer) {
    if (mediaQuery.matches) {
      // 750px以下の場合、高さを取得して適用
      footer.style.marginBottom = `${footerBanner.offsetHeight - 1}px`;
    } else {
      // 750pxを超えたら元のスタイルに戻す
      footer.style.marginBottom = "";
    }
  }
}

// 初回適用
updateMarginBottom();

// ウィンドウのリサイズ時にも更新
window.addEventListener('resize', updateMarginBottom);

