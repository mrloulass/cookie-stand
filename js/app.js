'use strict';

console.log('Hello World');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  name: 'Seattle',
  // The minimum number of customers per hour.
  minimunCustomerHourly: 23,
  // The maximum number of customers per hour.
  maximumCustomerHourly: 65,
  // The average number of cookies purchased per customer
  avgerageCookiesSoldPerCustomer: 6.3,
  // will hold the calcuated number of cookies sold each hour
  cookiesSoldHourlyArray: [],
  // will hold the calcuated number of cookies sold in the store all day long
  dailyStoreTotal: 0,
  // a method to calculate random number of customers per hour
  // generates a random number of customers inclusive of the min and max
  randomCustomerHourly: function(){
    // console.log ('Im in randomCustomerHourly');
    // genarates a random number of customers inclusive of the min and max // return some math here
    return Math.floor(Math.random() * (this.maximumCustomerHourly - this.minimunCustomerHourly + 1) + this.minimunCustomerHourly);
  },
  // a method to calcualte and populate our number of cookies sold per hour array
  calCookiesSoldHourly: function(){
    // console.log(randomCustomerForTheHour);
    // console.log('I am inside of calCookiesSoldHourly');
    for (let i = 0; i < hours.length; i++){
      let numberCookiesPerHour = this.randomCustomerHourly() * this.avgerageCookiesSoldPerCustomer;
      this.cookiesSoldHourlyArray.push(numberCookiesPerHour);
      this.dailyStoreTotal = this.dailyStoreTotal + numberCookiesPerHour;
    }
    // console.log(this.cookiesSoldHourlyArray );

  // do something  for loop// return some math here
  //     multiply customer number by avg
  //     handle the number. do some rounding
  //     //  proof of life
  //     push into the  cookiesSoldHourlyArray
  },
  // a method to render the list items.
  render: function(){
    this.calCookiesSoldHourly();
    // console.log('I am in the render method');
    let container = document.getElementById("container");
    // console.log(container);
    let h2 = document.createElement("h2");
    h2.innerHTML = this.name;
    container.append(h2);
    // do something
    let ul = document.createElement("ul");
    for (let i = 0; i < hours.length; i++){
      let li = document.createElement("li");
      li.innerHTML = `${hours[i]}: ${this.cookiesSoldHourlyArray[i]}`;
      ul.append(li);
    }
    let li = document.createElement("li");
    li.innerHTML = `Total cookies sold: ${this.dailyStoreTotal}`;
    ul.append(li);
  }
};

seattle.render();

// let tokyo = {
//   name: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
// };

// let dubai = {
//   name: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 3.7,
// };

// let paris = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
// };

// let lima = {
//   name: 'Lima',
//   min: 2,
//   max: 16,
//   avg: 4.6,
// };
