const knex = require('knex');
const db = knex(require('../knexfile').development);

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes').where({ id }).first();
}

function findSteps(id) {
    return db('steps').where({ id });
}

function add(scheme) {
    return db('schemes').insert(scheme);
}

function update(changes, id) {
    return db('schemes').where({ id }).update(changes);
}

module.exports = {
    find,
    findById,
    add,
    update

}

