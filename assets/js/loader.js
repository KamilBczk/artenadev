$(document).ready(function () {
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

    setTimeout(() => {
        $(".textillateFadeInf").textillate({
            in: {
                effect: 'fadeInUp'
            }
        });
        setTimeout(() => {
            $(".textillateFadeIns").textillate({
                in: {
                    effect: 'fadeInUp',
                }
            });
            setTimeout(() => {
                $(".textillateDef").textillate({
                    in: {
                        effect: "fadeIn",
                        delay: 10
                    }
                });
                $("#sep_anim").addClass("animated");
                $(".two-circle-basic-animation").addClass("animated");
                setTimeout(() => {
                    $(".picture-preview-show-animation").addClass("animated");
                    $("body").removeClass("loader-active");
                }, 600)
            }, 400);
        }, 400);
    }, 700);

});
