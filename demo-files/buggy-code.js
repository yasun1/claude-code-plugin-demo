// Buggy code for demonstrating bug-hunter agent

function divide(a, b) {
  return a / b;  // Bug: no check for b === 0
}

function processArray(arr) {
  for (var i = 0; i <= arr.length; i++) {  // Bug: off-by-one error
    console.log(arr[i]);
  }
}

function fetchUser(id) {
  const user = users[id];  // Bug: users not defined
  return user.name;  // Bug: no null check
}

function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;  // Bug: no check if price exists
  }
  return total;
}

module.exports = { divide, processArray, fetchUser, calculateTotal };
