var controller = new ScrollMagic.Controller();

// var animateElem = document.getElementById("picture");
new ScrollMagic.Scene({
    triggerElement: "#animation-text",
    duration: 1800,
    triggerHook: 0
})
.setTween("#test", {transform: "scale(1)"})
.setPin("#fifth-home-wrapper")
.addIndicators()
.addTo(controller);
