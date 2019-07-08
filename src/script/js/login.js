; !function ($) {
    const $name = $('#UserName');
    const $pass = $('#Pwd');
    const $login = $('#btnLogin')
    const $wrap = $('#msg-wrap');
    const $checked = $('#UserNameRemeber')
    $login.on('click', function () {
        $.ajax({
            type: 'post',
            url: 'http://localhost/yiguo/php/conn.php',
            data: {
                username: $name.val(),
                userpass: $pass.val()
            }
        }).done(function (y) {
            if (!y) { //
                $wrap.find('div').addClass('msg-error').html('账号或密码输入错误')
            }
            else {
                window.open('http://localhost/yiguo/src/yiguo.html');
                localStorage.setItem($name.val(), $pass.val())
            }
        })

        //还未完成!!!
        if ($checked.prop("checked")) {
            $name.html("localStorage.getItem('key')");
            $pass.html("localStorage.getItem('Value')")
        }
    })

}(jQuery)