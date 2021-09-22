'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let projectedModifiers = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];
// console.log(hours.length);
// console.log(projectedModifiers.length);
Stand.all = [];

let generateCust = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function Stand(city, minCustomer, maxCustomer, avgCookieSale){
  this.city = city;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.salesResult = [];
  this.salesTotal = 0;
  Stand.all.push(this);
}

Stand.prototype.cookiesSold = function() {

  for (let i = 0; i < hours.length; i++){

    let customerAmt = generateCust(this.minCustomer, (this.maxCustomer * projectedModifiers[i]));
    let hourlySales = Math.floor(customerAmt * this.avgCookieSale);
    this.salesTotal = this.salesTotal + hourlySales;
    this.salesResult.push(hourlySales);

  }
};

let tableHeadEl = document.getElementById('head');
let tableBodyEl = document.getElementById('body');
let tableFootEl = document.getElementById('foot');

Stand.prototype.tableRender = function () {
  let rowEl = document.createElement('tr');

  let cityCell = document.createElement('td');
  cityCell.innerText = this.city;
  rowEl.appendChild(cityCell);

  for (let i = 0; i < hours.length; i++){

    let salesEl = document.createElement('td');
    salesEl.innerText = this.salesResult[i];
    rowEl.appendChild(salesEl);
  }

  let overallSalesEl = document.createElement('td');
  overallSalesEl.innerText = this.salesTotal;
  rowEl.appendChild(overallSalesEl);

  tableBodyEl.appendChild(rowEl);

};

function tableHeader(){
  let rowEl = document.createElement('tr');

  let blankCell = document.createElement('th');
  blankCell.innerText = '';
  rowEl.appendChild(blankCell);

  for (let i = 0; i < hours.length; i++){
    let hoursHeadEl = document.createElement('th');
    hoursHeadEl.innerText = hours[i];
    rowEl.appendChild(hoursHeadEl);
  }
  let dailyLocationTotal = document.createElement('th');
  dailyLocationTotal.innerText = 'Daily Location Totals';
  rowEl.appendChild(dailyLocationTotal);

  tableHeadEl.appendChild(rowEl);
}
tableHeader();

function tableFooter(){

  let rowEl = document.createElement('tr');

  let blankCell = document.createElement('td');
  blankCell.innerText = 'Total';
  rowEl.appendChild(blankCell);

  let counterGrandTotal = 0;
  for(let x = 0; x < hours.length; x++){
    let hourlyTotal = 0;
    console.log(Stand.all);
    console.log(Stand.all.length);
    // for(let i = 0; i < Stand.all.length; i++){
    //   console.log('made it');
    //   console.log(Stand.all[i]);
    //   hourlyTotal += Stand.all[i].salesResult[x];
    //   counterGrandTotal += Stand.all[i].salesResult[x];
    // }
    blankCell = document.createElement('td');
    blankCell.innerText = hourlyTotal;
    rowEl.appendChild(blankCell);
  }
  blankCell = document.createElement('td');
  blankCell.innerText = counterGrandTotal;
  rowEl.appendChild(blankCell);

  tableFootEl.appendChild(rowEl);
}
tableFooter();

// console.log(Stand.all);

let seattle = new Stand('Seattle', 23, 65, 6.3);
seattle.cookiesSold();
seattle.tableRender();

let tokyo = new Stand('Tokyo', 3, 24, 1.2);
tokyo.cookiesSold();
tokyo.tableRender();

let dubai = new Stand('Dubai', 11, 38, 3.7);
dubai.cookiesSold();
dubai.tableRender();

let paris = new Stand('Paris', 20, 38, 2.3);
paris.cookiesSold();
paris.tableRender();

let lima = new Stand('Lima', 2, 16, 4.6);
lima.cookiesSold();
lima.tableRender();

// Stand.cookiesSold();

// let parentEl = document.getElementById('stands');

// let seattleStand = {
//   city: 'Seattle',
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookieSale: 6.3,
//   salesResults: [],
//   sold: function(parentElement){

//     let salesTotal = 0;
//     //create city header
//     let cityEl = document.createElement('h2');
//     cityEl.innerText = this.city;
//     parentEl.appendChild(cityEl);
//     //create ul element
//     let listEl = document.createElement('ul');

//     for (let i = 0; i < this.hours.length; i++){

//       let hourlySales = Math.floor((this.avgCustomer() * this.avgCookieSale));
//       salesTotal = salesTotal + hourlySales; //thank you Chloe for helping with the design for overall sales
//       this.salesResults.push(hourlySales);

//       let hourlyEl = document.createElement('li');
//       hourlyEl.innerText = this.hours[i] + ': ' + hourlySales + ' cookies';

//       listEl.appendChild(hourlyEl);

//       parentElement.appendChild(listEl);
//     }

//     let overallSalesEl = document.createElement('li');
//     overallSalesEl.innerText = 'Overall: ' + salesTotal + ' cookies';
//     listEl.appendChild(overallSalesEl);

//   },
// };

// seattleStand.sold(parentEl);
// console.log(seattleStand.salesResults);

// let tokyoStand = {
//   city: 'Tokyo',
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCustomer: function(){
//     return Math.floor(Math.random()*((this.maxCustomer-this.minCustomer)+1) + this.minCustomer);
//   },
//   avgCookieSale: 1.2,
//   salesResults: [],
//   sold: function(parentElement){

//     let salesTotal = 0;
//     //create city header
//     let cityEl = document.createElement('h2');
//     cityEl.innerText = this.city;
//     parentEl.appendChild(cityEl);
//     //create ul element
//     let listEl = document.createElement('ul');

//     for (let i = 0; i < this.hours.length; i++){

//       let hourlySales = Math.floor((this.avgCustomer() * this.avgCookieSale));
//       salesTotal = salesTotal + hourlySales;
//       this.salesResults.push(hourlySales);

//       let hourlyEl = document.createElement('li');
//       hourlyEl.innerText = this.hours[i] + ': ' + hourlySales + ' cookies';

//       listEl.appendChild(hourlyEl);

//       parentElement.appendChild(listEl);
//     }

//     let overallSalesEl = document.createElement('li');
//     overallSalesEl.innerText = 'Overall: ' + salesTotal + ' cookies';
//     listEl.appendChild(overallSalesEl);

//   },
// };

// tokyoStand.sold(parentEl);
// console.log(tokyoStand.salesResults);

// let dubaiStand = {
//   city: 'Dubai',
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCustomer: function(){
//     return Math.floor(Math.random()*((this.maxCustomer-this.minCustomer)+1) + this.minCustomer);
//   },
//   avgCookieSale: 3.7,
//   salesResults: [],
//   sold: function(parentElement){

//     let salesTotal = 0;
//     //create city header
//     let cityEl = document.createElement('h2');
//     cityEl.innerText = this.city;
//     parentEl.appendChild(cityEl);
//     //create ul element
//     let listEl = document.createElement('ul');

//     for (let i = 0; i < this.hours.length; i++){

//       let hourlySales = Math.floor((this.avgCustomer() * this.avgCookieSale));
//       salesTotal = salesTotal + hourlySales;
//       this.salesResults.push(hourlySales);

//       let hourlyEl = document.createElement('li');
//       hourlyEl.innerText = this.hours[i] + ': ' + hourlySales + ' cookies';

//       listEl.appendChild(hourlyEl);

//       parentElement.appendChild(listEl);
//     }

//     let overallSalesEl = document.createElement('li');
//     overallSalesEl.innerText = 'Overall: ' + salesTotal + ' cookies';
//     listEl.appendChild(overallSalesEl);

//   },
// };

// dubaiStand.sold(parentEl);
// console.log(dubaiStand.salesResults);

// let parisStand = {
//   city: 'Paris',
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCustomer: function(){
//     return Math.floor(Math.random()*((this.maxCustomer-this.minCustomer)+1) + this.minCustomer);
//   },
//   avgCookieSale: 2.3,
//   salesResults: [],
//   sold: function(parentElement){

//     let salesTotal = 0;
//     //create city header
//     let cityEl = document.createElement('h2');
//     cityEl.innerText = this.city;
//     parentEl.appendChild(cityEl);
//     //create ul element
//     let listEl = document.createElement('ul');

//     for (let i = 0; i < this.hours.length; i++){

//       let hourlySales = Math.floor((this.avgCustomer() * this.avgCookieSale));
//       salesTotal = salesTotal + hourlySales;
//       this.salesResults.push(hourlySales);

//       let hourlyEl = document.createElement('li');
//       hourlyEl.innerText = this.hours[i] + ': ' + hourlySales + ' cookies';

//       listEl.appendChild(hourlyEl);

//       parentElement.appendChild(listEl);
//     }

//     let overallSalesEl = document.createElement('li');
//     overallSalesEl.innerText = 'Overall: ' + salesTotal + ' cookies';
//     listEl.appendChild(overallSalesEl);

//   },
// };

// parisStand.sold(parentEl);
// console.log(parisStand.salesResults);

// let limaStand = {
//   city: 'Lima',
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgCustomer: function(){
//     return Math.floor(Math.random()*((this.maxCustomer-this.minCustomer)+1) + this.minCustomer);
//   },
//   avgCookieSale: 4.6,
//   salesResults: [],
//   sold: function(parentElement){

//     let salesTotal = 0;
//     //create city header
//     let cityEl = document.createElement('h2');
//     cityEl.innerText = this.city;
//     parentEl.appendChild(cityEl);
//     //create ul element
//     let listEl = document.createElement('ul');

//     for (let i = 0; i < this.hours.length; i++){

//       let hourlySales = Math.floor((this.avgCustomer() * this.avgCookieSale));
//       salesTotal = salesTotal + hourlySales;
//       this.salesResults.push(hourlySales);

//       let hourlyEl = document.createElement('li');
//       hourlyEl.innerText = this.hours[i] + ': ' + hourlySales + ' cookies';

//       listEl.appendChild(hourlyEl);

//       parentElement.appendChild(listEl);
//     }

//     let overallSalesEl = document.createElement('li');
//     overallSalesEl.innerText = 'Overall: ' + salesTotal + ' cookies';
//     listEl.appendChild(overallSalesEl);

//   },
// };

// limaStand.sold(parentEl);
// console.log(limaStand.salesResults);
