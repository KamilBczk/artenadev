<!--
License : Artena Dev_ => https://artenadev.com

 █████╗ ██████╗ ████████╗███████╗███╗   ██╗ █████╗     ██████╗ ███████╗██╗   ██╗       
██╔══██╗██╔══██╗╚══██╔══╝██╔════╝████╗  ██║██╔══██╗    ██╔══██╗██╔════╝██║   ██║       
███████║██████╔╝   ██║   █████╗  ██╔██╗ ██║███████║    ██║  ██║█████╗  ██║   ██║       
██╔══██║██╔══██╗   ██║   ██╔══╝  ██║╚██╗██║██╔══██║    ██║  ██║██╔══╝  ╚██╗ ██╔╝       
██║  ██║██║  ██║   ██║   ███████╗██║ ╚████║██║  ██║    ██████╔╝███████╗ ╚████╔╝███████╗
╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝    ╚═════╝ ╚══════╝  ╚═══╝ ╚══════╝
-->
<?php

$url = explode('/', $_GET['url']);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <!-- META -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- CSS -->
    <link rel="stylesheet" href="/assets/css/reset.css">
    <link rel="stylesheet" href="/assets/css/style.css">
    <!-- JS DEFER -->
    <script defer src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script defer src="/assets/js/header.js"></script>
    <script defer src="/assets/js/loader.js"></script>

    <!-- FONTS -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

</head>
<body class="loader">
    <?php //include_once "model/assets/loader.html"; ?>
    <?php include_once "model/assets/header.html"; ?>
    <?php include_once "vue/$url[0].html"; ?>
    <?php include_once "model/assets/footer.html"; ?>

</body>
</html>