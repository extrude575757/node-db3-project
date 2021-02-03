// scheme-model
const db = require("../../data/db-config")

module.exports = {find,
    findById, 
    findSteps,
    add
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

