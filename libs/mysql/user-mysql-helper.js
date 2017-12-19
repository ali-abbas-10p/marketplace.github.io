const TABLE_USER = 'users';
var queryBuilder = require('./query-builder');
var md5 = require('crypto').createHash('md5');
var randomString = require('randomstring');
var moment = require('moment');

function _insertUser(name, email, password,cb) {
    queryBuilder.insert(TABLE_USER,{
        name : name,
        email: email,
        password: md5.update(password).digest('hex'),
        token: randomString.generate({length:15, charset:'alphanumeric'}),
        updatedOn: moment().unix(),
        createdOn:moment().unix()
    },cb)
}

function _selectUser(id,name, email, password, cb) {
    var qb = queryBuilder.select('*');
    if(id)
        qb.where('id='+id);
    if(name)
        qb.where('name='+id);
    if(email)
        qb.where('email='+id);
    if(password)
        qb.where('password='+md5.update(password).digest('hex'));
    qb.get(TABLE_USER,cb);
}


module.exports = {
    selectUser : _selectUser,
    insertUesr:_insertUser
};
