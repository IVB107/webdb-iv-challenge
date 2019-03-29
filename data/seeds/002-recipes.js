exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { name: 'Cheese Pizza', directions: 'Pick up the phone and dial it in.'},
    { name: 'Veggie Pizza', directions: 'Pick up the phone and dial it in.'},
    { name: 'The Works', directions: 'Pick up the phone and dial it in.'},
    { name: 'Spaghetti', directions: 'Pick up the phone and dial it in.'},
    { name: 'Lasagna', directions: 'Pick up the phone and dial it in.'},
    { name: 'Tortellini', directions: 'Pick up the phone and dial it in.'},
    { name: 'Veggie Roll', directions: 'Pick up the phone and dial it in.'},
    { name: 'Dragon Roll', directions: 'Pick up the phone and dial it in.'},
    { name: 'Avocado Roll', directions: 'Pick up the phone and dial it in.'},
    { name: 'Spider Roll', directions: 'Pick up the phone and dial it in.'}
  ]);
};