let parentEl = document.getElementById('stands');

let seattleStand = {
  city: 'Seattle',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCustomer: 23,
  maxCustomer: 65,
  avgCustomer: function(){
    return Math.floor(Math.random()*((this.maxCustomer-this.minCustomer)+1) + this.minCustomer);
  },
  avgCookieSale: 6.3,
  salesResults: [],
  sold: function(parentElement){

    let salesTotal = 0;
    //create city header
    let cityEl = document.createElement('h2');
    cityEl.innerText = this.city;
    parentEl.appendChild(cityEl);
    //create ul element
    let listEl = document.createElement('ul');

    for (let i = 0; i < this.hours.length; i++){

      let hourlySales = Math.floor((this.avgCustomer() * this.avgCookieSale));
      salesTotal = salesTotal + hourlySales; //thank you Chloe for helping with the design for overall sales
      this.salesResults.push(hourlySales);

      let hourlyEl = document.createElement('li');
      hourlyEl.innerText = this.hours[i] + ': ' + hourlySales + ' cookies';

      listEl.appendChild(hourlyEl);

      parentElement.appendChild(listEl);
    }

    let overallSalesEl = document.createElement('li');
    overallSalesEl.innerText = 'Overall: ' + salesTotal + ' cookies';
    listEl.appendChild(overallSalesEl);

  },
};

seattleStand.sold(parentEl);
console.log(seattleStand.salesResults);

let tokyoStand = {
  city: 'Tokyo',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCustomer: 3,
  maxCustomer: 24,
  avgCustomer: function(){
    return Math.floor(Math.random()*((this.maxCustomer-this.minCustomer)+1) + this.minCustomer);
  },
  avgCookieSale: 1.2,
  salesResults: [],
  sold: function(parentElement){

    let salesTotal = 0;
    //create city header
    let cityEl = document.createElement('h2');
    cityEl.innerText = this.city;
    parentEl.appendChild(cityEl);
    //create ul element
    let listEl = document.createElement('ul');

    for (let i = 0; i < this.hours.length; i++){

      let hourlySales = Math.floor((this.avgCustomer() * this.avgCookieSale));
      salesTotal = salesTotal + hourlySales;
      this.salesResults.push(hourlySales);

      let hourlyEl = document.createElement('li');
      hourlyEl.innerText = this.hours[i] + ': ' + hourlySales + ' cookies';

      listEl.appendChild(hourlyEl);

      parentElement.appendChild(listEl);
    }

    let overallSalesEl = document.createElement('li');
    overallSalesEl.innerText = 'Overall: ' + salesTotal + ' cookies';
    listEl.appendChild(overallSalesEl);

  },
};

tokyoStand.sold(parentEl);
console.log(tokyoStand.salesResults);

let dubaiStand = {
  city: 'Dubai',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCustomer: 11,
  maxCustomer: 38,
  avgCustomer: function(){
    return Math.floor(Math.random()*((this.maxCustomer-this.minCustomer)+1) + this.minCustomer);
  },
  avgCookieSale: 3.7,
  salesResults: [],
  sold: function(parentElement){

    let salesTotal = 0;
    //create city header
    let cityEl = document.createElement('h2');
    cityEl.innerText = this.city;
    parentEl.appendChild(cityEl);
    //create ul element
    let listEl = document.createElement('ul');

    for (let i = 0; i < this.hours.length; i++){

      let hourlySales = Math.floor((this.avgCustomer() * this.avgCookieSale));
      salesTotal = salesTotal + hourlySales;
      this.salesResults.push(hourlySales);

      let hourlyEl = document.createElement('li');
      hourlyEl.innerText = this.hours[i] + ': ' + hourlySales + ' cookies';

      listEl.appendChild(hourlyEl);

      parentElement.appendChild(listEl);
    }

    let overallSalesEl = document.createElement('li');
    overallSalesEl.innerText = 'Overall: ' + salesTotal + ' cookies';
    listEl.appendChild(overallSalesEl);

  },
};

dubaiStand.sold(parentEl);
console.log(dubaiStand.salesResults);

let parisStand = {
  city: 'Paris',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCustomer: 20,
  maxCustomer: 38,
  avgCustomer: function(){
    return Math.floor(Math.random()*((this.maxCustomer-this.minCustomer)+1) + this.minCustomer);
  },
  avgCookieSale: 2.3,
  salesResults: [],
  sold: function(parentElement){

    let salesTotal = 0;
    //create city header
    let cityEl = document.createElement('h2');
    cityEl.innerText = this.city;
    parentEl.appendChild(cityEl);
    //create ul element
    let listEl = document.createElement('ul');

    for (let i = 0; i < this.hours.length; i++){

      let hourlySales = Math.floor((this.avgCustomer() * this.avgCookieSale));
      salesTotal = salesTotal + hourlySales;
      this.salesResults.push(hourlySales);

      let hourlyEl = document.createElement('li');
      hourlyEl.innerText = this.hours[i] + ': ' + hourlySales + ' cookies';

      listEl.appendChild(hourlyEl);

      parentElement.appendChild(listEl);
    }

    let overallSalesEl = document.createElement('li');
    overallSalesEl.innerText = 'Overall: ' + salesTotal + ' cookies';
    listEl.appendChild(overallSalesEl);

  },
};

parisStand.sold(parentEl);
console.log(parisStand.salesResults);

let limaStand = {
  city: 'Lima',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCustomer: 2,
  maxCustomer: 16,
  avgCustomer: function(){
    return Math.floor(Math.random()*((this.maxCustomer-this.minCustomer)+1) + this.minCustomer);
  },
  avgCookieSale: 4.6,
  salesResults: [],
  sold: function(parentElement){

    let salesTotal = 0;
    //create city header
    let cityEl = document.createElement('h2');
    cityEl.innerText = this.city;
    parentEl.appendChild(cityEl);
    //create ul element
    let listEl = document.createElement('ul');

    for (let i = 0; i < this.hours.length; i++){

      let hourlySales = Math.floor((this.avgCustomer() * this.avgCookieSale));
      salesTotal = salesTotal + hourlySales;
      this.salesResults.push(hourlySales);

      let hourlyEl = document.createElement('li');
      hourlyEl.innerText = this.hours[i] + ': ' + hourlySales + ' cookies';

      listEl.appendChild(hourlyEl);

      parentElement.appendChild(listEl);
    }

    let overallSalesEl = document.createElement('li');
    overallSalesEl.innerText = 'Overall: ' + salesTotal + ' cookies';
    listEl.appendChild(overallSalesEl);

  },
};

limaStand.sold(parentEl);
console.log(limaStand.salesResults);
