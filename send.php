<?php
echo "Принято! ";
$name = $_REQUEST["name"];
$tel = $_REQUEST["tel"];
echo($name . " ");
echo($tel);
if (mail("undeath0zon@gmail.com", "Test AJAX", $_REQUEST["fio"] . "  " . $_REQUEST["tel"]))
  echo "success";
else {
  echo "fail!";
}
?>