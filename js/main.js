"use strict";
const data = [
  {
    isEur: true,
    colors: ["lightgreen", "darkgreen"],
    headline: "REVENUE",
    headlineNumber: 200000,
    percentageTablet: 60,
    percentageSmartphone: 40,
    data: [120000, 80000],
  },
  {
    isEur: false,
    colors: ["lightblue", "darkblue"],
    headline: "IMPRESSIONS",
    headlineNumber: 50000000,
    percentageTablet: 40,
    percentageSmartphone: 60,
    data: [20000000, 30000000],
  },
  {
    isEur: false,
    colors: ["#FFC000", "	#FF4500"],
    headline: "VISITS",
    headlineNumber: 600000000,
    percentageTablet: 80,
    percentageSmartphone: 20,
    data: [480000000, 120000000],
  },
];

let main = () => {
  const main = document.querySelector("main");

  let buildSections = (html) => {
    main.innerHTML += html;
  };

  let formatNumbers = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  let degreeToRadians = (angle) => {
    return (angle * Math.PI) / 180;
  };

  let calculateEnd = (data, index, total) => {
    return degreeToRadians(calculateEndAngle(data, index, total));
  };

  let calculateEndAngle = (data, index, total) => {
    var angle = (data[index] / total) * 360;
    var inc = index === 0 ? 0 : calculateEndAngle(data, index - 1, total);
    return angle + inc;
  };

  let calculateStart = (data, index, total) => {
    if (index === 0) {
      return 0;
    }
    return calculateEnd(data, index - 1, total);
  };

  let drawDonuts = (item) => {
    let canvas = document.getElementById(item.headline);
    let ctx = canvas.getContext("2d");
    let total = item.headlineNumber;
    let x = canvas.width / 2;
    let y = canvas.height / 2;

    for (var i = 0; i < item.data.length; i++) {
      ctx.beginPath();
      ctx.arc(
        x,
        y,
        120,
        calculateStart(item.data, i, total),
        calculateEnd(item.data, i, total)
      );
      ctx.lineWidth = 10;
      ctx.font = "20px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "grey";
      ctx.fillText(item.headline, x, y - 10);
      ctx.fillStyle = "black";
      ctx.fillText(
        formatNumbers(item.headlineNumber) + (item.isEur ? " €" : ""),
        x,
        y + 30
      );
      ctx.strokeStyle = item.colors[i];
      ctx.stroke();
    }
  };

  data.map((item) => {
    buildSections(`
    <div class="is-wrapper is-centered-x is-centered-y is-column is-padding-14">
      <canvas id=${item.headline} width="250" height="250"></canvas>
      <div class="is-wrapper is-centered-y">
        <div class="is-row is-wrapper is-space-between is-width-300">
          <div class="is-column">
            <h2 class="is-font-size-14" style="color: ${
              item.colors[0]
            }">Tablet</h2>
            <div class="is-row is-wrapper is-padding-4 is-space-between">
              <p class="is-font-size-14 is-margin-right-4"> ${
                item.percentageTablet
              }% </p>
              <p class="is-font-color-grey is-font-size-14">${formatNumbers(
                (item.headlineNumber * item.percentageTablet) / 100
              )}${item.isEur ? "€" : ""}</p>
            </div>
          </div>
          <div class="is-column">
            <h2 class="is-font-size-14"style="color: ${
              item.colors[1]
            }; text-align: end">Smartphone</h2>
            <div class="is-row is-wrapper is-padding-4 is-space-between">
              <p class="is-margin-right-4 is-font-size-14">${
                item.percentageSmartphone
              }% </p>
              <p class="is-font-color-grey is-font-size-14">${formatNumbers(
                (item.headlineNumber * item.percentageSmartphone) / 100
              )}${item.isEur ? "€" : ""}</p>
            </div>
          </div>
        </div>
      </div>
      <hr size="2" width="100%" color="grey">  
    </div>
   `);
  });

  data.map((item) => {
    drawDonuts(item);
  });
};

window.addEventListener("load", main);
