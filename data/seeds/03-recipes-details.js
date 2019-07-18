
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_details').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_details').insert([
        {id: 1, recipe_id: 1, ingredient_id: 1},
        {id: 2, recipe_id: 1, ingredient_id: 2},
        {id: 3, recipe_id: 1, ingredient_id: 7},
        {id: 4, recipe_id: 2, ingredient_id: 1},
        {id: 5, recipe_id: 2, ingredient_id: 2},
        {id: 6, recipe_id: 2, ingredient_id: 6},
        {id: 7, recipe_id: 2, ingredient_id: 7},
        {id: 8, recipe_id: 3, ingredient_id: 3},
        {id: 9, recipe_id: 3, ingredient_id: 4},
        {id: 10, recipe_id: 3, ingredient_id: 8},
        {id: 11, recipe_id: 3, ingredient_id: 9}
      ]);
    });
};
