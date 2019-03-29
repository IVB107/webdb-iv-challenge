
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('dishes', table => {
      table.increments();

      table
        .string('name', 128)
        .notNullable()
        .unique();
    })
    .createTable('recipes', table => {
      table.increments();

      table
        .string('name', 128)
        .notNullable()
        .unique();
      
      table
        .text('directions')
        .notNullable();
    })
    .createTable('ingredients', table => {
      table.increments();

      table
        .string('name', 255)
        .notNullable()
        .unique();
    })
    .createTable('recipe_styles', table => {
      table.increments();

      table
        .string('name', 128)
        .notNullable()
        .unique();
      
      table
        .integer('dish_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      table
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('recipe_ingredients', table => {
      table.increments();

      table
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      
      table
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      
      table
        .decimal('quantity').notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('recipe_styles')
    .dropTableIfExists('ingredients')  
    .dropTableIfExists('recipes')
    .dropTableIfExists('dishes');
};
