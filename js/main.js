"use strict";
const data = [
  {
    isEur: true,
    color1: "--lightgreen",
    color2: "--darkgreen",
    headline: "REVENUE",
    headlineNumber: 200000,
    percentageTablet: 60,
    percentageSmartphone: 40,
  },
  {
    isEur: false,
    color1: "--lightblue",
    color2: "--darkblue",
    headline: "IMPRESSIONS",
    headlineNumber: 50000000,
    percentageTablet: 40,
    percentageSmartphone: 60,
  },
  {
    isEur: false,
    color1: "--lightyellow",
    color2: "--orange",
    headline: "VISITS",
    headlineNumber: 600000000,
    percentageTablet: 80,
    percentageSmartphone: 20,
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

  data.map((item) => {
    buildSections(`
  <div class="is-wrapper is-centered-x is-centered-y is-column is-padding-14">
  <div class="is-wrapper is-circle is-padding-4 is-centered-x is-centered-y" style="border-color: var(${
    item.color1
  })">
    <div class="is-column is-text-align-center">
      <h1 class="is-font-size-18 is-font-color-grey ">${item.headline}</h1>
      <h1 class="is-font-size-26">${formatNumbers(item.headlineNumber)}${
      item.isEur ? "€" : ""
    }</h1>
    </div>
  </div>
  <div class="is-wrapper is-centered-y">
    <div class="is-row is-wrapper is-space-between is-width-300">
      <div class="is-column">
        <h2 class="is-font-size-14" style="color: var(${
          item.color1
        })">Tablet</h2>
        <div class="is-row is-wrapper is-padding-4 is-space-between">
          <p class="is-font-size-14 is-margin-right-4">${
            item.percentageTablet
          }% </p>
          <p class="is-font-color-grey is-font-size-14">${formatNumbers(
            (item.headlineNumber * item.percentageTablet) / 100
          )}${item.isEur ? "€" : ""}</p>
        </div>
      </div>
      <div class="is-column">
        <h2 class="is-font-size-14"style="color: var(${
          item.color2
        }); text-align: end">Smartphone</h2>
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
};

window.addEventListener("load", main);
