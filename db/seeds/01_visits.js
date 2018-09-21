
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('visits').del()
    .then(function () {
      // Inserts seed entries
      return knex('visits').insert([
        {id: 1, datetime: 1472711584, user: 125847452640, os: 3, device: 1},
        {id: 2, datetime: 1472706440, user: 177938365911, os: 2, device: 1},
        {id: 3, datetime: 1472706444, user: 177938365911, os: 2, device: 1},
        {id: 4, datetime: 1472706504, user: 177938365911, os: 2, device: 2},
        {id: 5, datetime: 1472714474, user: 38099732032, os: 2, device: 1},
        {id: 6, datetime: 1472714544, user: 38099732032, os: 5, device: 1},
        {id: 7, datetime: 1472715005, user: 38099732032, os: 2, device: 2},
        {id: 8, datetime: 1472715005, user: 38099732032, os: 2, device: 3},
        {id: 9, datetime: 1472715005, user: 38099732032, os: 3, device: 3},
        {id: 10, datetime: 1472727972, user: 103585767010, os: 2, device: 3}
      ]);
    });
};
