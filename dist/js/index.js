"use strict";!function(i){var o=i(".ban-slider li"),a=i(".b-dot ul li"),n=i(".arrows-btn a"),t=i(".prev"),s=i(".next"),l=0,e="";a.on("mouseover",function(){l=i(this).index(),i(this).addClass("on").siblings().removeClass("on"),o.eq(i(this).index()).show().siblings().hide()}),i(".banner-slider").hover(function(){n.css({opacity:.3,display:"inline"}),clearInterval(e)},function(){n.hide(),$timers=setInterval(function(){s.click()},3e3)}),t.on("click",function(){--l<0&&(l=1,a.eq(l).addClass("on").siblings().removeClass("on"),o.eq(l).show().siblings().hide()),a.eq(l).addClass("on").siblings().removeClass("on"),o.eq(l).show().siblings().hide()}),s.on("click",function(){1<++l&&(l=0,a.eq(0).addClass("on").siblings().removeClass("on"),o.eq(0).show().siblings().hide()),a.eq(l).addClass("on").siblings().removeClass("on"),o.eq(l).show().siblings().hide()}),e=setInterval(function(){s.click()},3e3)}(jQuery),function(i){var o=i(".catalogs-title"),a=i(".catalogs-list");o.on("click",function(){a.toggleClass("heid")}),a.find(".item").on("mouseover",function(){i(this).addClass("current"),i(this).find(".sub-item").show()}),a.find(".item").on("mouseout",function(){i(this).removeClass("current"),i(this).find(".sub-item").hide()})}(jQuery),function(o){var n=o(".f");o.ajax({url:"http://localhost/yiguo/php/yiguo.php",dataType:"json"}).done(function(i){var a="<div>";o.each(i,function(i,o){a+='\n\t\t\t<div class="floor wrap 01_channelhome clearfix loadfloor" id="t0'+i+'_channelhome" data-url="/Home/Floor?floorId=01_channelhome">\n<div class="floor-title ">\n    <h2><a href="javascript:;" target="_blank"><i>'+o.line+"</i>"+o.linetitle+'</a></h2>\n        <span class="keyword">\n                <a href="http://search.yiguo.com/?keyword=%e8%bf%9b%e5%8f%a3%e8%8b%b9%e6%9e%9c&amp;pageindex=1" target="_blank" class="">'+o.keyword+'</a>\n                <a href="http://www.yiguo.com/products/0101_qiyiguo.html#formCx" target="_blank" class="">'+o.keyword1+'</a>\n                <a href="http://search.yiguo.com/?keyword=%E6%B3%B0%E5%9B%BD" target="_blank" class="last">'+o.keyword2+'</a>\n        </span>\n</div>\n<div class="floor-con floor-layout2">\n            <div class="floor-side"><a href="javascript:;" target="_blank"><img src="'+o.thumb+'" width="275" height="463"></a></div>\n            <div class="floor-main">\n            <ul>\n                        <li><a href="http://localhost/yiguo/src/details.html?sid='+o.sid+'" target="_blank"><img class="lazy" data-original="'+o.url1+'" width="230" height="230"></a></li>\n                                        <li><a href="http://localhost/yiguo/src/details.html?sid='+o.sid+'" target="_blank"><img class="lazy" data-original="'+o.url2+'" width="230" height="230"></a></li>\n                                        <li class="wide"><a href="http://localhost/yiguo/src/details.html?sid='+o.sid+'" target="_blank"><img class="lazy" data-original="'+o.url3+'" width="461" height="230"></a></li>\n                                        <li class="wide"><a href="http://localhost/yiguo/src/details.html?sid='+o.sid+'" target="_blank"><img class="lazy" data-original="'+o.url4+'" width="461" height="230"></a></li>\n                                        <li><a href="http://localhost/yiguo/src/details.html?sid='+o.sid+'" target="_blank"><img class="lazy" data-original="'+o.url5+'" width="230" height="230"></a></li>\n                                        <li><a href="http://localhost/yiguo/src/details.html?sid='+o.sid+'" target="_blank"><img class="lazy" data-original="'+o.url6+'" width="230" height="230"></a></li>\n            </ul>\n        </div>\n</div>\n</div>'}),a+="</div>",n.html(a),o(function(){o("img.lazy").lazyload({effect:"fadeIn"})})})}(jQuery),function(i){i(".shopping-cart").hover(function(){i(".shopping-list").stop().show().animate({opacity:1},500)},function(){i(".shopping-list").stop().animate({opacity:0},500,function(){})}),0!=i(".totleNum b").html()?i(".goods").show():i(".goods").hide(),i(".myyiguo").hover(function(){i(this).find(".con").show()},function(){i(this).find(".con").hide()}),i(".mobile").hover(function(){i(this).find(".con").show()},function(){i(this).find(".con").hide()})}(jQuery),function(t){$floorli=t(".mui-nav a em"),t(window).on("scroll",function(){var n=t(window).scrollTop();600<=n?t(".floor-guide").show():t(".floor-guide").hide(),$main=t(".floor"),$main.each(function(i,o){var a=$main.eq(i).offset().top;if(n<=a)return $floorli.removeClass("current"),$floorli.eq(i).addClass("current"),!1;t(".mui-nav a").on("click",function(){var i=$main.eq(t(this).index()).offset().top;t("html,body").animate({scrollTop:i})})})}),t(".mui-nav a").mouseover(function(){t(this).find("em").addClass("current").parent().siblings().find("em").removeClass("current")})}(jQuery);