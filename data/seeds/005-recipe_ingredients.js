exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients').insert([
    { quantity: '1', ingredient_id: '1', recipe_id: '1'},
    { quantity: '1.5', ingredient_id: '2', recipe_id: '2'},
    { quantity: '2', ingredient_id: '3', recipe_id: '3'},
    { quantity: '2.5', ingredient_id: '4', recipe_id: '4'},
    { quantity: '3', ingredient_id: '5', recipe_id: '5'},
    { quantity: '3.5', ingredient_id: '6', recipe_id: '6'},
    { quantity: '4', ingredient_id: '7', recipe_id: '7'},
    { quantity: '4.5', ingredient_id: '8', recipe_id: '8'},
    { quantity: '5', ingredient_id: '9', recipe_id: '9'},
  ]);
};
