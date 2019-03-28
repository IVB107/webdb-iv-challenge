exports.seed = function(knex, Promise) {
  return knex('recipe_styles').insert([
    { name: 'Granny', dish_id: '1', recipe_id: '1'},
    { name: 'Vegan', dish_id: '1', recipe_id: '2'},
    { name: 'The Works', dish_id: '1', recipe_id: '3'},
    { name: 'Boring', dish_id: '2', recipe_id: '4'},
    { name: 'Weirdo', dish_id: '2', recipe_id: '5'},
    { name: 'Cannibal', dish_id: '2', recipe_id: '6'},
    { name: 'Opium Lord', dish_id: '3', recipe_id: '7'},
    { name: 'Grandpa', dish_id: '3', recipe_id: '8'},
    { name: 'Street', dish_id: '3', recipe_id: '9'}
  ]);
};