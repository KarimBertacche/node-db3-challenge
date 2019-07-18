const knex = require('knex');
const db = knex(require('../knexfile').development);


function getRecipes() {
    return db('recipes');
}
// function find() {
//     return db('schemes');
// }

// function findById(id) {
//     return db('schemes').where({ id }).first();
// }

// function findSteps(id) {
//     return db.select('scheme_name', 'step_number', 'instructions')
//                 .from('steps')
//                 .innerJoin('schemes', 'schemes.id', 'steps.scheme_id')
//                 .where({ scheme_id: id });
// }

// function add(scheme) {
//     return db('schemes').insert(scheme);
// }

// function update(changes, id) {
//     return db('schemes').where({ id }).update(changes);
// }

// function remove(id) {
//     return db('schemes').where({ id }).del();
// }

// function addStep(step, scheme_id) {
//     return db('steps').insert({ 
//         scheme_id: scheme_id, 
//         instructions: step.instructions, 
//         step_number: step.step_number 
//     });
// }

module.exports = {
    getRecipes,
}

