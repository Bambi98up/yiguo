; !function ($) {
    const $name = $('#UserName');
    const $pass = $('#Pwd');
    const $login = $('#btnLogin')
    const $wrap = $('#msg-wrap');
    const $checked = $('#UserNameRemeber')
    $login.on('click', function () {
        $.ajax({
            type: 'post',
            url: 'http://10.31.158.17/yiguo/php/conn.php',
            data: {
                username: $name.val(),
                userpass: $pass.val()
            }
        }).done(function (y) {
            if (!y) { //登录不匹配时提示
                $wrap.find('div').addClass('msg-error').html('账号或密码输入错误')
            }
            else { //匹配时跳转登录页面 把数据存入本地存储
                window.open('http://10.31.158.17/yiguo/src/yiguo.html');
                localStorage.setItem('user', $name.val())
                localStorage.setItem('pass', $pass.val())
            }
        })

        //还未完成!!!
        // if ($checked.prop("checked")) {
        //     $name.html("localStorage.getItem('key')");
        //     $pass.html("localStorage.getItem('Value')")
        // }
    })

}(jQuery)