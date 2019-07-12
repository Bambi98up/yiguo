<?php

require "conn.php";

if (isset($_GET['picid'])) {
    $sid = $_GET['picid'];
    $res = $conn->query("select*from piclist where sid='$sid'");

    echo json_encode($res->fetch_assoc());
}
