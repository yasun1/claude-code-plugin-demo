// Messy code for demonstrating refactor-master agent

function doEverything(data) {
  // Magic number - what does 100 mean?
  if (data.length > 100) {
    // Long method with deep nesting
    for (let i = 0; i < data.length; i++) {
      if (data[i].active) {
        if (data[i].type === 'user') {
          if (data[i].age > 18) {
            if (data[i].verified) {
              console.log(data[i]);
              // More nested logic
              if (data[i].premium) {
                console.log('Premium user');
              }
            }
          }
        }
      }
    }
  }
  return data;
}

// Duplicated code
function processUsers(users) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].active) {
      console.log(users[i].name);
    }
  }
}

function processAdmins(admins) {
  for (let i = 0; i < admins.length; i++) {
    if (admins[i].active) {
      console.log(admins[i].name);
    }
  }
}

// Long parameter list
function createUser(firstName, lastName, email, age, country, city, zipCode, phone) {
  return {
    firstName, lastName, email, age, country, city, zipCode, phone
  };
}

module.exports = { doEverything, processUsers, processAdmins, createUser };
