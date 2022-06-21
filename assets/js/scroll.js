var controller = new ScrollMagic.Controller();

// var animateElem = document.getElementById("picture");
new ScrollMagic.Scene({
    triggerElement: "#startTextAnimation",
    duration: 1800,
    triggerHook: 0
})
.setTween("#setStyle", {transform: "translate3d(60%, 0, 0)"})
.setPin("#setPin")
.addIndicators()
.addTo(controller);
