; !function ($) {
    const $Input = $('.fl p input')
    const $Tj = $('#PhoneReg');
    const $Span = $('.fl p .span');
    let falg = true, yhfalg = true, mmfalg = true, qrmmfalg = true, emailfalg = true, tjfalg = true;
    console.log($Input)
    console.log($Span)
    // alert($Span[0].innerHTML)
    // console.log($Input.eq(0).val())
    $Input.eq(0).blur(function () {
        ajax({
            type: 'post',
            url: 'http://10.31.158.17/yiguo/php/conn.php',
            data: {
                name: $Input.eq(0).val()
            }
        }).then(function (y) {
            if (!y) {
                $Span.eq(0).html('✔');
                $Span.eq(0).css({
                    color: 'grenn'
                })
                falg = true
            }
            else {
                $Span.eq(0).html('该用户名已经存在');
                $Span.eq(0).css({
                    color: 'red'
                })
                falg = false
            }
        })
    })
    $Input.eq(0).focus(function () {  //验证用户名
        if ($Input.eq(0).val() == '') {
            $Span.eq(0).html('请请输入用户名，用户名不能超过7个汉字或14个字符');
            $Span.eq(0).css({
                fontSize: 12,
                color: '#999'
            })
            yhfalg = false
        }
    }); 9
    $Input.eq(0).blur(function () {
        if ($Input.eq(0).val() != '') {
            var reg = /^[\u4e00-\u9fa5]+|[a-zA-Z]+$/; //用户名的正则

            if (reg.test($Input.eq(0).val())) {//匹配成功
                var len = $Input.val().replace(/[\u4e00-\u9fa5]/g, 'bb').length;
                if (len <= 14) {
                    $Span.eq(0).html('✔')
                    $Span.eq(0).css({
                        color: 'green'
                    })
                    yhfalg = true
                }
                else {
                    $Span.eq(0).html('用户名不能超过7个汉字或14个字符')
                    $Span.eq(0).css({
                        color: 'red'
                    })
                    yhfalg = false
                }


            } else {//报错
                $Span.eq(0).html('你输入的用户名有误')
                $Span.eq(0).css({
                    color: 'red'
                })
                yhfalg = false
            }
        } else {
            $Span.eq(0).html('请输入用户名')
            $Span.eq(0).css({
                color: 'red'
            })
            yhfalg = false
        }
    })


    //验证密码
    $Input.eq(1).focus(function () {
        if ($Input.eq(1).val() == '') {
            $Span.eq(1).html('请输入密码，密码长度为6-20个字符'),
                $Span.eq(1).css({
                    fontSize: 12,
                    color: '#999'
                })
            mmfalg = false
        }
    })
    $Input.eq(1).blur(function () {
        if ($Input.eq(1).val() !== '') {
            if ($Input.eq(1).val().length >= 6 && $Input.eq(1).val().length <= 20) {
                $Span.eq(1).html('✔');
                $Span.eq(1).css({
                    color: 'green',
                })
                mmfalg = true
            }
            else {
                $Span.eq(1).html('输入的密码长度有误');
                $Span.eq(1).css({
                    color: 'red',
                })
                mmfalg = false
            }
        }
        else {
            $Span.eq(1).html('请输入密码');
            $Span.eq(1).css({
                color: 'red',
            })
            mmfalg = false
        }
    })



    // 验证密码是否一致
    $Input.eq(2).focus(function () {
        if ($Input.eq(2).val() == '') {
            $Span.eq(2).html('请确认密码'),
                $Span.eq(2).css({
                    fontSize: 12,
                    color: '#999'
                })
            qrmmfalg = false
        }
    })
    $Input.eq(2).blur(function () {
        if ($Input.eq(1).val() !== '') {
            if ($Input.eq(2).val() === $Input.eq(1).val()) {
                $Span.eq(2).html('✔');
                $Span.eq(2).css({
                    color: 'green'
                })
                qrmmfalg = true
            }
            else {
                $Span.eq(2).html('两次密码不一致');
                $Span.eq(2).css({
                    color: 'red'
                })
                qrmmfalg = false
            }
        }
        else {
            $Span.eq(2).html('请先设置密码')
            $Span.eq(2).css({
                color: 'red'
            })
            qrmmfalg = false
        }

    })


    //验证电子邮箱
    $Input.eq(3).focus(function () {
        if ($Input.eq(3).val() == '') {
            $Span.eq(3).html('请输入电子邮箱');
            $Span.eq(3).css({
                color: '#999'
            })
            emailfalg = false
        }
    })
    $Input.eq(3).blur(function () {
        if ($Input.eq(3).val() !== '') {
            var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if (reg.test($Input.eq(3).val())) {
                $Span.eq(3).html('✔');
                $Span.eq(3).css({
                    color: 'green'
                })
                emailfalg = true
            }
            else {
                $Span.eq(3).html('请输入正确的电子邮箱');
                $Span.eq(3).css({
                    color: 'red'
                })
                emailfalg = false
            }

        }
        else {
            $Span.eq(3).html('请输入电子邮箱');
            $Span.eq(3).css({
                color: 'red'
            })
            emailfalg = false
        }
    })

    //协议按钮
    $('#tab1chk').on('click', function () {
        if ($('#tab1chk').prop('checked')) {
            $Tj.css({
                background: 'green'
            })
            tjfalg = true
        }
        else {
            $Tj.css({
                background: 'grey'
            })
            tjfalg = false
        }
    })


    //检查所有填写的信息格式是否正确
    $Tj.on('click', function () {
        if ($Input.eq(0).val() == '') {
            $Span.eq(0).html('请输入用户名');
            $Span.eq(0).css({
                color: 'red',
            })
            yhfalg = false
        }
        if ($Input.eq(1).val() == '') {
            $Span.eq(1).html('请输入密码');
            $Span.eq(1).css({
                color: 'red',
            })
            mmfalg = false
        }
        if ($Input.eq(2).val() == '') {
            $Span.eq(2).html('请输入密码');
            $Span.eq(2).css({
                color: 'red',
            })
            qrmmfalg = false
        }
        if ($Input.eq(3).val() == '') {
            $Span.eq(3).html('请输入电子邮箱');
            $Span.eq(3).css({
                color: 'red',
            })
            emailfalg = false
        }
        if (!yhfalg || !mmfalg || !qrmmfalg || !emailfalg || !tjfalg || !falg) {
            return false
        }
        else {
            window. open('http://10.31.158.17/yiguo/src/login.html')
            ajax({ //填写的信息正确 把数据添加到数据库
                type: 'post',
                url: 'http://10.31.158.17/yiguo/php/conn.php',
                data: {
                    name: $Input.eq(0).val(),
                    pass: $Input.eq(1).val(),
                    email: $Input.eq(3).val()
                }
            })
            $Input.children().val('');
        }

    })


}(jQuery)