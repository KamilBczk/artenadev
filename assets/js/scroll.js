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

