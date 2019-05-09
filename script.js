window.addEventListener("load", loadSVG);

function loadSVG() {
  //console.log("load the svg");

  fetch("timeline.svg")
    .then(res => res.text())
    .then(svgdata => {
      console.log(svgdata);
      document.querySelector("main").insertAdjacentHTML("afterend", svgdata);
      const textList = document.querySelectorAll(".textMovie");
      console.log(textList);
      textList.forEach(hideText);
      const yearArrey = document.querySelectorAll(".click");
      console.log(yearArrey);

      yearArrey.forEach(year => {
        console.log(year);
        year.addEventListener("click", yearClicked);
      });
    });
}

function hideText(text) {
  text.classList.add("hide");
  console.log(text);
}

function yearClicked(event) {
  console.log(event.target.innerHTML === "1966");

  if (event.target.innerHTML === "1966") {
    document.querySelector("#BatmanTheMovie").classList.remove("hide");
  }
  if (event.target.innerHTML === "1989") {
    document.querySelector("#Batman").classList.remove("hide");
  }
  if (event.target.innerHTML === "1992") {
    document.querySelector("#BatmanReturns").classList.remove("hide");
  }
  if (event.target.innerHTML === "1995") {
    document.querySelector("#BatmanForever").classList.remove("hide");
  }
  if (event.target.innerHTML === "1997") {
    document.querySelector("#BatmanAndRobin").classList.remove("hide");
  }
  if (event.target.innerHTML === "2005") {
    document.querySelector("#BatmanBegins").classList.remove("hide");
  }
  if (event.target.innerHTML === "2008") {
    document.querySelector("#TheDarkNight").classList.remove("hide");
  }
  if (event.target.innerHTML === "2012") {
    document.querySelector("#TheDarkKnightRises").classList.remove("hide");
  }
  if (event.target.innerHTML === "2016") {
    document.querySelector("#BatmanvSuperman").classList.remove("hide");
  }
  if (event.target.innerHTML === "2017") {
    document.querySelector("#JusticeLeague").classList.remove("hide");
  }
}
