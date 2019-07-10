!function ($) {
    function goodslist(sid, cound) {
        $.ajax({
            url: 'http://localhost/yiguo/php/yiguo.php',
            dataType: 'json'
        }).done(function (y) {
            $.each(y, function (i, val) {
                if (sid == i) {
                    console.log(i)
                    var $clonebox = $('.cart-table tbody tr').hide().clone(true, true);
                    $clonebox.find('.cart-t-img').find('img').attr('src', val.url1);
                    $clonebox.find('.cart-t-info').find('a').html(val.title);
                    $clonebox.find('.cart-t-price').html(val.price);
                    $clonebox.find('.cart-t-num').find('.quantity-form').find('input').attr('value', cound)

                    //每个商品总价
                    $clonebox.find('.cart-t-total').find('span').html((val.price * cound).toFixed(2))
                    $clonebox.show()
                    $('.cart-table tbody').append($clonebox)
                }
            })
        })
    }

    if (getcookie('cookiesid') && getcookie('cookienum')) {
   // console.log(getcookie('cookiesid'))
        var s = getcookie('cookiesid').split(',');//数组sid
        var n = getcookie('cookienum').split(',');//数组num
        $.each(s, function (i, value) {
      goodslist(s[i], n[i]);
      
        });
    }   
}(jQuery)