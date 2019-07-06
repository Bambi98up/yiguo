<?php
header('content-type:text/html;charset=utf-8'); //设置编码;

define('HOST', 'localhost');
define('UASRNAME', 'root');
define('PASS', '');
define('DATABASE', 'yiguo');

$conn = @new mysqli(HOST, UASRNAME, PASS, DATABASE); //数据库的连接

//数据库连接失败提示
if ($conn->connect_error) {
    die('数据库连接失败:' . $conn->connect_error);
}

$conn->query('SET NAMES UTF8');
//操作数据库
//拿到前端的数据来与数据库进行匹配 查看是否存在
if (isset($_POST['name'])) {
    $name = $_POST['name'];
    $res = $conn->query("select * from user where username='$name'");
    if ($res->fetch_assoc()) {
        echo true;
    } else {
        echo false;
    }
}

if (isset($_POST['name']) && isset($_POST['pass'])&& isset($_POST['email'])) { //将前端的数据拿来
    $name = $_POST['name'];
    $pass = sha1($_POST['pass']);
    $email = $_POST['email'];
    $conn->query("insert user value(null,'$name','$pass','$email',NOW())"); //存入数据库
}
