<?php
die('test');
if (mail("undeath00zon@gmail.com", "Test Ajax", $_REQUEST["fio"] . " " . $_REQUEST["phone"]))
    echo "1";
else {
    echo "0";
}  
?>  