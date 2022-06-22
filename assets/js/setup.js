$(document).ready(function () {
    // Categories active
    const elements = $(".categories-elem h1");
    for (let index = 0; index < elements.length; index++) {
        elements[index].id = index;
    }

    $(".categories-elem h1").click(function() {
        if (!($(this).hasClass("active"))) {
            $(".categories-elem h1").removeClass("active");
            $(this).addClass("active");
            changeText($(this).attr("id"))   
        }
    })

    $(".categories-desc-nav span").click(function() {
        let activeid = parseInt($(".categories-elem h1.active").attr("id")) + 1;
        $(".categories-elem h1").removeClass("active");
        if ($(this).hasClass("arrow-left")) {
            activeid--;
            if (activeid == 0) {
                activeid = 4;
            }
        }
        if ($(this).hasClass("arrow-right")) {
            activeid++;
            if (activeid == 5) {
                activeid = 1;
            }
        }
        $(".categories .categories-border:nth-child("+activeid+") h1").addClass("active");
        changeText(activeid - 1)
    })

    function changeText(number) {
        console.log(number);
    }
    
    // AOS
    AOS.init();

    // Parallax
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
});