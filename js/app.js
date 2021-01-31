'use strict';

// console.log('Hello World');

// add global variables
//  - add hours array
//  - add elements by id for table
let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

let allCookiesStands = [];

let cookieTable = document.getElementById('cookieTable');

let tr = document.createElement('tr');
cookieTable.appendChild(tr);
let topHours = document.createElement('td');
topHours.textContent = hours;
tr.appendChild(topHours);

// change object literals to constructor object functions
function Store(name, minimunCustomerHourly, maximumCustomerHourly, avgerageCookiesSoldPerCustomer) {
  this.name = name;
  this.minimunCustomerHourly = minimunCustomerHourly;
  this.maximumCustomerHourly = maximumCustomerHourly;
  this.avgerageCookiesSoldPerCustomer = avgerageCookiesSoldPerCustomer;
  this.cookiesSoldHourlyArray = [];
  this.dailyStoreTotal = 0;
  allCookiesStands.push(this);
}

Store.prototype.randomCustomerHourly = function () {
  return Math.floor(Math.random() * (this.maximumCustomerHourly - this.minimunCustomerHourly + 1) + this.minimunCustomerHourly);
};
Store.prototype.calCookiesSoldHourly = function () {
  for (let i = 0; i < hours.length; i++) {
    let randomCustomer = this.randomCustomerHourly();
    let hourlyTotal = Math.ceil(randomCustomer * this.avgerageCookiesSoldPerCustomer);
    this.cookiesSoldHourlyArray.push(hourlyTotal);
    this.dailyStoreTotal += hourlyTotal;
  }
};
Store.prototype.render = function () {
  this.calCookiesSoldHourly();

  let tr = document.createElement('tr');
  cookieTable.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = this.name;
  tr.appendChild(th);

  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesSoldHourlyArray[i];
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = `Total: ${this.dailyStoreTotal}`;
  tr.appendChild(td);
};

let seattle = new Store('Seattle', 23, 65, 6.3);
// console.log(seattle);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

function renderAll(){
  // use a for loop
  for (let i = 0; i < allCookiesStands.length; i++){
    allCookiesStands[i].render();
  }
}
renderAll();
// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();
