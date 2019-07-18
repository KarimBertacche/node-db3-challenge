exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', table => {
            table.increments();
            table.text('recipe_name', 128).unique().notNullable();
        })
        .createTable('ingredients', table => {
            table.increments();
            table.text('ingredient', 128).unique().notNullable();
        })
        .createTable('recipe_details', table => {
            table.increments();
            table.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes');
            table.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipe_details')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};
