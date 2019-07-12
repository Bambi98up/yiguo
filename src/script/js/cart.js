!function ($) {
    function goodslist(id, cound) {
        $.ajax({
            url: 'http://10.31.158.17/yiguo/php/yiguo.php',
            dataType: 'json'
        }).done(function (y) {
            $.each(y, function (i, val) {
                if (id == val.sid) {
                    var $clonebox = $('.going tbody tr').hide().clone(true, true);
                    $clonebox.find('.cart-t-img').find('img').attr('src', val.url1);
                    $clonebox.find('.cart-t-info').find('a').html(val.title);
                    $clonebox.find('.carts-t-price').html(val.price);
                    $clonebox.find('.cart-t-num').find('.quantity-form').find('input').attr('value', cound)

                    //每个商品总价
                    $clonebox.find('.cart-t-total').find('span').html((val.price * cound).toFixed(2))
                    $clonebox.show()
                    $('.going tbody').append($clonebox)


                    //商品加
                    $('.increment').on('click', function () {
                        var $num = $(this).parents('.cart-t-num').find('.quantity-form input').val();//值
                        $num++;
                        if ($num >= 99) {
                            $num = 99;
                        }
                        $(this).parents('.cart-t-num').find('.quantity-form input').val($num);//赋值回去
                        //$(this).parents('.cart-t-num').find('.b-sum').find('strong').html(singlegoodsprice($(this)));//改变后的价格
                        $(this).parents('.cart-t-num').nextAll('.cart-t-total').find('span').html(($num * val.price).toFixed(2))
                        // console.log($('.span').html())
                        // console.log($count)
                        //priceall();//重新计算总和。
                        setcookie('cookienum', $num.toString(), 7);//将改变的数量重新添加到cookie
                    });

                    //商品减
                    $('.decrement').on('click', function () {
                        var $num = $(this).parents('.cart-t-num').find('.quantity-form input').val();
                        $count--;
                        if ($num <= 1) {
                            $num = 1;
                        }
                        $(this).parents('.cart-t-num').find('.quantity-form input').val($num);

                        $(this).parents('.cart-t-num').nextAll('.cart-t-total').find('span').html(($num * val.price).toFixed(2))//$(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));//改变后的价格
                        //priceall();
                        setcookie('cookienum', $num.toString(), 7);
                    });
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


    $(function () {
        const $all = $('.select');//定义的jquery变量，自己约定前面添加一个$符号。
        const $inputs = $('.input');//获取所有的input，除了包含.chkAll类的input.
        $all.on('click', function () {
            if ($all.prop('checked')) {//复选框选中
                $inputs.parents('.cart-list').find('.input').prop('checked', true);
            } else {//复选框没有选中
                $inputs.parents('.cart-list').find('.input').prop('checked', false);//赋值无效
            }
        });
        $inputs.on('click', function () {//change
            if ($inputs.size() === $('input:checked').not('.select').length) {//当前添加事件的input的长度===选中的长度   全选勾上
                $all.prop('checked', true);
            } else {
                $all.prop('checked', false);
            }
        });
    });



    if (getcookie('cookiesid') && getcookie('cookienum')) {
        $('.cart-none').hide();//cookie存在，隐藏盒子。
        $('.store').show()//显示商品
    } else {
        $('.store').hide()
        $('.cart-none').show();
    }

    $('.cls').on('click', function () { //点击清空购物车弹出提示框
        $('.popout-con').show()
    })

    $('.keep').on('click', function () {  //提示框点击确定清空购物车
        delcookie('cookiesid'); //删除cookie
        $('.going tbody tr').parents('.cart-alert').find('.cart-table').find('tr').remove();
        $('.store').hide()
        $('.cart-none').show()
    })

    if (localStorage.getItem('user')) {
        $('._notlogin').hide()
    }


    //删除单个购物车商品
    $('.del').parents('.cart-list').find('td').find('.del').on('click', function () {
        $(this).parents('.going tr').remove()
    })

    //商品总价
    $allprice = $('.cart-list tr').children('td .span').val()
    $('.fs14 span').html()

}(jQuery)