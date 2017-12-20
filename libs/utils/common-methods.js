var crypto = require('crypto');

/**
 *
 * @param {string} string
 * @returns {string}
 * @private
 */
function _getMd5(string) {
    return crypto.createHash('md5').update(string).digest('hex');
}



module.exports = {
    getMd5 : _getMd5
};