!function ($) {
    //渲染效果
    class Details {
        constructor() {
            this.$sid = location.search.substring(1).split('=')[1];
            const $floor = $('.pic-thumb');
            this.$Xpic = $('.pic-big img');
            this.$Xbox = $('.pic-big');
            this.$Xf = $('.Xf');
            this.$Dpic = $('.Dpic');
            this.$Df = $('.Df');
            this.$title = $('.summary-name h1');
            this.$price = $('.pro-price span strong')
            this.$limove = $('.picList ul')
            this.$decr = $('.decrease')
            this.$incr = $('.increase')
            this.$disabled = $('.disabled')
            this.$popup = $('.popout-con')
            this.$keep = $('.popout-con .keep');
            this.$lookcart = $('.popout-con .button');
        }
        init() {

            let _this = this;
            let $num = 1
            $.ajax({
                url: 'http://10.31.158.17/yiguo/php/details.php',
                data: {
                    picid: _this.$sid

                },
                dataType: 'json',
            }).done(function (y) {
                _this.$title.html(y.title);
                _this.$price.html(y.price);
                _this.$Dpic.attr('src', y.url1)
                _this.$Xpic.attr('src', y.url1)
                _this.$picli(y)
            })

            //放大镜
            this.$Xbox.on('mouseover', function () {
                _this.$show()
                _this.$Xbox.on('mousemove', function (ev) {
                    var ev = ev || window.event;
                    _this.$move(ev)
                })
            })
            this.$Xbox.on('mouseout', function () {
                _this.$hide()
            })

            // this.$limove.on('mouseover', function (ev) {
            //     var ev=ev||window.event;
            //     let ele=ev.target||ev.srcElement;
            //     if(ele.parentNode.nodeName=='LI'){
            //         let imgurl=
            //     }
            // })

            this.$decr.on('click', function () { //数量的减
                $num--;
                if ($num <= 0) {
                    $num = ''
                }
                $('#p_number').attr('value', $num)
                if ($('#p_number').attr('value') <= 0) {
                    _this.$disabled.find('a').css({
                        background: '#757575'
                    })
                }
            })
            this.$incr.on('click', function () {  //数量加
                $num++
                $('#p_number').attr('value', $num)
                if ($('#p_number').attr('value') > 0) {
                    _this.$disabled.find('a').css({
                        background: 'none'
                    })
                }
            })
            this.$disabled.on('click', function () {  //显示弹窗
                if ($('#p_number').attr('value') > 0) {
                    _this.$popup.show()
                    _this.$cookie();
                    // _this.$cookievalue();
                }
            })


            this.$keep.on('click', function () {  //点击确认继续购物关闭弹窗
                _this.$popup.hide()
            })

            this.$lookcart.on('click', function () {
                $(window).attr('location', 'http://10.31.158.17/yiguo/src/cart.html');
            })
        }



        $show() {  //划过显示
            this.$Xf.show();
            this.$Df.show()
        }
        $hide() { //划出消失
            this.$Xf.hide();
            this.$Df.hide()
        }

        $move(ev) {
            let $bili = this.$Dpic.width() / this.$Xpic.width();

            //小放大镜的尺寸
            this.$Xf.css({
                width: this.$Xpic.width() * this.$Df.width() / this.$Dpic.width(),
            })
            this.$Xf.css({
                height: this.$Xpic.height() * this.$Df.height() / this.$Dpic.height(),
            })


            //移动和限定范围
            let $l = ev.pageX - this.$Xpic.offset().left - this.$Xf.width() / 2;
            let $t = ev.pageY - this.$Xpic.offset().top - this.$Xf.height() / 2;
            if ($l > this.$Xpic.width() - this.$Xf.width()) {
                $l = this.$Xpic.width() - this.$Xf.width()
            }
            if ($l < 0) {
                $l = 0
            }
            if ($t > this.$Xpic.height() - this.$Xf.height()) {
                $t = this.$Xpic.height() - this.$Xf.height()
            }
            if ($t < 0) {
                $t = 0
            }
            this.$Xf.css({
                left: $l + 'px',
            })
            this.$Xf.css({
                top: $t + 'px',
            })
            this.$Dpic.css({
                left: -$l * $bili + 'px'
            })
            this.$Dpic.css({
                top: -$t * $bili + 'px'
            })
        }

        $picli(y) {
            let $lilist = '';
            let $ullist = y.urls.split(',');
            // console.log($ullist)
            $.each($ullist, function (i, val) {
                // console.log(i)
                // console.log(val)
                $lilist += '<li><img width="85" height="85"src="' + val + '"></li>';
            })
            $('.picList ul').html($lilist)
        }
        // cookie存在转换为数组
        // $cookievalue() {

        // }

        //
        $cookie() {
            let $sid = location.search.substring(1).split('=')[1];
            let $arrsid = [];
            let $arrnum = [];
            if (getcookie('cookiesid') && getcookie('cookienum')) { // cookie存在转换为数组
            //    alert(1)
                $arrsid = getcookie('cookiesid').split(',')
                $arrnum = getcookie('cookienum').split(',')
            }
            // console.log($arrnum)

            //获取当前按钮的sid和input里面的值
            if ($.inArray($sid, $arrsid) === -1) {//不存在
                //alert(1)// this.$cookievalue()
                $arrsid.push($sid);
                $arrnum.push($('#p_number').val());
                //console.log(arrsid);
                //console.log(arrnum);
                setcookie('cookiesid', $arrsid.toString(), 7);
                setcookie('cookienum', $arrnum.toString(), 7);
            } else {//存在的话就给arrsum累加
                let num = parseInt($arrnum[$.inArray($sid, $arrsid)]) + parseInt($('#p_number').val());
                $arrnum[$.inArray($sid, $arrsid)] = num;
                setcookie('cookienum', $arrnum.toString(), 7);
            }
            // console.log($arrnum)
        }
    }
    new Details().init();
}(jQuery);