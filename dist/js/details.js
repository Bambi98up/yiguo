"use strict";var _createClass=function(){function s(i,t){for(var e=0;e<t.length;e++){var s=t[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(i,s.key,s)}}return function(i,t,e){return t&&s(i.prototype,t),e&&s(i,e),i}}();function _classCallCheck(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}!function(o){function i(){_classCallCheck(this,i),this.$sid=location.search.substring(1).split("=")[1];o(".pic-thumb");this.$Xpic=o(".pic-big img"),this.$Xbox=o(".pic-big"),this.$Xf=o(".Xf"),this.$Dpic=o(".Dpic"),this.$Df=o(".Df"),this.$title=o(".summary-name h1"),this.$price=o(".pro-price span strong"),this.$limove=o(".picList ul"),this.$decr=o(".decrease"),this.$incr=o(".increase"),this.$disabled=o(".disabled"),this.$popup=o(".popout-con"),this.$keep=o(".popout-con .keep"),this.$lookcart=o(".popout-con .button")}(new(_createClass(i,[{key:"init",value:function(){var t=this,i=1;o.ajax({url:"http://10.31.158.17/yiguo/php/details.php",data:{picid:t.$sid},dataType:"json"}).done(function(i){t.$title.html(i.title),t.$price.html(i.price),t.$Dpic.attr("src",i.url1),t.$Xpic.attr("src",i.url1),t.$picli(i)}),this.$Xbox.on("mouseover",function(){t.$show(),t.$Xbox.on("mousemove",function(i){i=i||window.event,t.$move(i)})}),this.$Xbox.on("mouseout",function(){t.$hide()}),this.$decr.on("click",function(){--i<=0&&(i=""),o("#p_number").attr("value",i),o("#p_number").attr("value")<=0&&t.$disabled.find("a").css({background:"#757575"})}),this.$incr.on("click",function(){i++,o("#p_number").attr("value",i),0<o("#p_number").attr("value")&&t.$disabled.find("a").css({background:"none"})}),this.$disabled.on("click",function(){0<o("#p_number").attr("value")&&(t.$popup.show(),t.$cookie())}),this.$keep.on("click",function(){t.$popup.hide()}),this.$lookcart.on("click",function(){o(window).attr("location","http://10.31.158.17/yiguo/src/cart.html")})}},{key:"$show",value:function(){this.$Xf.show(),this.$Df.show()}},{key:"$hide",value:function(){this.$Xf.hide(),this.$Df.hide()}},{key:"$move",value:function(i){var t=this.$Dpic.width()/this.$Xpic.width();this.$Xf.css({width:this.$Xpic.width()*this.$Df.width()/this.$Dpic.width()}),this.$Xf.css({height:this.$Xpic.height()*this.$Df.height()/this.$Dpic.height()});var e=i.pageX-this.$Xpic.offset().left-this.$Xf.width()/2,s=i.pageY-this.$Xpic.offset().top-this.$Xf.height()/2;e>this.$Xpic.width()-this.$Xf.width()&&(e=this.$Xpic.width()-this.$Xf.width()),e<0&&(e=0),s>this.$Xpic.height()-this.$Xf.height()&&(s=this.$Xpic.height()-this.$Xf.height()),s<0&&(s=0),this.$Xf.css({left:e+"px"}),this.$Xf.css({top:s+"px"}),this.$Dpic.css({left:-e*t+"px"}),this.$Dpic.css({top:-s*t+"px"})}},{key:"$picli",value:function(i){var e="",t=i.urls.split(",");o.each(t,function(i,t){e+='<li><img width="85" height="85"src="'+t+'"></li>'}),o(".picList ul").html(e)}},{key:"$cookie",value:function(){var i=location.search.substring(1).split("=")[1],t=[],e=[];if(getcookie("cookiesid")&&getcookie("cookienum")&&(t=getcookie("cookiesid").split(","),e=getcookie("cookienum").split(",")),-1===o.inArray(i,t))t.push(i),e.push(o("#p_number").val()),setcookie("cookiesid",t.toString(),7),setcookie("cookienum",e.toString(),7);else{var s=parseInt(e[o.inArray(i,t)])+parseInt(o("#p_number").val());e[o.inArray(i,t)]=s,setcookie("cookienum",e.toString(),7)}}}]),i)).init()}(jQuery);