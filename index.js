let db = require('./models');

// Create

// db.user.create({
//   firstName: 'Alan',
//   lastName: 'Avery',
//   age: 36
// }).then(createdUser => {
//   console.log(createdUser);
// });

// Read

db.user.findOne({ where: { firstName: 'Ryan' } })
  .then(foundUser => {
    console.log(foundUser);
  });

// Find or create

// db.user.findOrCreate({
//   where: {
//     firstName: 'Emily',
//     lastName: 'Harmeyer'
//   },
//   defaults: { age: 35 }
// }).then(([user, created]) => {
//   console.log(user);
// });

// db.user.findOrCreate({
//   where: {
//     firstName: 'Ryan',
//   },
//   defaults: {
//     lastName: 'Johnson',
//     age: 35
//   }
// }).then(([user, created]) => {
//   console.log(user);
// });

// Find all

// db.user.findAll().then(users => {
//   console.log(users);
// });

// Update

// db.user.update({
//   firstName: 'Walter',
//   lastName: 'Mansilla',
//   age: 31
// }, {
//   where: {
//     id: 2
//   }
// }).then(numRowsChanged => {
//   console.log(numRowsChanged);
// });

// Delete

// db.user.destroy({
//   where: {
//     id: 3
//   }
// }).then(numRowsDeleted => {
//   console.log(numRowsDeleted);
// });