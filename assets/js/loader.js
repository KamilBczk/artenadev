$(document).ready(function () {
    let loader = true;

    if (loader == true) {
        window.scrollTo(0, 0);
        $(".loader .top-logo").addClass("top-is-animating");
        $(".loader .bottom-logo").addClass("bot-is-animating");
        setTimeout(() => {
            $(".loader .top-logo").addClass("top-is-animated");
            $(".loader .top-logo").removeClass("top-is-animating");

            $(".loader .bottom-logo").addClass("bot-is-animated");
            $(".loader .bottom-logo").removeClass("bot-is-animating");
        }, 330);
        setTimeout(() => {
            $(".loader").addClass("loader-animating");
        }, 500);
    } else {
        $(".loader").css({"display" : "none"});
        $("body").removeClass("loader-active");
    }

});
