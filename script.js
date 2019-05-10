window.addEventListener("load", loadSVG);

function loadSVG() {
  //console.log("load the svg");

  fetch("timeline.svg")
    .then(res => res.text())
    .then(svgdata => {
      console.log(svgdata);
      document.querySelector("main").insertAdjacentHTML("afterend", svgdata);

      //hide text
      const textList = document.querySelectorAll(".textMovie");
      console.log(textList);
      textList.forEach(hideText);

      //select
      const yearArrey = document.querySelectorAll(".click");
      console.log(yearArrey);

      yearArrey.forEach(year => {
        console.log(year);
        year.addEventListener("click", yearClicked);

        //hide lines
        const lines = document.querySelectorAll(".lines");

        console.log(lines);
        lines.forEach(hideLines);
      });
    });
}

function hideText(text) {
  text.classList.add("hide");
  console.log(text);
}

function hideLines(line) {
  line.classList.add("hide");
  console.log(line);
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
  if (event.target.innerHTML === "1966") {
    document.querySelector("#Line_2").classList.remove("hide");
    document.querySelector("#Line_3").classList.remove("hide");
  }
  if (event.target.innerHTML === "1989") {
    document.querySelector("#Line_5").classList.remove("hide");
    document.querySelector("#Line_6").classList.remove("hide");
  }
  if (event.target.innerHTML === "1992") {
    document.querySelector("#Line_8").classList.remove("hide");
    document.querySelector("#Line_9").classList.remove("hide");
  }
  if (event.target.innerHTML === "1995") {
    document.querySelector("#Line_11").classList.remove("hide");
    document.querySelector("#Line_12").classList.remove("hide");
  }
  if (event.target.innerHTML === "1997") {
    document.querySelector("#Line_13").classList.remove("hide");
    document.querySelector("#Line_14").classList.remove("hide");
  }
  if (event.target.innerHTML === "2005") {
    document.querySelector("#Line_15").classList.remove("hide");
    document.querySelector("#Line_16").classList.remove("hide");
  }
  if (event.target.innerHTML === "2008") {
    document.querySelector("#Line_17").classList.remove("hide");
    document.querySelector("#Line_18").classList.remove("hide");
  }
  if (event.target.innerHTML === "2012") {
    document.querySelector("#Line_19").classList.remove("hide");
    document.querySelector("#Line_20").classList.remove("hide");
  }
  if (event.target.innerHTML === "2016") {
    document.querySelector("#Line_21").classList.remove("hide");
    document.querySelector("#Line_22").classList.remove("hide");
  }
  if (event.target.innerHTML === "2017") {
    document.querySelector("#Line_23").classList.remove("hide");
    document.querySelector("#Line_24").classList.remove("hide");
  }
}
