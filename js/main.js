'use strict';
const data = [
  {
    color1: 'lightgreen',
    color2: 'darkgreen',
    headline: 'Revenue',
    headlineNumber: 200000,
    percentageTablet: 60,
    percentageSmartphone: 40,
  },
  {
    color1: 'lightblue',
    color2: 'darkblue',
    headline: 'Impressions',
    headlineNumber: 50000000,
    percentageTablet: 40,
    percentageSmartphone: 60,
  },
  {
    color1: 'lightyellow',
    color2: 'orange',
    headline: 'Visits',
    headlineNumber: 600000000,
    percentageTablet: 80,
    percentageSmartphone: 20,
  },
]

let main = () => {
 const main = document.querySelector('main')

 let buildSections = (html) => {
 main.innerHTML += html;
 }
 data.map(item => {
  buildSections(`
  <div class="is-wrapper is-centered-x is-column">
  <div class="is-wrapper is-circle is-centered-x is-centered-y">
    <div class="is-column has-text-align-center">
      <h1>${item.headline}</h1>
      <h1>${item.headlineNumber}</h1>
    </div>
  </div>
  <div class="is-wrapper is-centered-y">
    <div class="is-row is-wrapper">
      <div class="is-column">
        <h2>Tablet</h2>
        <div class="is-row is-wrapper">
          <p>${item.percentageTablet}%</p>
          <p>${(item.headlineNumber*item.percentageTablet)/100}</p>
        </div>
      </div>
      <div class="is-column">
        <h2>Smartphone</h2>
        <div class="is-row is-wrapper">
          <p>${item.percentageSmartphone}%</p>
          <p>${((item.headlineNumber*item.percentageSmartphone)/100)}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="is-line"></div>
</div>
   `)
})
} 


window.addEventListener('load', main);