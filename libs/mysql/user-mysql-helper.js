const TABLE_USER = 'users';
var queryBuilder = require('./query-builder');
var randomString = require('randomstring');
var moment = require('moment');
var commonMethods = require('../utils/common-methods');
var Promise = require('promise');

function _insertUser(name, email, password) {

    return new Promise(function (fulfill, reject) {
        queryBuilder.insert(TABLE_USER,{
            name : name,
            email: email,
            password: commonMethods.getMd5(password),
            token: randomString.generate({length:15, charset:'alphanumeric'}),
            updatedOn: moment().unix(),
            createdOn:moment().unix()
        },function (err, result) {
            if(err)
                reject(err);
            else
                fulfill(result);
        })
    });
}

function _selectUser(id,name, email, password,token) {
    return new Promise(function (fulfill, reject) {
        var qb = queryBuilder.select('id, name, email, createdOn');
        qb.select("TO_BASE64(CONCAT(`token`,'|',`createdOn`,'|',`id`)) AS authorization",false);
        if(id)
            qb.where('id',id);
        if(name)
            qb.where('name',name);
        if(email)
            qb.where('email',email);
        if(password)
            qb.where('password',commonMethods.getMd5(password));
        if(token)
        {
            var unBase = commonMethods.decodeBase64(token).split('|');
            console.log(unBase.length);
            // qb.where('');
        }
        qb.get(TABLE_USER,function (err, result) {
            if(err)
                reject(err);
            else
                fulfill(result);
        });
    });
}


module.exports = {
    selectUser : _selectUser,
    insertUesr:_insertUser
};
