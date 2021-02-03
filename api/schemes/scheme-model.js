// scheme-model
const db = require("../../data/db-config")

module.exports = {find,
    findById, 
    findSteps,
    add,
    update,
    remove

};

/*
- `find()`:
  - Calling find returns a promise that resolves to an array of all schemes in the database.
  - No steps are included.
*/

async function find(){
    return db('schemes');
}

/*
- `findById(id)`:
  - Expects a scheme `id` as its only parameter.
  - Resolve to a _single_ scheme object.
  - On an invalid `id`, resolves to `null`, perhaps by doing `if (!schemaObject) return Promise.resolve(null)`.
*/

async function findById(id){
    return db('schemes').where({ id }).first();
}
/*
- `findSteps(id)`:
  - Expects a scheme `id`.
  - Resolves to an array of all correctly ordered step for the given scheme: `[ { id: 17, scheme_name: 'Find the Holy Grail', step_number: 1, instructions: 'quest'}, { id: 18, scheme_name: 'Find the Holy Grail', step_number: 2, instructions: '...and quest'}, etc. ]`.
  - This array should include the `scheme_name` _not_ the `scheme_id`.
*/
 function findSteps(scheme_id){
    // Find the steps
    return db('steps').where({ scheme_id }).first();
}

/*
- `add(scheme)`:
  - Expects a scheme object.
  - Inserts scheme into the database.
  - Resolves to the newly inserted scheme, including `id`.
*/

async function add(schemeData){
    return db('schemes').insert(schemeData)
}
/*
- `update(changes, id)`:
  - Expects a changes object and an `id`.
  - Updates the scheme with the given id.
  - Resolves to the newly updated scheme object.
*/
 function update(changes,id){
    return db('schemes').update(changes).where({id})
}
/*
- `remove(id)`:
  - Removes the scheme object with the provided id.
  - Resolves to the removed scheme
  - Resolves to `null` on an invalid id.
  - (Hint: Only worry about removing the `scheme`. The database is configured to automatically remove all associated steps.)
*/
function remove(id){
    return db('schemes').where( {id} ).del();
}