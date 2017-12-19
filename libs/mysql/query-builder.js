const configs = require('../../configs/db.json');
const queryBuilder = require('node-querybuilder').QueryBuilder(configs,'mysql','single');


module.exports = queryBuilder;
