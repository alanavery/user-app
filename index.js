let db = require('./models');

// Create

db.user.create({
  firstName: 'Alan',
  lastName: 'Avery',
  age: 36
}).then(createdUser => {
  console.log(createdUser);
});

// Read

db.user.findOne({
  where: { firstName: 'Alan' }
}).then(foundUser => {
  console.log(foundUser);
});

// Next...