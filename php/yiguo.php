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


$res = $conn->query("select * from piclist");

$arr = array();
for ($i = 0; $i < $res -> num_rows; $i++) {
    $arr[$i] = $res -> fetch_assoc();
}
echo json_encode($arr);

