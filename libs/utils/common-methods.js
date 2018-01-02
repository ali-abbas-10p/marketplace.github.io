var crypto = require('crypto');

/**
 *
 * @param {string} string
 * @returns {string}
 * @private
 */
exports.getMd5 =  function (string) {
    return crypto.createHash('md5').update(string).digest('hex');
};

exports.decodeBase64 = function (base64) {
    return new Buffer(base64, 'base64').toString('ascii')
};
