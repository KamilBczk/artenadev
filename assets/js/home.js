// Parallax
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

const jsonData = fetch("/assets/json/categories.json")
.then(response => {
    return response.json();
})
.then(jsondata => datas = jsondata);

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
            changeText(parseInt($(this).attr("id")))   
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
        let title = $(".categories-desc-title");
        let par = $(".categories-desc-par")
        title.addClass("animation");
        par.addClass("animation");
        setTimeout(() => {
            $(".categories-desc-number p").text("0" + (number+1) + ".");
            $(".categories-desc-title h3").text(datas[number][0]);
            $(".categories-desc-par p").text(datas[number][1]);
            setTimeout(() => {
                title.removeClass("animation");
                par.removeClass("animation");
            }, 330);
        }, 330);
        console.log(number);
    }


    // loader
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
    }, 1500);

    var controller = new ScrollMagic.Controller();

    var firstTween = new TimelineMax()
    .add(TweenMax.to("#addTranslate", 1, {className: "+=animated"}),"first")
    .add(TweenMax.to("#addLetterSpacing", 1, {opacity: "0"}),"first")
    new ScrollMagic.Scene({
        triggerElement: "#startTextAnimation",
        duration: 1000,
        triggerHook: 0
    })
    .setTween(firstTween)
    .setPin("#setPin")
    // .addIndicators()
    .addTo(controller);

    var secondTween = new TimelineMax()
    .add(TweenMax.to("#animTranslate", 1, {left: "70%"}), "first")
    // .add(TweenMax.to("#animTranslate", 1, {transform: "rotate(15deg)"}), "first");

    new ScrollMagic.Scene({
        triggerElement: "#startPhoneAnimation",
        duration: 500,
    })
    .setTween(secondTween)
    // .addIndicators()
    .addTo(controller);

})