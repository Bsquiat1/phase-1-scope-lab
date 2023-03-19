
var customerName = 'bob';


function returnCustomerName() {
  return customerName;
}


function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}


function setBestCustomer() {
  bestCustomer = 'not bob';
}

// 4) Overwrite the best customer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant called leastFavoriteCustomer and assign it some initial value
const leastFavoriteCustomer = 'Karen';


function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else';
}
