const db = require('../data/dbConfig.js');

const getDishes = () => {
  return db('dishes');
}

// const findById = id =>  {
//   return db('dishes')
//   .where({ id })
//   .first();
// }

const addDish = (dish) => {
  return db('dishes')
  .insert(dish)
  .then(ids => findById(ids[0]));
}

const getDish = (id) => {
  return db('dishes')
    .innerJoin('recipe_styles', 'dishes.id', '=', 'recipe_styles.id')
    .innerJoin('recipes', 'recipe_styles.id', '=', 'recipes.id')
    .select('recipes.name')
    .where({ 'recipe_styles.dish_id': id })
    .then(recipes => {
      return db('dishes')
        .where({ id })
        .first()
        .then(dish => {
          return { ...dish, recipes}
        })
    })

}

module.exports = {
  getDishes,
  addDish,
  getDish
};