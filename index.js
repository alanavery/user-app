let db = require('./models');

// —————————————————————————————— M:M methods

// Add a unique toy to a pet

// db.pet.findOrCreate({
//   where: {
//     name: 'Fluffy',
//     species: 'cat'
//   }
// }).then(([pet, created]) => {
//   db.toy.findOrCreate({
//     where: {
//       type: 'stuffed animal',
//       color: 'gray'
//     }
//   }).then(([toy, created]) => {
//     pet.addToy(toy).then(relationInfo => {
//       console.log(`${toy.type} has been added to ${pet.name}`);
//     });
//   });
// });

// db.pet.findOrCreate({
//   where: {
//     name: 'Boo',
//     species: 'dog'
//   }
// }).then(([pet, created]) => {
//   db.toy.findOrCreate({
//     where: {
//       type: 'stuffed animal',
//       color: 'gray'
//     }
//   }).then(([toy, created]) => {
//     pet.addToy(toy).then(relationInfo => {
//       console.log(`${toy.type} has been added to ${pet.name}`);
//     });
//   });
// });

// Get all pets that use a toy

// db.toy.findOne({
//   where: {
//     type: 'stuffed animal'
//   }
// }).then(toy => {
//   toy.getPets().then(pets => {
//     console.log(`These are the pets that love the ${toy.type}:`);
//     pets.forEach(pet => {
//       console.log(pet.name);
//     });
//   });
// });

// Add a pet association on a toy if there are none

db.toy.findOrCreate({
  where: {
    type: 'ball',
    color: 'green'
  }
}).then(([toy, created]) => {
  toy.getPets().then(pets => {
    if (pets.length > 0) {
      pets.forEach(pet => {
        console.log(`${pet.name} loves their ${toy.color} ${toy.type}.`);
      });
    } else {
      db.pet.findOrCreate({
        where: {
          name: 'Boo',
          species: 'dog'
        }
      }).then(([pet, created]) => {
        toy.addPet(pet).then(relationInfo => {
          console.log(`${pet.name} now loves their ${toy.color} ${toy.type}.`);
        });
      });
    }
  });
});






// —————————————————————————————— 1:M methods

// createModel

// db.user.findOne({
//   where: {
//     firstName: 'Emily'
//   }
// }).then((user) => {
//   user.createPet({
//     name: 'Peter',
//     species: 'chicken'
//   });
// });

// getModels

// db.user.findOne({
//   where: {
//     firstName: 'Emily'
//   }
// }).then((user) => {
//   user.getPets().then((pets) => {
//     console.log(`${user.firstName}'s pets:`);
//     pets.forEach(pet => {
//       console.log(pet.name);
//     });
//   });
// });

// db.pet.findOne({
//   where: {
//     name: 'George'
//   }
// }).then(pet => {
//   pet.getUser().then(user => {
//     console.log(user.firstName);
//   });
// });

// setModel and addModel

// db.pet.create({
//   name: 'Billy Bod',
//   species: 'snake'
// }).then(pet => {
//   console.log(pet);
// });

// db.pet.findOne({
//   where: {
//     name: 'Billy Bod'
//   }
// }).then(pet => {
//   db.user.findOne({
//     where: {
//       firstName: 'Alan'
//     }
//   }).then(user => {
//     pet.setUser(user);
//   });
// });

// include




// —————————————————————————————— Using models

// Create

// db.user.create({
//   firstName: 'Alan',
//   lastName: 'Avery',
//   age: 36
// }).then(createdUser => {
//   console.log(createdUser);
// });

// Read

// db.user.findOne({ where: { firstName: 'Ryan' } })
//   .then(foundUser => {
//     console.log(foundUser);
//   });

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

// db.pet.update({
//   species: 'dog'
// }, {
//   where: {
//     name: 'George'
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