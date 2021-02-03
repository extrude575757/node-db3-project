// scheme-model
const db = require("../../data/db-config")

module.exports = {find,
    findById, 
    findSteps,
    add,
    update,
    remove
};
async function find(){
    return db('schemes');
}

async function findById(id){
    return db('schemes').where({ id }).first();
}

async function findSteps(id){
    // Find the steps
}
async function add(schemeData){
    return db('schemes').insert(schemeData)
}

 function update(changes,id){
    return db('schemes').update(changes).where({id})
}

function remove(id){
    return db('schemes').where( {id} ).del();
}