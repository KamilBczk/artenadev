var tween = new TimelineMax()
.add(TweenMax.to("#addTranslate", 1, {className: "+=animated"}),"first")
.add(TweenMax.to("#addLetterSpacing", 1, {opacity: "0"}),"first")

var controller = new ScrollMagic.Controller();

// var animateElem = document.getElementById("picture");
new ScrollMagic.Scene({
    triggerElement: "#startTextAnimation",
    duration: 1000,
    triggerHook: 0
})
.setTween(tween)
.setPin("#setPin")
// .addIndicators()
.addTo(controller);
