// ; !function ($) {
// 	//banner数据
// 	$.ajax({
// 		url: 'php/banner.php',
// 		dataType: 'json'
// 	}).done(function (bannerdata) {
// 		$.each(bannerdata, function (index, value) {
// 			var $bannerstr = '<ul>';

// 		});
// 	});

// 	//lunbo数据
// 	$.ajax({
// 		url: 'php/banner.php',
// 		dataType: 'json'
// 	}).done(function (bannerdata) {
// 		$.each(bannerdata, function (index, value) {
// 			var $bannerstr = '<ul>';

// 		});
// 	});
// 	//tab切换数据
// 	$.ajax({
// 		url: 'php/banner.php',
// 		dataType: 'json'
// 	}).done(function (bannerdata) {
// 		$.each(bannerdata, function (index, value) {
// 			var $bannerstr = '<ul>';

// 		});
// 	});
// }(jQuery);

// !function () {
// 	//banner效果

// }(jQuery);

// !function () {
// 	//lunbo效果

// }(jQuery);
; !function ($) {//轮播图
	const $picli = $('.ban-slider li')
	const $dot = $('.b-dot ul li')
	const $arrows = $('.arrows-btn a');
	const $prev = $('.prev');
	const $next = $('.next');
	let $num = 0
	let $timer = null;
	$dot.on('mouseover', function () { //小圆点切换
		$num = $(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		$picli.eq($(this).index()).show().siblings().hide();
	})
	$('.banner-slider').hover(function () { // 划过轮播图显示箭头
		$arrows.css({
			opacity: 0.3,
			display: 'inline'
		})
		// $arrows.on('mouseover', function () {
		// 	$arrows.css({
		// 		opacity: 0.7,
		// 	})
		// })
		// clearInterval(fu())
	}, function () { //划出隐藏
		// console.log($arrows)
		$arrows.hide()
		// $timer
	})


	$prev.on('click', function () {  //点击左箭头
		$num--;
		if ($num < 0) {
			$num = 1
			$dot.eq($num).addClass('on').siblings().removeClass('on');
			$picli.eq($num).show().siblings().hide()
		}
		// console.log($num)
		$dot.eq($num).addClass('on').siblings().removeClass('on');
		$picli.eq($num).show().siblings().hide()
	})

	$next.on('click', function () { //点击右箭头
		$num++;
		if ($num > 1) {
			$num = 0
			$dot.eq(0).addClass('on').siblings().removeClass('on');
			$picli.eq(0).show().siblings().hide()
		}
		// console.log($num)
		$dot.eq($num).addClass('on').siblings().removeClass('on');
		$picli.eq($num).show().siblings().hide()
	})

	// function fu() {
	// 	$timer = setInterval(function () {//定时器
	// 		$next.click()
	// 	}, 3000)
	// }

}(jQuery);





; !function ($) {
	//导航栏
	const $switch = $('.catalogs-title');
	const $list = $('.catalogs-list')
	$switch.on('click', function () {//点击分类显示与隐藏
		$list.toggleClass('heid')
	})
	$list.find('.item').on('mouseover', function () {//划过每一个商品分类显示里面的二级导航
		$(this).addClass('current')
		$(this).find('.sub-item').show()
	})
	$list.find('.item').on('mouseout', function () {//划出每一个商品分类隐藏里面的二级导航
		$(this).removeClass('current')
		$(this).find('.sub-item').hide()
	})
}(jQuery);


!function ($) {
	//渲染效果
	const $floor = $('.f');
	$.ajax({
		url: 'http://localhost/yiguo/php/yiguo.php',
		dataType: 'json',
	}).done(function (y) {
		// console.log(y);
		var $div = '<div>';
		$.each(y, function (index, value) {
			$div += `
			<div class="floor wrap 01_channelhome clearfix loadfloor" id="t0${index}_channelhome" data-url="/Home/Floor?floorId=01_channelhome">
<div class="floor-title ">
    <h2><a href="javascript:;" target="_blank"><i>${value.line}</i>${value.linetitle}</a></h2>
        <span class="keyword">
                <a href="http://search.yiguo.com/?keyword=%e8%bf%9b%e5%8f%a3%e8%8b%b9%e6%9e%9c&amp;pageindex=1" target="_blank" class="">${value.keyword}</a>
                <a href="http://www.yiguo.com/products/0101_qiyiguo.html#formCx" target="_blank" class="">${value.keyword1}</a>
                <a href="http://search.yiguo.com/?keyword=%E6%B3%B0%E5%9B%BD" target="_blank" class="last">${value.keyword2}</a>
        </span>
</div>
<div class="floor-con floor-layout2">
            <div class="floor-side"><a href="javascript:;" target="_blank"><img src="${value.thumb}" width="275" height="463"></a></div>
            <div class="floor-main">
            <ul>
                        <li><a href="http://localhost/yiguo/src/details.html?sid=${value.sid}" target="_blank"><img src="${value.url1}" width="230" height="230"></a></li>
                                        <li><a href="http://localhost/yiguo/src/details.html?sid=${value.sid}" target="_blank"><img src="${value.url2}" width="230" height="230"></a></li>
                                        <li class="wide"><a href="http://localhost/yiguo/src/details.html?sid=${value.sid}" target="_blank"><img src="${value.url3}" width="461" height="230"></a></li>
                                        <li class="wide"><a href="http://localhost/yiguo/src/details.html?sid=${value.sid}" target="_blank"><img src="${value.url4}" width="461" height="230"></a></li>
                                        <li><a href="http://localhost/yiguo/src/details.html?sid=${value.sid}" target="_blank"><img src="${value.url5}" width="230" height="230"></a></li>
                                        <li><a href="http://localhost/yiguo/src/details.html?sid=${value.sid}" target="_blank"><img src="${value.url6}" width="230" height="230"></a></li>
            </ul>
        </div>
</div>
</div>`;
		})
		$div += '</div>'
		$floor.html($div)
	})
}(jQuery);


!function ($) { //购物车 显示效果
	$('.shopping-cart').hover(function () { //划过显示			
		$('.shopping-list').stop().show().animate({
			opacity: 1
		}, 500)
	}, function () { //划过隐藏
		$('.shopping-list').stop().animate({
			opacity: 0,
		}, 500, function () {
		})
	})

	if ($('.totleNum b').html() != 0) {
		$('.goods').show()
	}
	else {
		$('.goods').hide()
	}


	$('.myyiguo').hover(function () {  //我的易果
		$(this).find('.con').show()
	}, function () {
		$(this).find('.con').hide()
	})

	$('.mobile').hover(function () {  //手机易果
		$(this).find('.con').show()
	}, function () {
		$(this).find('.con').hide()
	})
}(jQuery);



!function ($) {   //楼梯
	$floorli = $('.mui-nav a em')
	$(window).on('scroll', function () {  //显示楼梯
		let $scrolltop = $(window).scrollTop();
		if ($scrolltop >= 600) {
			$('.floor-guide').show()
		}
		else {
			$('.floor-guide').hide()
		}
		// $('title').html($scrolltop)
		$main = $('.floor');
		$main.each(function (index, value) { //滑动滚动条对应的侧边栏也发生变化
			let $floorsrcolltop = $main.eq(index).offset().top;
			if ($floorsrcolltop >= $scrolltop) {
				$floorli.removeClass('current')
				$floorli.eq(index).addClass('current')
				return false
			}
			$('.mui-nav a').on('click', function () {
				let $floortop = $main.eq($(this).index()).offset().top;
				$('html,body').animate({
					scrollTop: $floortop
				})
			})
		})



	})

	$('.mui-nav a').mouseover(function () { //楼梯的hover效果
		// $(this).addClass('current').siblings().removeClass('current')
		$(this).find('em').addClass('current').parent().siblings().find('em').removeClass('current')
	})


}(jQuery)