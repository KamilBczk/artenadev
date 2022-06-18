$(document).ready(function () {
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
        $('body').removeClass("loader");
    }, 500);
});