<?php

$url = "";
if(isset($_GET['url'])) {
    $url = explode('/', $_GET['url']);
}

if ($url === "") {
    header('Location: /home');
} elseif ($url[0] === "home") {
    include_once "model/model.php";
} else {
    echo "404";
}

?>