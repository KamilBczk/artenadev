$(document).ready(function () {
    
    // Scroll
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        var oldscroll = $(".scroll-info").val();

        if (scroll >= 100) {
            if (scroll > oldscroll) {
                $(".header").addClass("header-hide");
                $(".header").removeClass("header-show");
            } else {
                $(".header").addClass("header-show");
                $(".header").removeClass("header-hide");
            }
            $(".header").addClass("header-minified");
        } else {
                $(".header").removeClass("header-show");
                $(".header").removeClass("header-hide");
                $(".header").removeClass("header-minified");
        }
        $(".scroll-info").val(scroll);
    })
   

    // Theme
    $(".header-theme svg").click(function () {
        $(this).toggleClass("light");
        $("body").toggleClass("light-theme");
    });
});