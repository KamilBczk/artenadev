$(document).ready(function () {
    let loader = false;

    if (loader == true) {
        window.scrollTo(0, 0);
        setTimeout(() => {
            $(".loader .top-logo").addClass("top-is-animating");
            $(".loader .bottom-logo").addClass("bot-is-animating");
            setTimeout(() => {
                $(".loader .top-logo").addClass("top-is-animated");
                $(".loader .top-logo").removeClass("top-is-animating");
    
                $(".loader .bottom-logo").addClass("bot-is-animated");
                $(".loader .bottom-logo").removeClass("bot-is-animating");
                setTimeout(() => {
                    $(".loader").addClass("loader-animating");
                }, 330);
            }, 330);
        }, 330);
    } else {
        $(".loader").css({"display" : "none"});
        $("body").removeClass("loader-active");
    }

    var links= document.getElementsByTagName("a");

    for (var i=0;i<links.length;i++){
        links[i].addEventListener("click",function(e){
            $(".loader .top-logo").removeClass("top-is-animating");
            $(".loader .bottom-logo").removeClass("bot-is-animating");
            $(".loader .top-logo").removeClass("top-is-animated");
            $(".loader .bottom-logo").removeClass("bot-is-animated");
            $(".loader").removeClass("loader-animating");
            e.preventDefault();
        });
    }

    $("a").click(function () {
        setTimeout(() => {
            window.location.replace($(this).attr("href"));
        }, 330);
    })

});
