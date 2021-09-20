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
  sold: function(parentElement){

    let listEl = document.createElement('ul');

    for (let i = 0; i < this.hours.length; i++){

      let hourlyEl = document.createElement('li');
      hourlyEl.innerText = this.hours[i] + ': ' + Math.floor((this.avgCustomer() * this.avgCookieSale));

      listEl.appendChild(hourlyEl);

      parentElement.appendChild(listEl);

    }

  },
};
seattleStand.sold(parentEl);




