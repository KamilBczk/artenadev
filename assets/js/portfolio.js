$(document).ready(function() {
    let pictures = $(".project-elem .portfolio-picture-to-anim");
    let onhover = $(".project-elem .on-hover");


    for (let index = 0; index < pictures.length; index++) {
        pictures[index].id = index;
        onhover[index].id = index;
    }

    $(".on-hover")
    .mouseenter(function() {
        var id = $(this).attr("id");
        $(".project-elem .portfolio-picture-to-anim#"+id).addClass("anim");
    })
    .mouseleave(function() {
        pictures.removeClass("anim");
    })

    var controller = new ScrollMagic.Controller();

    var firstTween = new TimelineMax()
    .add(TweenMax.to("#portfolio", 1, {backgroundColor: "#156165"}),"first")
    
    new ScrollMagic.Scene({
        triggerElement: "#start-bg-anim",
        duration: 3200,
    })
    .setTween(firstTween)
    // .addIndicators()
    .addTo(controller);


    // loader
    setTimeout(() => {
        $(".title").addClass("anim");
        $(".textillateFadeInf").textillate({
            in: {
                effect: 'fadeInUp'
            }
        });
        setTimeout(() => {
            $(".textillateDef").textillate({
                in: {
                    effect: "fadeIn",
                    delay: 50
                }
            });  
            $("body").removeClass("loader-active");
        }, 550);
    }, 1500);
})