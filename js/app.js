'use strict';

// add global variables
//  - add hours array
//  - add elements by id for table

const hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

let allCookiesStands = [];

let cookieTable = document.getElementById('cookieTable');

let totalsForFooter = [];

let grandTotals = 0;

// - add a event handler or listener
//    -step one. add element id from HTML/DOM
let myForm = document.getElementById('box-one');



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
  let tableBody = document.createElement('tbody');
  cookieTable.appendChild(tableBody);

  let tr = document.createElement('tr');
  tableBody.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = this.name;
  tr.appendChild(th);

  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesSoldHourlyArray[i];
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = `${this.dailyStoreTotal}`;
  tr.appendChild(td);
};

function calFooterTotals() {
  totalsForFooter = [];
  grandTotals = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourTotal = 0;
    for (let j = 0; j < allCookiesStands.length; j++) {
      hourTotal += allCookiesStands[j].cookiesSoldHourlyArray[i];
    }
    totalsForFooter.push(hourTotal);
    grandTotals += hourTotal;
  }
}
// - add an event handler or listener
//    -step three. event handler- declare callback function with one parameter
//    -parameter = event
function dataSubmit(event) {
  event.preventDefault();

  let location = event.target.location.value;
  let minimum = +event.target.minimum.value;
  let maximum = +event.target.maximum.value;
  let average = +event.target.average.value;

  let newStore = new Store(location, minimum, maximum, average);
  newStore.render();
  let tfooter = document.getElementById('tfooter');
  tfooter.remove();
  renderFooter();

}


new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

function renderAll() {
  // use a for loop
  for (let i = 0; i < allCookiesStands.length; i++) {
    allCookiesStands[i].render();
  }

}
function renderHeader() {
  let header = document.createElement('thead');
  cookieTable.appendChild(header);
  let th = document.createElement('th');
  header.appendChild(th);
  for (let i = 0; i < hours.length; i++) {
    let th = document.createElement('th');
    th.textContent = hours[i];
    header.appendChild(th);
  }
  th = document.createElement('th');
  th.textContent = 'Daily Location Total';
  header.appendChild(th);
}

function renderFooter() {
  calFooterTotals();
  console.log(totalsForFooter);
  let tfooter = document.createElement('tfoot');
  tfooter.setAttribute('id', 'tfooter');
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = 'Totals';
  tr.appendChild(td);

  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = totalsForFooter[i];
    tr.appendChild(td);
  }
  td = document.createElement('td');
  td.textContent = grandTotals;
  tr.appendChild(td);

  tfooter.appendChild(tr);
  cookieTable.appendChild(tfooter);
}
renderHeader();
renderAll();
renderFooter();


// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();


// - add an event handler or listener
//    -step two. pass in two arguments - event as string and callback function
myForm.addEventListener('submit', dataSubmit);
