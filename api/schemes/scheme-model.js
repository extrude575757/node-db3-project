// scheme-model
const db = require("../../data/db-config")

module.exports = {find};
async function find(){
    return db('schemes');
}