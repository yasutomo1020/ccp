import anime from "animejs";

var elem = document.getElementById("elem");
elem.addEventListener("click", function () {
  anime({
    targets: elem,
    translateX: 250,
  });
});
