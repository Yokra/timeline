window.addEventListener("load", loadSVG);

function loadSVG() {
  //console.log("load the svg");

  fetch("timeline.svg")
    .then(res => res.text())
    .then(svgdata => {
      console.log(svgdata);
      document
        .querySelector("#timeline")
        .insertAdjacentHTML("afterbegin", svgdata);
    });
}
