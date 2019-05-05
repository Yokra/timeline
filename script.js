"use strict";

window.addEventListener("load", loadSVG);
window.addEventListener("DOMContentLoaded", loadJSON);

function loadJSON() {
  //fetch.data.json file
  fetch("data.json")
    .then(res => res.json())
    .then(myJSON => {
      console.log(myJSON);
      myJSON.forEach(obj => {
        console.log(obj);

        const clone = document
          .querySelector("#template")
          .content.cloneNode(true);

        //console.log(clone);
        const dataFields = clone.querySelectorAll("[data-field]");
        dataFields.forEach(element => {
          //console.log(element);
          const property = element.dataset.field; //gerAttribute("data-field");
          console.log(property);
        });

        clone.querySelector("[data-field=title]").textContent = obj.title;
        clone.querySelector("[data-field=actor]").textContent = obj.actor;
        clone.querySelector("[data-field=director]").textContent = obj.director;
        clone.querySelector("[data-field=revenue]").textContent = obj.revenue;
      });
    });
}

const destination = document.querySelector(
  ".svgplaceholder[data-svgplaceholder=" + obj.id + "]"
);
destination.appendChild(clone);
console.log("desination");

function loadSVG() {
  //console.log("load the svg");

  fetch("timeline.svg")
    .then(res => res.text())
    .then(svgdata => {
      //console.log(svgdata);

      document
        .querySelector("#timeline")
        .insertAdjacentHTML("afterbegin", svgdata);
    });
}
