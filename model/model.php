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
    <title>Artena Dev_  |  Home</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" sizes="128x128" href="/favicon.png">
    <!-- CSS -->
    <link rel="stylesheet" href="/assets/css/reset.css">
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"> <!-- AOS -->
    <link rel="stylesheet" href="http://textillate.js.org/assets/animate.css">
    <!-- JS DEFER -->
    <script defer src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script defer src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script defer src="/assets/js/parallax.js"></script>
    <script src="https://kit.fontawesome.com/1dda56443c.js" crossorigin="anonymous"></script>
    <script defer src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
    <script defer src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/lettering.js/0.7.0/jquery.lettering.min.js"></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/textillate/0.4.0/jquery.textillate.min.js"></script>
    <script defer src="/assets/js/countup.js"></script>
    <script defer src="/assets/js/header.js"></script>
    <script defer src="/assets/js/loader.js"></script>
    <script defer src="/assets/js/setup.js"></script>
    <script defer src="/assets/js/<?=$url[0]?>.js"></script>

    <!-- FONTS -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

</head>
<body class="loader-active">
    <?php include_once "model/assets/loader.html"; ?>
    <?php include_once "model/assets/header.php"; ?>
    <?php include_once "vue/$url[0].html"; ?>
    <?php include_once "model/assets/footer.html"; ?>

</body>
</html>