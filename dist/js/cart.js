"use strict";!function(c){if(getcookie("cookiesid")&&getcookie("cookienum")){var i=getcookie("cookiesid").split(","),o=getcookie("cookienum").split(",");c.each(i,function(t,n){!function(o,e){c.ajax({url:"http://10.31.158.17/yiguo/php/yiguo.php",dataType:"json"}).done(function(t){c.each(t,function(t,n){if(o==n.sid){var i=c(".going tbody tr").hide().clone(!0,!0);i.find(".cart-t-img").find("img").attr("src",n.url1),i.find(".cart-t-info").find("a").html(n.title),i.find(".carts-t-price").html(n.price),i.find(".cart-t-num").find(".quantity-form").find("input").attr("value",e),i.find(".cart-t-total").find("span").html((n.price*e).toFixed(2)),i.show(),c(".going tbody").append(i),c(".increment").on("click",function(){var t=c(this).parents(".cart-t-num").find(".quantity-form input").val();99<=++t&&(t=99),c(this).parents(".cart-t-num").find(".quantity-form input").val(t),c(this).parents(".cart-t-num").nextAll(".cart-t-total").find("span").html((t*n.price).toFixed(2)),setcookie("cookienum",t.toString(),7)}),c(".decrement").on("click",function(){var t=c(this).parents(".cart-t-num").find(".quantity-form input").val();$count--,t<=1&&(t=1),c(this).parents(".cart-t-num").find(".quantity-form input").val(t),c(this).parents(".cart-t-num").nextAll(".cart-t-total").find("span").html((t*n.price).toFixed(2)),setcookie("cookienum",t.toString(),7)})}})})}(i[t],o[t])})}c(function(){var t=c(".select"),n=c(".input");t.on("click",function(){t.prop("checked")?n.parents(".cart-list").find(".input").prop("checked",!0):n.parents(".cart-list").find(".input").prop("checked",!1)}),n.on("click",function(){n.size()===c("input:checked").not(".select").length?t.prop("checked",!0):t.prop("checked",!1)})}),getcookie("cookiesid")&&getcookie("cookienum")?(c(".cart-none").hide(),c(".store").show()):(c(".store").hide(),c(".cart-none").show()),c(".cls").on("click",function(){c(".popout-con").show()}),c(".keep").on("click",function(){delcookie("cookiesid"),c(".going tbody tr").parents(".cart-alert").find(".cart-table").find("tr").remove(),c(".store").hide(),c(".cart-none").show()}),localStorage.getItem("user")&&c("._notlogin").hide(),c(".del").parents(".cart-list").find("td").find(".del").on("click",function(){c(this).parents(".going tr").remove()}),$allprice=c(".cart-list tr").children("td .span").val(),c(".fs14 span").html()}(jQuery);