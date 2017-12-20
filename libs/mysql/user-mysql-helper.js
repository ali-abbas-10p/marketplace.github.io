const TABLE_USER = 'users';
var queryBuilder = require('./query-builder');
var randomString = require('randomstring');
var moment = require('moment');
var commonMethods = require('../utils/common-methods');

function _insertUser(name, email, password,cb) {
    queryBuilder.insert(TABLE_USER,{
        name : name,
        email: email,
        password: commonMethods.getMd5(password),
        token: randomString.generate({length:15, charset:'alphanumeric'}),
        updatedOn: moment().unix(),
        createdOn:moment().unix()
    },cb)
}

function _selectUser(id,name, email, password, cb) {
    var qb = queryBuilder.select('*');
    if(id)
        qb.where('id',id);
    if(name)
        qb.where('name',name);
    if(email)
        qb.where('email',email);
    if(password)
        qb.where('password',commonMethods.getMd5(password));
    qb.get(TABLE_USER,cb);
}


module.exports = {
    selectUser : _selectUser,
    insertUesr:_insertUser
};
