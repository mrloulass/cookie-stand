'use strict';

console.log('Hello World');

// add global variables
//  - add hours array
//  - add elements by id for the 5 ul list
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let tableData = document.getElementById('tableData');

// let seattleList = document.getElementById('seattle');
// let tokyoList = document.getElementById('tokyo');
// let dubaiList = document.getElementById('dubai');
// let parisList = document.getElementById('paris');
// let limaList = document.getElementById('lima');

// change object literals to constructor object functions
function Store(name, minimunCustomerHourly, maximumCustomerHourly, avgerageCookiesSoldPerCustomer) {
  this.name = name;
  this.minimunCustomerHourly = minimunCustomerHourly;
  this.maximumCustomerHourly = maximumCustomerHourly;
  this.avgerageCookiesSoldPerCustomer = avgerageCookiesSoldPerCustomer;
  this.cookiesSoldHourlyArray = [];
  this.dailyStoreTotal = 0;
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
  for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${hours[i]}: ${this.cookiesSoldHourlyArray[i]} cookies`;
    seattleList.appendChild(li);
  }
  let li = document.createElement('li');
  li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
  seattleList.appendChild(li);
};
Store.prototype.render = function(){
  let headTr = document.createElement('thead');
  tableData.appendChild(headTr);
  let tr = document.createElement('tr');
  headTr.appendChild(tr);
  for (let i = 0; i < hours.length; i++){
    let td = document.createElement('td');
    td.textContent = hours[i];
    tr.appendChild(td);
  }
};

let seattle = new Store('Seattle', 23, 65, 6.3);
// console.log(seattle);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);


// write 5 object literals - add three methods - run each one and make sure they run in console.log

// let seattle = {
//   name: 'Seattle',
//   // The minimum number of customers per hour.
//   minimunCustomerHourly: 23,
//   // The maximum number of customers per hour.
//   maximumCustomerHourly: 65,
//   // The average number of cookies purchased per customer
//   avgerageCookiesSoldPerCustomer: 6.3,
//   // will hold the calcuated number of cookies sold each hour
//   cookiesSoldHourlyArray: [],
//   // will hold the calcuated number of cookies sold in the store all day long
//   dailyStoreTotal: 0,
//   // a method to calculate random number of customers per hour
//   // generates a random number of customers inclusive of the min and max
//   randomCustomerHourly: function(){
//     // console.log ('Im in randomCustomerHourly');
//     // genarates a random number of customers inclusive of the min and max // return some math here
//     // use docs link in README.md
//     return Math.floor(Math.random() * (this.maximumCustomerHourly - this.minimunCustomerHourly + 1) + this.minimunCustomerHourly);
//   },
//   // a method to calcualte and populate our number of cookies sold per hour array

//   // do something  for loop// return some math here
//   //     multiply customer number by avg
//   //     handle the number. do some rounding
//   //     //  proof of life
//   //     push into the  cookiesSoldHourlyArray

//   calCookiesSoldHourly: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomCustomer = this.randomCustomerHourly();
//       let hourlyTotal = Math.ceil(randomCustomer * this.avgerageCookiesSoldPerCustomer);
//       this.cookiesSoldHourlyArray.push(hourlyTotal);
//       this.dailyStoreTotal += hourlyTotal;
//     }
//   },

//   // a method to render the list items

//   render: function(){
//     this.calCookiesSoldHourly();
//     // console.log('I am in the render method');
//     for (let i = 0; i < hours.length; i++){
//       let li = document.createElement('li');
//       // console.log(li);
//       // add total
//       li.textContent = `${hours[i]}: ${this.cookiesSoldHourlyArray[i]} cookies`;
//       // append it to the DOM
//       seattleList.appendChild(li);
//     }
//     // total
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
//     seattleList.appendChild(li);
//   }
// };

// let tokyo = {
//   name: 'Tokyo',
//   minimunCustomerHourly: 3,
//   maximumCustomerHourly: 24,
//   avgerageCookiesSoldPerCustomer: 1.2,
//   cookiesSoldHourlyArray: [],
//   dailyStoreTotal: 0,
//   randomCustomerHourly: function () {
//     return Math.floor(Math.random() * (this.maximumCustomerHourly - this.minimunCustomerHourly + 1) + this.minimunCustomerHourly);
//   },
//   calCookiesSoldHourly: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomCustomer = this.randomCustomerHourly();
//       let hourlyTotal = Math.ceil(randomCustomer * this.avgerageCookiesSoldPerCustomer);
//       this.cookiesSoldHourlyArray.push(hourlyTotal);
//       this.dailyStoreTotal += hourlyTotal;
//     }
//   },
//   render: function () {
//     this.calCookiesSoldHourly();
//     for (let i = 0; i < hours.length; i++){
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldHourlyArray[i]} cookies`;
//       tokyoList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
//     tokyoList.appendChild(li);
//   }
// };

// let dubai = {
//   name: 'Dubai',
//   minimunCustomerHourly: 11,
//   maximumCustomerHourly: 38,
//   avgerageCookiesSoldPerCustomer: 3.7,
//   cookiesSoldHourlyArray: [],
//   dailyStoreTotal: 0,
//   randomCustomerHourly: function () {
//     return Math.floor(Math.random() * (this.maximumCustomerHourly - this.minimunCustomerHourly + 1) + this.minimunCustomerHourly);
//   },
//   calCookiesSoldHourly: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomCustomer = this.randomCustomerHourly();
//       let hourlyTotal = Math.ceil(randomCustomer * this.avgerageCookiesSoldPerCustomer);
//       this.cookiesSoldHourlyArray.push(hourlyTotal);
//       this.dailyStoreTotal += hourlyTotal;
//     }
//   },
//   render: function () {
//     this.calCookiesSoldHourly();
//     for (let i = 0; i < hours.length; i++){
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldHourlyArray[i]} cookies`;
//       dubaiList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
//     dubaiList.appendChild(li);
//   }
// };

// let paris = {
//   name: 'Paris',
//   minimunCustomerHourly: 20,
//   maximumCustomerHourly: 38,
//   avgerageCookiesSoldPerCustomer: 2.3,
//   cookiesSoldHourlyArray: [],
//   dailyStoreTotal: 0,
//   randomCustomerHourly: function () {
//     return Math.floor(Math.random() * (this.maximumCustomerHourly - this.minimunCustomerHourly + 1) + this.minimunCustomerHourly);
//   },
//   calCookiesSoldHourly: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomCustomer = this.randomCustomerHourly();
//       let hourlyTotal = Math.ceil(randomCustomer * this.avgerageCookiesSoldPerCustomer);
//       this.cookiesSoldHourlyArray.push(hourlyTotal);
//       this.dailyStoreTotal += hourlyTotal;
//     }
//   },
//   render: function () {
//     this.calCookiesSoldHourly();
//     for (let i = 0; i < hours.length; i++){
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldHourlyArray[i]} cookies`;
//       parisList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
//     parisList.appendChild(li);
//   }
// };

// let lima = {
//   name: 'Lima',
//   minimunCustomerHourly: 2,
//   maximumCustomerHourly: 16,
//   avgerageCookiesSoldPerCustomer: 4.6,
//   cookiesSoldHourlyArray: [],
//   dailyStoreTotal: 0,
//   randomCustomerHourly: function () {
//     return Math.floor(Math.random() * (this.maximumCustomerHourly - this.minimunCustomerHourly + 1) + this.minimunCustomerHourly);
//   },
//   calCookiesSoldHourly: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomCustomer = this.randomCustomerHourly();
//       let hourlyTotal = Math.ceil(randomCustomer * this.avgerageCookiesSoldPerCustomer);
//       this.cookiesSoldHourlyArray.push(hourlyTotal);
//       this.dailyStoreTotal += hourlyTotal;
//     }
//   },
//   render: function () {
//     this.calCookiesSoldHourly();
//     for (let i = 0; i < hours.length; i++){
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldHourlyArray[i]} cookies`;
//       limaList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
//     limaList.appendChild(li);
//   }
// };

seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();
