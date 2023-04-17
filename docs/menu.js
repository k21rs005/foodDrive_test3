$(".openbtn4").click(function () {
    $('.openbtn4  ,.slide-menu').toggleClass('active');
});

$(".btn").click(function () {
    $('.openbtn4  ,.slide-menu').removeClass('active');
});

$('#page-link a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top;	//idの上部の距離を取得
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
});

const topPageBtn = document.querySelector('#top-page-btn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100 &&window.pageYOffset <= 5750) {
    topPageBtn.style.display = 'block';
  } else {
    topPageBtn.style.display = 'none';
  }
});

topPageBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

