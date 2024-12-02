// JavaScript Document
$(function () {

// ハンバーガー
$('.bl_burger').on('click', function () {
$(this).toggleClass('is_active');
$('.bl_gloNav').toggleClass('is_active')
$('.bl_gloNav_inner').toggleClass('open')
});
$('.bl_gloNav_inner li, .bl_gloNav_btn').on('click', function () {
if ($('.bl_burger, .bl_gloNav').hasClass('is_active')) {
$('.bl_burger, .bl_gloNav').removeClass('is_active');
$(".bl_gloNav_inner").removeClass("open");
}
})

// ページトップボタン
$(window).on("scroll", function () {
if ($(this).scrollTop() > 100) {
$(".bl_pagetop span").addClass('fade');
$(".bl_pagetop span").addClass('in');
} else {
$(".bl_pagetop span").removeClass('in');
}
});
$(window).on("resize orientationchange", function () {
$(".bl_pagetop span").removeClass('fade');
});
var eventName02;
if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') === -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
eventName02 = 'scroll orientationchange load';
} else {
eventName02 = 'scroll resize load';
}
$(window).on(eventName02, function () {
var scrollHeight = $(document).height();
var scrollPosition = $(window).height() + $(window).scrollTop();
var CopyHeight = $(".bl_foot_copyright").innerHeight();
if (window.matchMedia("(max-width:750px)").matches) {
if (scrollHeight - scrollPosition <= CopyHeight) {
$(".bl_pagetop span").css({
position: "fixed",
bottom: "220px",
});
} else {
$(".bl_pagetop span").css({
position: "fixed",
bottom: "220px",
});
}
}
else if (window.matchMedia("(min-width: 751px) and (max-width: 1280px)").matches) {
if (scrollHeight - scrollPosition <= CopyHeight) {
$(".bl_pagetop span").css({
position: "fixed",
bottom: "min(calc(44 / 1280* 100vw)",
});
} else {
$(".bl_pagetop span").css({
position: "fixed",
bottom: "min(calc(30 / 1280 * 100vw)",
});
}
}
else {
if (scrollHeight - scrollPosition <= CopyHeight) {
$(".bl_pagetop span").css({
position: "fixed",
bottom: "44px",
});
} else {
$(".bl_pagetop span").css({
position: "fixed",
bottom: "30px",
});
}
}
});
$('.bl_pagetop').click(function () {
$('body,html').animate({
scrollTop: 0
}, 400);
return false;
});


// アンカーリンクスムーススクロール
var headerHeight = $('.ly_head').outerHeight();
var urlHash = location.hash;
if (urlHash) {//ページ外
$('body,html').stop().scrollTop(0);
setTimeout(function () {
var target = $(urlHash);
var position = target.offset().top - headerHeight;
$('body,html').stop().scrollTop(position);
}, 100);
}
$('a[href^="#"]').click(function () {
var href = $(this).attr("href");
var target = $(href);
var position = target.offset().top;
$('body,html').animate({ scrollTop: (position - headerHeight) }, 1000, 'swing');
});

});


// ヘッダー切り替え
$(function () {
$(window).on("scroll", function () {
var scroll = $(window).scrollTop();
if (scroll > 0) {
$(".ly_head").addClass('is_sticky');
} else {
$(".ly_head").removeClass('is_sticky');
}
});
});


