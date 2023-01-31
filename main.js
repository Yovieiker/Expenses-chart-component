import data from "/data.json" assert { type: "json" };
let values = [];
let charBarsContainer = document.querySelector(".chart__bars-container");
data.forEach((element) => {
  values.push(element.amount);
  charBarsContainer.innerHTML += `<div class="chart__bar">
    <div class="chart__bar--label">$${element.amount}</div>
    <div class="chart__bar--day">${element.day}</div>
  </div>`;
});
let alturaMax = 150;
let valorMax = Math.max(...values);


let bars = document.querySelectorAll(".chart__bar");
bars = [...bars];

bars.forEach((bar) => {
  let nuevoValor = parseFloat(bar.childNodes[1].innerText.slice(1));
  let alturaActualpx = (nuevoValor * alturaMax) / valorMax;
  bar.style.height = `${alturaActualpx}px`;

  if (nuevoValor == valorMax) {
    bar.style.backgroundColor = "hsl(186, 34%, 60%)";
  }
  bar.addEventListener("mouseover", (event) => {
    if(event.target.className =="chart__bar"){
        let labelElement = event.target.childNodes[1];
        labelElement.style.display = "block";
    }
   
  });
  bar.addEventListener("mouseout", (event) => {
    if(event.target.className =="chart__bar"){
        let labelElement = event.target.childNodes[1];
        labelElement.style.display = "none";
    }
  });
});
