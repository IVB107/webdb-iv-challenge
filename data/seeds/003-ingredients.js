exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { name: 'Cup of mozarella' },
    { name: 'Gram of Pizza Dough' },
    { name: 'Dash of Onion Powder' },
    { name: 'Gram of Pasta' },
    { name: 'Gram of Avocado' },
    { name: 'Gram of Celery' },
    { name: 'Gram of Rice' },
    { name: 'Nori Sheet' },
    { name: 'Tofu' }
  ]);
};