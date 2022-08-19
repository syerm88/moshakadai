$(window).on('resize', function() {//ウィンドウサイズを変更した際に、ハンバーガーメニューがイキた状態になるのでそれを解除
  let $windowWidth = window.innerWidth;

  if($windowWidth > 1200){
    $('.js-btn').removeClass('open');
    $('.nav-menu').removeClass('open');
    $('.nav-menu .nav').removeAttr('style');
    $('.nav-menu ').removeAttr('style');
    $('.btn-line').removeClass('open');
    
  };
});



$(function(){
  $(".has-sub").mouseover(function(){
    $(this).children(".sub").stop().slideDown(250);
  });
  $(".has-sub").mouseout(function(){
    $(".sub").stop().slideUp(50);
  });
})



$(function () {
  $('.js-btn').on('click', function () { // js-btnクラスをクリックすると、
    $(this).toggleClass('open');
    $('.nav-menu, .btn-line, .nav').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
    $('.nav-menu .nav').slideToggle('230');
  });
});


