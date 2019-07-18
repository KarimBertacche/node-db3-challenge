
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient: 'pasta'},
        {id: 2, ingredient: 'tomato sauce'},
        {id: 3, ingredient: 'coffe'},
        {id: 4, ingredient: 'milk'},
        {id: 5, ingredient: 'chocolate'},
        {id: 6, ingredient: 'dough'},
        {id: 7, ingredient: 'cheese'},
        {id: 8, ingredient: 'biscuits'},
        {id: 9, ingredient: 'sugar'},
      ]);
    });
};
