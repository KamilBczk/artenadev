$(document).ready(function () {


    var controller = new ScrollMagic.Controller();

    var aTween = new TimelineMax()
    .add(TweenMax.to("#blow1", 1, {opacity: 1}),"first")
    var bTween = new TimelineMax()
    .add(TweenMax.to("#blow2", 1, {opacity: 1}),"first")
    var cTween = new TimelineMax()
    .add(TweenMax.to("#blow3", 1, {opacity: 1}),"first")
    var dTween = new TimelineMax()
    .add(TweenMax.to("#blow4", 1, {opacity: 1}),"first")
    var eTween = new TimelineMax()
    .add(TweenMax.to("#blow5", 1, {opacity: 1}),"first")
    
    new ScrollMagic.Scene({triggerElement: "#blow1", duration: 200, triggerHook: 0.9})
    .setTween(aTween)
    .addIndicators()
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#blow2", duration: 300, triggerHook: 0.7})
    .setTween(bTween)
    .addIndicators()
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#blow3", duration: 300, triggerHook: 0.4})
    .setTween(cTween)
    .addIndicators()
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#blow4", duration: 300, triggerHook: 0.5})
    .setTween(dTween)
    .addIndicators()
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#blow5", duration: 300, triggerHook: 0.4})
    .setTween(eTween)
    .addIndicators()
    .addTo(controller);


    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

    gsap.to("#point", {
        scrollTrigger: {
            trigger: "#start-path-anim",
            scrub: 1,
        },
        duration: 1, 
        ease: "power1.inOut",
        motionPath:{
            path: "#path",
            align: "#path",
            alignOrigin: [.5, .5],
            start: 0,
            end: 1,
            offsetX: 0,
            offsetY: 0,
        },
    });









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
});